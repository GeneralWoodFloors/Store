# signals explanation:
# signals are a way to allow certain senders to notify a set of receivers when certain actions occur.
# These actions could be things like saving an object, deleting an object, or logging in a user. 
# Signals help decouple components in your application, so one part of your system can notify another part without directly linking the two.
#For example:
#Post-save signals are triggered after an object is saved to the database.
#Pre-save signals are triggered before an object is saved to the database.
#The main advantage of using signals is to trigger certain actions when an event occurs, without explicitly calling the function or method that should handle the event.
# It’s like listening to an event or action and responding to it automatically.


# This signal automatically send the email whenever a response is saved, 
# regardless of whether it’s done in the Admin panel or via the API.


from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.mail import send_mail
from django.conf import settings
from .models import ContactMessage

@receiver(post_save, sender=ContactMessage)
def send_response_email(sender, instance, created, **kwargs):
    # Trigger only when the response is added and it's not already responded to
    if instance.responded and instance.response:
        if instance.user is None:  # If the sender is a guest (no user associated)
            # Send email to the guest
            send_mail(
                subject="Response to Your Contact Request",
                message=(
                    f"Hello {instance.name},\n\n"
                    f"Here is our response to your message:\n\n{instance.response}"
                ),
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[instance.email],
                fail_silently=False,
            )
        else : 
            send_mail(
            subject="Response to Your Contact Request",
            message=(
                f"Hello {instance.name},\n\n"
                f"Admin has responded to your message! Please check their response in your profile! Thank you"
            ),
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[instance.email],
            fail_silently=False,
            )
