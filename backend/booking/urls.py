from django.urls import path
from .views import AvailableSlotsView, BookAppointmentView, CancelAppointmentView, UserBookingsView

urlpatterns = [
    path("available/", AvailableSlotsView.as_view(), name="available-slots"),
    path("book/", BookAppointmentView.as_view(), name="book-appointment"),
    path("cancel/<str:event_id>/", CancelAppointmentView.as_view(), name="cancel-appointment"),
    path("user/", UserBookingsView.as_view(), name="user-bookings"),
]
