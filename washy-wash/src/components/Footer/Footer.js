import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer class="footer-distributed">
        <div class="footer-left">
          <img src="http://localhost:3000/1.png" width="80% " height="60px" />

          <p class="footer-links">
            <a href="#">Home</a>·<a href="#">Blog</a>·<a href="#">Pricing</a>·
            <a href="#">About</a>·<a href="#">Faq</a>·<a href="#">Contact</a>
          </p>

          <p class="footer-company-name">Washy Wash &copy; 2015</p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker" />
            <p>
              <span>Antelias</span> Lebanon, Metn
            </p>
          </div>

          <div>
            <i class="fa fa-phone" />
            <p>+ 961 76 754 650</p>
          </div>

          <div>
            <i class="fa fa-envelope" />
            <p>
              <a href="mailto:support@company.com">support@company.com</a>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>

          <div class="footer-icons">
            <a href="#">
              <i class="fa fa-facebook" />
            </a>
            <a href="#">
              <i class="fa fa-twitter" />
            </a>
            <a href="#">
              <i class="fa fa-linkedin" />
            </a>
            <a href="#">
              <i class="fa fa-github" />
            </a>
          </div>
        </div>
      </footer>

      {/* </StickyFooter> */}
    </div>
  );
};

export default Footer;
