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
  );
};

export default Footer;

// import React from 'react';
// import { FaCrown } from 'react-icons/fa';
// import './Footer.css';

// const Footer = () => {
//   return (
//     <div className="footer">
//       <div className="row">
//         <div className="col-6 col-md-4">
//           <div>
//             <span>
//               <i>
//                 <FaCrown />
//               </i>
//               MacaNacki
//             </span>
//           </div>

//           <div class="vertical"></div>

//           <div className="social-icons">
//             <i className="fab fa-facebook"></i>
//             <i className="fab fa-twitter"></i>
//             <i className="fab fa-instagram"></i>
//             <i className="fab fa-linkedin"></i>
//             <i className="fab fa-telegram"></i>
//           </div>
//         </div>
//         <div className="col-12 col-md-8 footer-col2">
//           Copyright &copy; Your Website 2022
//           <h5>Privacy Policy</h5>
//           <p>Terms and Condition</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
