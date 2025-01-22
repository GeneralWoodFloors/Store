import { useEffect, useState } from "react";
import api from "../api"; // Assuming you have a configured Axios instance
import { ACCESS_TOKEN } from "../constants";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem(ACCESS_TOKEN);
        const response = await api.get("/user/", {
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
      <h1>User Profile</h1>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email || "N/A"}</p>
      <p><strong>Borough:</strong> {user.borough || "N/A"}</p>
      <p><strong>Phone Number:</strong> {user.phone_number || "N/A"}</p>
    </div>
  );
};

export default Profile;
