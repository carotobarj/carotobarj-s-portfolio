import "./footer.css";
import { BsMouse } from "react-icons/bs";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";



function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        That's all{" "}
        <a href="#home">
          <h2>
            <BsMouse /> - scroll up -
          </h2>
        </a>
      </h1>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/carolina-tobar-jaramillo/" target="_blank">
          <TiSocialLinkedin className="social" />
        </a>
        <a href="https://github.com/carotobarj" target="_blank">
          <TiSocialGithub className="social" />
        </a>
      </div>
    </div>
  );
}
export default Footer;
