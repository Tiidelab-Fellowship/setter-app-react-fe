import React from "react";
import logo from "../../SetterApp-Assets/SetterApp-Logo.png";
import { FaFacebook, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import "../../Stylesheets/Footer.css"

export const Footer = () => {
  return (
    <footer>
  <section className="topFooter">
    <section className="topLeftFooter">
      <h2> <img src={logo} alt="SetterApp-Logo"/><span> SetterApp </span></h2>
      <p>
        SetterApp is an Adtech solution web app that provides small and medium scale enterprise a seamless management of their social media handles on one platform.
      </p>
      <div className="fontAwesome">
        {/* <img src= {facebook} alt="Facebook-Logo"/>
        <img src= {LinkedIn}  alt="Linkedin-Logo"/>
        <img src= {Twitter} alt="twitter-Logo"/>
        <img src= {Youtube} alt="Youtube-Logo"/> */}
        <FaFacebook size="40px" />
        <FaLinkedinIn size="40px" />
        <FaTwitter size="40px" />
        <FaYoutube size="40px" />
      </div>
    </section>
    <section className="topRightFooter">
      <div className="footerLinks">
        <h4>Product</h4>
        <a href="www.google.com">How it works</a>
        <a href="www.google.com">Services</a>
        <a href="www.google.com">Pricing</a>
        <a href="www.google.com">Blog</a>
      </div>
      <div className="footerLinks">
        <h4>Company</h4>
        <a href="www.google.com">About</a>
        <a href="www.google.com">FAQs</a>
        <a href="www.google.com">Contact</a>
        <a href="www.google.com">Our Team</a>
      </div>
      <div className="footerLinks">
        <h4>Utilities</h4>
        <a href="www.google.com">Privacy Policy</a>
        <a href="www.google.com">Terms of use</a>
        <a href="www.google.com">404 Pages</a>
        <a href="www.google.com">Protected Pages</a>
      </div>
    </section>
  </section>
  <hr />
  <section className="bottomFooter">
    <h2>© 2022 SetterApp by Pacesetter. Powered by TIIDELab </h2>
  </section>
</footer>

  );
}