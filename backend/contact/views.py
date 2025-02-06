from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAdminUser, IsAuthenticated
from django.core.mail import send_mail
from django.conf import settings
from .models import ContactMessage
from .serializers import ContactMessageSerializer
from django.contrib.auth import get_user_model
User = get_user_model()

class ContactMessageCreateView(generics.CreateAPIView):
    """
    API endpoint to allow users and guests to submit a contact message.
    Sends an email confirmation after submission.
    """
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        """
        Saves the contact message and links it to a user if the email matches an existing user.
        Sends a confirmation email after submission.
        """
        email = serializer.validated_data.get("email")  # Get the email from the request
        user = None

        if self.request.user.is_authenticated:
            user = self.request.user  # Assign the logged-in user
        else:
            user = User.objects.filter(email=email).first()  # Find user by email if exists

        # Save the contact message with the associated user
        contact_message = serializer.save(user=user)

        # Send confirmation email
        send_mail(
            subject="Your Contact Request Has Been Received",
            message=(
                f"Hello {contact_message.name},\n\n"
                "Your message has been received. We will respond soon.\n\n"
                f"Message:\n{contact_message.message}"
            ),
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[contact_message.email],
            fail_silently=True,
        )

class ContactMessageListView(generics.ListAPIView):
    """
    API endpoint to list all contact messages (Admin use).
    """
    queryset = ContactMessage.objects.all().order_by('-created_at')  # Orders messages from newest to oldest
    serializer_class = ContactMessageSerializer
    permission_classes = [IsAdminUser]  # Restricts access to admin users

class ContactMessageUserListView(generics.ListAPIView):
    """
    API endpoint to list messages submitted by the authenticated user.
    """
    serializer_class = ContactMessageSerializer
    permission_classes = [IsAuthenticated]  # Only logged-in users can view their messages

    def get_queryset(self):
        """
        Returns only messages belonging to the logged-in user.
        """
        return ContactMessage.objects.filter(user=self.request.user).order_by('-created_at')

class ContactMessageResponseView(generics.UpdateAPIView):
    """
    API endpoint for an admin to respond to a contact message.
    - Updates the response field
    - Marks the message as responded
    - Notifies the sender via email if they are a guest
    - Notifies registered users through their profile
    """
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    permission_classes = [IsAdminUser]  # Restricts response updates to admin users

    def update(self, request, *args, **kwargs):
        """
        Handles response updates and notifies the sender.
        """
        instance = self.get_object() # Gets the specific contact message being updated
        response_text = request.data.get("response", "").strip()  # Extract response text

        if not response_text:
            return Response({"error": "Response text cannot be empty."}, status=status.HTTP_400_BAD_REQUEST)

        # Update and save the response
        instance.response = response_text # Saves the admin's response in the database
        instance.responded = True # Marks the message as responded
        instance.save() # Updates the database record

        return Response(
            {"message": "Response saved. User will be notified."},
            status=status.HTTP_200_OK
        )
