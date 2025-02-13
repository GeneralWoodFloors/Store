import ContactForm from "../components/Contact-Form";
import "../styles/Contact.css";
import popeyeIcon from "../assets/popeye.png";

function ContactUs() {
  return (
    <div className="contact-page">
      <div className="contact-content">
        {/* Contact Details and Slogan Wrapper */}
        <div className="contact-left">
          <section className="contact-details">
            <h1>Contact Us</h1>
            <p>Located at Queens, NY</p>
            <p>Phone number: (347)-324-2813</p>
            <p>Email: generalwoodfloors@gmail.com</p>
          </section>

          {/* Slogan Section */}
          <section className="slogan">
            <img src={popeyeIcon} alt="Popeye-sailer-man" />
            <p>Quality You Can Count On!</p>
          </section>
        </div>

        {/* Contact Form */}
        <section className="Contact">
          <ContactForm />
        </section>
      </div>
    </div>
  );
}

export default ContactUs;
