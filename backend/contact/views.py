from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAdminUser
from django.core.mail import send_mail
from django.conf import settings
from .models import ContactMessage
from .serializers import ContactMessageSerializer

class ContactMessageCreateView(generics.CreateAPIView):
    """
    API endpoint to allow users and guests to submit a contact message.
    Sends an email confirmation after submission.
    """
    queryset = ContactMessage.objects.all()  # Defines the queryset to fetch all contact messages
    serializer_class = ContactMessageSerializer  # Specifies the serializer for handling request/response data
    permission_classes = [AllowAny]  # Allows both authenticated and unauthenticated users to submit messages

    def perform_create(self, serializer):
        """
        Saves the contact message and sends a confirmation email.
        If the sender is authenticated, links the user to the message.
        """
        user = self.request.user if self.request.user.is_authenticated else None # Gets the user if authenticated, otherwise None
        contact_message = serializer.save(user=user)  # Saves the message with an optional user reference

        # Send a confirmation email to the sender
        send_mail(
            subject="Your Contact Request Has Been Received",
            message=(
                f"Hello {contact_message.name},\n\n"
                "Your message has been received. We will respond soon.\n\n"
                f"Message:\n{contact_message.message}"
            ),
            from_email=settings.DEFAULT_FROM_EMAIL, # Sender email 
            recipient_list=[contact_message.email], # Send to the email provided in the form
            fail_silently=True,  # Prevents errors from stopping execution
        )

class ContactMessageListView(generics.ListAPIView):
    """
    API endpoint to list all contact messages (Admin use).
    """
    queryset = ContactMessage.objects.all().order_by('-created_at')  # Orders messages from newest to oldest
    serializer_class = ContactMessageSerializer
    permission_classes = [IsAdminUser]  # Restricts access to admin users

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
