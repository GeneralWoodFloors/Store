# The signals.py file needs to be registered within the Django app for the signals to be active. 
# This is done by importing the signals.py file inside the apps.py file, specifically in the ready method of the app’s AppConfig class.
#Here’s the process:

#When Django starts, it loads all the installed apps (from INSTALLED_APPS in settings.py).
#Each app has a configuration class (usually located in apps.py).
#In the ready method of that config class, you can import and register signals so that Django knows to listen for them.

from django.apps import AppConfig

class ContactConfig(AppConfig):
    name = 'contact'

    def ready(self):
        import contact.signals  # Import the signals module to ensure it's registered
