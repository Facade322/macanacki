import React from 'react';
import {
  FaCrown,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div class="main-content">
        <div class="social-container">
          <h2>MacaNacki</h2>
          <div class="social-bar">
            <a href="#">
              <i class="ri-facebook-fill"></i>
            </a>
            <a href="#">
              <i class="ri-instagram-fill"></i>
            </a>
            <a href="#">
              <i class="ri-twitter-fill"></i>
            </a>
          </div>
        </div>
        <nav class="footer-links">
          <ul class="footer-link-list">
            <li class="footer-link">
              <a href="#">&copy;2023 MacaNacki</a>
            </li>
            <li class="footer-link">
              <a href="#">Privacy Policy</a>
            </li>
            <li class="footer-link">
              <a href="#">Terms and Condition</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>

    // <footer class="footer py-4 style={{color: 'white'}}">
    //   <div class="container">
    //     <div class="row align-items-center footer_row">
    //       <div class="col-lg-4 my-3 my-lg-0 ">
    //         <div>
    //           <span>
    //             <i>
    //               <FaCrown />
    //             </i>
    //             MacaNacki
    //           </span>
    //         </div>
    //         <a
    //           class="btn btn-dark btn-social mx-2"
    //           href="#!"
    //           aria-label="Twitter"
    //         >
    //           <FaTwitter />
    //         </a>
    //         <a
    //           class="btn btn-dark btn-social mx-2"
    //           href="#!"
    //           aria-label="Facebook"
    //         >
    //           <FaFacebook />
    //         </a>
    //         <a
    //           class="btn btn-dark btn-social mx-2"
    //           href="#!"
    //           aria-label="Instagram"
    //         >
    //           <FaInstagram />
    //         </a>
    //         <a
    //           class="btn btn-dark btn-social mx-2"
    //           href="#!"
    //           aria-label="LinkedIn"
    //         >
    //           <FaLinkedin />
    //         </a>
    //         <a
    //           class="btn btn-dark btn-social mx-2"
    //           href="#!"
    //           aria-label="Telegram"
    //         >
    //           <FaTelegram />
    //         </a>
    //       </div>
    //       <div />
    //       <div class="col-lg-4 text-lg-center">&copy;2023 MacaNacki</div>

    //       <div class="col-lg-4 text-lg-end" style={{ color: '#fff' }}>
    //         <a class="link-dark text-decoration-none me-3" href="#!">
    //           Privacy Policy
    //         </a>
    //         <a class="link-dark text-decoration-none" href="#!">
    //           Terms and Conditions
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </footer>

    // <div className="footer">
    //   <div class="container">
    //     <div class="row">
    //       <div class="info" data-aos="fade-up">
    //         <h2>
    //           <FaCrown />
    //           MacaNacki
    //         </h2>
    //         <div class="sociallogos">
    //           <div class="logobox">
    //             <div className="footer-social-icons">
    //               <a className="social" href="/#">
    //                 <i>
    //                   <FaTwitter />
    //                 </i>
    //               </a>

    //               <a className="social" href="/#">
    //                 <i>
    //                   <FaFacebook />
    //                 </i>
    //               </a>
    //               <a className="social" href="/#">
    //                 <i>
    //                   <FaInstagram />
    //                 </i>
    //               </a>
    //               <a className="social" href="/#">
    //                 <i>
    //                   <FaLinkedin />
    //                 </i>
    //               </a>

    //               <a className="social" href="/#">
    //                 <i>
    //                   <FaTelegram />
    //                 </i>
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="col-md-4 col-sm-6 col-xs-12">
    //         <ul class="social-icons">
    //           <li>
    //             <a class="facebook" href="#">
    //               <i class="fa fa-facebook"></i>
    //             </a>
    //           </li>
    //           <li>
    //             <a class="twitter" href="#">
    //               <i class="fa fa-twitter"></i>
    //             </a>
    //           </li>
    //           <li>
    //             <a class="dribbble" href="#">
    //               <i class="fa fa-dribbble"></i>
    //             </a>
    //           </li>
    //           <li>
    //             <a class="linkedin" href="#">
    //               <i class="fa fa-linkedin"></i>
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //       <div class="col-md-8 col-sm-6 col-xs-12">
    //         <p class="copyright-text">&copy;2023 MacaNacki Privacy Policy</p>
    //       </div>
    //       <div class="col-md-8 col-sm-6 col-xs-12">
    //         <p>Terms and Condition</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Footer;
