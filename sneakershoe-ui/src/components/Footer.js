import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { BsMessenger } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer-dark">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-md-3 item">
            <h3>Services</h3>
            <ul>
              <li>
                <a href="#">Thiết Kế Website</a>
              </li>
              <li>
                <a href="#">Phát Triển</a>
              </li>
              <li>
                <a href="#">Hosting</a>
              </li>
            </ul>
          </div>
          <div class="col-sm-6 col-md-3 item">
            <h3>About</h3>
            <ul>
              <li>
                <a href="#">Công Ty Của Chúng Tôi</a>
              </li>
              <li>
                <a href="#">Nhóm Của Chúng Tôi</a>
              </li>
              <li>
                <a href="#">Về Nghề Nghiệp</a>
              </li>
            </ul>
          </div>
          <div class="col-md-6 item text">
            <h3>Panda Sneaker Shop</h3>
            <p>
              Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus
              ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique
              lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.
            </p>
          </div>
          <div class="col item social">
            <i class="icon ion-social-facebook">
              {" "}
              <FaFacebook />
            </i>

            <i class="icon ion-social-twitter">
              {" "}
              <FaInstagram />
            </i>

            <i class="icon ion-social-snapchat">
              {" "}
              <FaTiktok />
            </i>

            <i class="icon ion-social-instagram">
              {" "}
              <BsMessenger />
            </i>
          </div>
        </div>
        <p class="copyright">Panda Sneaker Shop © 2022</p>
      </div>
    </div>
  );
};

export default Footer;
