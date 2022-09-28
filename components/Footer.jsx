import React from "react";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
function Footer() {
  return (
    <footer class="footer">
      <div class=" grid--footer">
        <div class="logo-col">
          <a href="#" class="footer-logo">
            <p className="footer-brandName">Rani Belle</p>
          </a>

          <ul class="social-links">
            <li>
              <a class="footer-link" href="#">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                <FaTiktok />
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                <BsYoutube />
              </a>
            </li>
          </ul>

          <p class="copyright">
            Copyright &copy; 2016 - 2022 by Rani Belle, Inc. All rights
            reserved.
          </p>
        </div>
        <div class="address-col">
          <p class="footer-heading">Contact us</p>
          <address class="contacts">
            <p class="address">623 Morning Star, 2nd Floor, Addis Abeba</p>
            <p>
              <a class="footer-link" href="tel:+251911145079">
                +251911145079
              </a>
              <br />
              <a class="footer-link" href="mailto:ranibelle@gmail.com">
                ranibelle@gmail.com
              </a>
            </p>
          </address>
        </div>
        <nav>
          <p class="footer-heading">Account</p>
          <ul class="footer-nav">
            <li>
              <a class="footer-link" href="#">
                Create account
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                Sign in
              </a>
            </li>
          </ul>
        </nav>

        <nav>
          <p class="footer-heading">Company</p>
          <ul class="footer-nav">
            <li>
              <a class="footer-link" href="#">
                About Rani Belle Clothing
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                For Business
              </a>
            </li>
          </ul>
        </nav>

        <nav>
          <p class="footer-heading">Resources</p>
          <ul class="footer-nav">
            <li>
              <a class="footer-link" href="#">
                Help center
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                Privacy & terms
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="companyLogo">
        <span>Developed and Maintained by </span>
        <img src="/album/cmplogo.png" alt="" className="cmpLogo" />
      </div>
    </footer>
  );
}

export default Footer;
