import axios from "axios";
import { useState } from "react";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    message: "",
    image: null, // For file uploads
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const API_BASE_URL = import.meta.env.VITE_API_URL; // Get URL from env file

  const submitContactForm = async (e) => {
    e.preventDefault(); // Prevent default form submission
    const formDataToSend = new FormData();
    
    // Append all form fields
    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.post(`${API_BASE_URL}contact/create/`, formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Message sent successfully!");

      // Reset the form after successful submission
      setFormData({
        name: "",
        email: "",
        address: "",
        phone: "",
        message: "",
        image: null, 
      });

      // Clear file input manually (React doesn’t reset file inputs)
      document.getElementById("imageUpload").value = "";

    } catch (error) {
      console.error("Error submitting contact form", error);
    }
  };

  return (
    <form onSubmit={submitContactForm}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="text" name="address" placeholder="Address (Optional)" onChange={handleChange} />
      <input type="text" name="phone" placeholder="Phone (Optional)" onChange={handleChange} />
      <textarea name="message" placeholder="Your Message" onChange={handleChange} required />
      <input type="file" name="image" onChange={handleChange} />
      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm
