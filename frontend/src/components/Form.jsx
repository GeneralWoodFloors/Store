import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import '../styles/Form.css'


function Form ({route, method}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");  // only for register
  const [phoneNumber, setPhoneNumber] = useState(""); // only for register
  const [borough, setBorough] = useState(""); // only for register
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const name = method === "login" ? "Login" : "Register"; 
  //look at the method that is passed in the prompt

  const handleSubmit = async (e) => { 
      setLoading(true);
      e.preventDefault(); //prevent reloading the page

      try { //try to send the request
        const data = method === "login" ? { username, password } : { username, password, email, phone_number: phoneNumber, borough };
        // Includes additional fields only for registration
          const res = await api.post(route, data)
          if (method === "login") {
              localStorage.setItem(ACCESS_TOKEN, res.data.access);
              localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
              navigate("/")
          } else {
              navigate("/login") 
          }
      } catch (error) { //if error we will catch it
          alert(error)
      } finally { // if it worked or didn't work; we setLoading equal to false bc we will have a loading indicator
          setLoading(false)
      }
  };

  return (
      <form onSubmit={handleSubmit} className="form-container">
          <h1>{name}</h1>
          <input
              className="form-input" 
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
          />
          <input
              className="form-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
          />
          {method === "register" && (
            <>
            <input
                className="form-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email (optional)"
            />
            <input
                className="form-input"
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Phone Number (optional)"
            />
          <input
            className="form-input"
            type="text"
            value={borough}
            onChange={(e) => setBorough(e.target.value)}
            placeholder="Borough (optional)"
          />
        </>
      )}
          <button className="form-button" type="submit">
              {name}
          </button>
      </form>
  )
}

export default Form