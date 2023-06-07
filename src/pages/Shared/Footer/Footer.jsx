import { Link } from "react-router-dom";
import Container from "../../../components/Container";
import footerLogo from "../../../assets/footer-logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-700">
      <Container>
        <div className="footer py-10 text-gray-300">
          <div>
            <Link>
              <img src={footerLogo} alt="logo" />
            </Link>
            <p>
              Fashion Design Learning.
              <br />
              Providing reliable teach since 2006
            </p>
          </div>
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
