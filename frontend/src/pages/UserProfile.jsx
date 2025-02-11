import Profile  from "../components/Profile"
import UserMessages from "../components/UserMessages"
import "../styles/UserProfile.css"

function UserProfile() {
  return (
    <section className="user-profile-page">
      <div className="profile-container">
        <Profile />
      </div>

      {/* <div className="contact-messages">
        <UserMessages />
      </div> */}
    </section>
  );
}

export default UserProfile