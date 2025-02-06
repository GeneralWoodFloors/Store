import Profile  from "../components/Profile"
import UserMessages from "../components/UserMessages"

function UserProfile() {
  return (
    <section>
      <div className="profile">
        <Profile/>
      </div>
      <div className="messages">
        <UserMessages/>
      </div>
    </section>
)
}

export default UserProfile