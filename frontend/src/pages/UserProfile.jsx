import Profile  from "../components/Profile"

function UserProfile() {
  return (
    <section>
      <div className="profile">
        <Profile/>
      </div>
      <div className="appointments">
        <h2>Upcoming Bookings</h2>
        <p>No upcoming appointments.</p>
      </div>
      <div className="payments">
        <h2>Upcoming Payments</h2>
        <p>No upcoming payments.</p>
      </div>
      <div className="messages">
        <h2>Messages</h2>
        <p>No messages from Admin</p>
      </div>
    </section>
)
}

export default UserProfile