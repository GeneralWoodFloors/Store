import { useEffect, useState } from "react";
import api from "../api"; 

const UserMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await api.get("contact/messages/user/");
        setMessages(response.data);
      } catch (err) {
        setError("Failed to load messages.");
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) return <p>Loading messages...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="contact-messages">
      <h2 className="contact-title">Your Messages</h2>
      {/* Check if there are no messages to display a placeholder */}
      {messages.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        // Iterate over the messages array and display each message
        messages.map((message) => (
          <div key={message.id} className="user-message">
            <h3 className="message-name">{message.name}</h3>
            <p className="message-content">{message.message}</p>

            {/* Conditionally render the admin's response if it exists */}
          {message.response ? (
            <div className="admin-message">
              <strong>Admin Response:</strong>
              <p>{message.response}</p>
            </div>
          ) : (
            <p className="default-no-response">No response yet.</p>
          )}
        </div>
        ))
      )}
    </div>
  );
};

export default UserMessages;
