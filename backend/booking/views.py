#views.py
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from .models import Booking
from .serializers import BookingSerializer
from .utils import get_available_slots, book_appointment, cancel_appointment

class AvailableSlotsView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        slots = get_available_slots()
        return Response(slots)

class BookAppointmentView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        email = request.data.get("email")
        event_uri = request.data.get("event_uri")
        response = book_appointment(email, event_uri)

        if "resource" in response:
            event_id = response["resource"]["uri"].split("/")[-1]
            booking = Booking.objects.create(email=email, event_uri=event_uri, event_id=event_id)
            return Response(BookingSerializer(booking).data, status=201)

        return Response({"error": "Booking failed"}, status=400)

class CancelAppointmentView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, event_id):
        success = cancel_appointment(event_id)
        if success:
            Booking.objects.filter(event_id=event_id).delete()
            return Response({"message": "Appointment canceled successfully."})
        return Response({"error": "Could not cancel appointment."}, status=400)

class UserBookingsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        bookings = Booking.objects.filter(user=request.user)
        return Response(BookingSerializer(bookings, many=True).data)
