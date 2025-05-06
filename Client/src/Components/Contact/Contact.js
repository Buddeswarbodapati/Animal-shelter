import React from "react";
import developerPng from "./images/developer-png.png";

const Contact = () => {
  return (
    <div className="contactUs-main-container">
      <div className="contactUs-left-para">
        <h3>Let's get in touch</h3>
        <i class="fa fa-envelope"></i>
        <a class="mail-links" href="eswar@gmail.com">
          eswar@gmail.com
        </a>

        <i class="fa fa-linkedin"></i>
        <a class="mail-links" href="">
          User Name: ESWAR
        </a>

        <i class="fa fa-github"></i>
        <a class="mail-links" href="">
          ESWAR
        </a>

        <i class="fa fa-instagram"></i>
        <a class="mail-links" href="">
          @eswar_x
        </a>

        <i class="fa fa-phone"></i>
        <a class="mail-links" href="tel:+9876543210">
          +9876543210
        </a>
      </div>
      <div className="contactUs-pic">
        <img src={developerPng} alt="Profile"/>
      </div>
    </div>
  );
};

export default Contact; 
