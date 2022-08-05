import "./contact.css";

import { AiOutlineWhatsApp } from "react-icons/ai";


function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
      
        <a
          href="https://wa.link/a9e162"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            Whatsapp
          </h2>
        </a>

        <a href="mailto:carotobarj@gmail.com" className="contact gmail"  target={"blank"}>
        <img src="https://img.icons8.com/color/48/000000/gmail-new.png"/>
          <h2>
            Gmail 
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
