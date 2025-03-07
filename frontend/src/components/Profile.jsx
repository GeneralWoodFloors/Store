import { useEffect, useState } from "react";
import api from "../api";
import { ACCESS_TOKEN } from "../constants";
import { Link } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem(ACCESS_TOKEN);
        const response = await api.get("account/user/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (err) {
        console.error("Error fetching user profile:", err);
        setError("Failed to load user profile.");
      }
    };

    fetchUserProfile();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome {user.username}</h1>
      <p><strong>Email:</strong> {user.email || "N/A"}</p>
      <p><strong>Borough:</strong> {user.borough || "N/A"}</p>
      <p><strong>Phone Number:</strong> {user.phone_number || "N/A"}</p>

      <Link to={'/logout'}>
        <button className="Logout-button">Logout</button>
      
      </Link>
    </div>
  );
};

export default Profile;
