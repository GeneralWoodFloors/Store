import os
import requests
from dotenv import load_dotenv

load_dotenv()  # Load environment variables

CALENDLY_API_KEY = os.getenv("CALENDLY_API_TOKEN")
CALENDLY_API_URL = "https://api.calendly.com"

HEADERS = {
    "Authorization": f"Bearer {CALENDLY_API_KEY}",
    "Content-Type": "application/json",
}

def get_available_slots():
    """Fetch available event types (appointments) from Calendly."""
    url = f"{CALENDLY_API_URL}/event_types"
    response = requests.get(url, headers=HEADERS)
    return response.json()

def book_appointment(user_email, event_uri):
    """Book an appointment on Calendly."""
    payload = {"invitee_email": user_email, "event_type_uri": event_uri}
    url = f"{CALENDLY_API_URL}/scheduled_events"
    response = requests.post(url, json=payload, headers=HEADERS)
    return response.json()

def cancel_appointment(event_id):
    """Cancel a Calendly appointment."""
    url = f"{CALENDLY_API_URL}/scheduled_events/{event_id}"
    response = requests.delete(url, headers=HEADERS)
    return response.status_code == 204
