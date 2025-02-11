import ContactForm from "../components/Contact-Form";
import "../styles/Contact.css"

function ContactUs () {
  return (
    <div className="contact-page">
        <section className="contact-details">
        <h1>Contact Us</h1>
        <p>Located at Queens, NY</p>
        <p>Phone number: (347)-324-2813</p>
        <p>Email: generalwoodfloors@gmail.com</p>
      </section>

      <section className="Contact">
        <ContactForm/>
      </section>
    </div>
  );
}

export default ContactUs