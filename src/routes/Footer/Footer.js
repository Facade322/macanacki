import React from 'react';
import {
  FaFacebook,
  FaCrown,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaTelegram,
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer class="footer py-4">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-4 my-3 my-lg-0">
            <h4>
              <FaCrown />
              MacaNacki
            </h4>
            <a
              class="btn btn-dark btn-social mx-2"
              href="#!"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              class="btn btn-dark btn-social mx-2"
              href="#!"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
            <a
              class="btn btn-dark btn-social mx-2"
              href="#!"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a
              class="btn btn-dark btn-social mx-2"
              href="#!"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              class="btn btn-dark btn-social mx-2"
              href="#!"
              aria-label="Telegram"
            >
              <i class="fab fa-telegram"></i>
            </a>
          </div>
          <div class="col-lg-4 text-lg-start">&copy; 2023 MacaNacki</div>

          <div class="col-lg-4 text-lg-end text-light">
            <a class="link-light text-decoration-none me-3" href="#!">
              Privacy Policy
            </a>
            <a class="link-light text-decoration-none" href="#!">
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
