import React from "react";
import "../Stylesheets/landing-page.css";
import logo from "../SetterApp-Assets/logo.png";
import heroImage from "../SetterApp-Assets/hero-image.png";
import analytics from "../SetterApp-Assets/analytics.png";
import engage from "../SetterApp-Assets/engage.png";
import grow from "../SetterApp-Assets/grow.png";
import Image from "../SetterApp-Assets/Image.png";
// import innovative from "../SetterApp-Assets/innovative.png"
import payment from "../SetterApp-Assets/payment.png";
import plan from "../SetterApp-Assets/plan.png";
import pricing from "../SetterApp-Assets/pricing.png";
import Review from "../SetterApp-Assets/Review.png";
import secured from "../SetterApp-Assets/secured.png";
import support from "../SetterApp-Assets/support.png";
import webApp from "../SetterApp-Assets/web app.png";
import woman from "../SetterApp-Assets/woman.png";

import { Footer } from "../Components/Footer/Footer";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="SetterAppLogo" />
        <h1>
          <a href="./index.html">SetterApp</a>
        </h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="./index.html">Home</a>
          </li>
          <li>
            <a href>About</a>
          </li>
          <li>
            <a href>Dashboard</a>
          </li>
          <li>
            <a href>Pricing</a>
          </li>
          <li>
            <a href>FAQs</a>
          </li>
        </ul>
      </nav>
      <div id="auth">
        <a href id="login">
          Login
        </a>
        <button>
          <Link to="/SignUp" id="signup">
            Get Started
          </Link>
        </button>
      </div>
    </header>
  );
};

export const Hero = () => {
  return (
    <section id="hero-section">
      <div className="container">
        <button className="small-titled-box">Adtech app</button>
        <h2>
          The most efficient &amp; optimized <br /> social experience ever
        </h2>
        <div id="section-details">
          <p>
            Automate and manage your socials with SetterApp. Our platform is
            optimized <br /> to run multiple social media accounts for your
            business.
          </p>
        </div>
        <div className="cta-container">
          <button className="black-button">
            <a href style={{ color: "#fff" }}>
              Get started
            </a>
          </button>
          <button className="white-button">
            <a href style={{ color: "#090909" }}>
              Learn more
            </a>
          </button>
        </div>
        <img src={heroImage} alt="heroImage" />
        <div id="trusted">
          <h3>Trusted By</h3>
          <div id="users">
            <p>Small Business Owners</p>
            <p>Social Media Managers</p>
            <p>Business Strategists</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Features = () => {
  return (
    <section id="features-section">
      <div className="container">
        <button className="small-titled-box">Features</button>
        <h2>
          The features that make <br />
          our platfrom unique
        </h2>
        <div id="section-details">
          <p>
            SetterApp offers a complete social media management solution packed
            with <br /> features that are designed with your whole business in
            mind
          </p>
        </div>
        <div id="features-container">
          <div className="features-row">
            <div className="feature-box">
              <img src={webApp} alt="webApp" />
              <h4>Web app</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                exercitationem natus quas t enetur distinctio a impedit maxime
                non, minus rem?
              </p>
            </div>
            <div className="feature-box">
              <img src={pricing} alt="Pricing" />
              <h4>Affordable pricing</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                exercitationem natus quas t enetur distinctio a impedit maxime
                non, minus rem?
              </p>
            </div>
            <div className="feature-box">
              <img src={secured} alt="Secure" />
              <h4>Secured</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                exercitationem natus quas t enetur distinctio a impedit maxime
                non, minus rem?
              </p>
            </div>
          </div>
          <div className="features-row">
            <div className="feature-box">
              <img src={support} alt="Support" />
              <h4>World-class support</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                exercitationem natus quas t enetur distinctio a impedit maxime
                non, minus rem?
              </p>
            </div>
            <div className="feature-box">
              <img src={analytics} alt="Analytics" />
              <h4>Accurate Analytics</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                exercitationem natus quas t enetur distinctio a impedit maxime
                non, minus rem?
              </p>
            </div>
            <div className="feature-box">
              <img src={payment} alt="Payments" />
              <h4>Automatic payments</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                exercitationem natus quas t enetur distinctio a impedit maxime
                non, minus rem?
              </p>
            </div>
          </div>
        </div>
        <div className="cta-container">
          <button className="black-button">
            <a href style={{ color: "#fff" }}>
              Get started
            </a>
          </button>
          <button className="white-button">
            <a href style={{ color: "#090909" }}>
              Browse all features
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export const Product = () => {
  return (
    <section id="product-section">
      <div className="container">
        <div className="left-container">
          <img src={woman} alt="MainWoman" />
          <div />
        </div>
        <div className="right-container">
          <button className="product-button">
            <a href style={{ color: "#111" }}>
              Our Product
            </a>
          </button>
          <h3>
            We are the next-gen <br /> Adtech Solution{" "}
          </h3>
          <p>
            SetterApp is all-in-one social media management platform that
            unlocks the full potential of socials to transform not just your
            marketing strategy—but every area of your small business.
            <br />
            <br />
            SetterApp is awesome for planning out social media posts and it’s
            great if you run multiple social media accounts for your business.
            It helps you become much more efficient—your online business is
            taken care of.
            <br />
            <br />
            We help you to illuminate business-critical insights by tapping into
            the world’s largest and most transparent focus group: social media.
            This will allow you spend less time on manual tasks and more time
            connecting with your audience through authentic and personalized
            experiences.
          </p>
          <button className="white-button">
            <a href style={{ color: "#090909" }}>
              Get started
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export const Pricing = () => {
  return (
    <section id="pricing-section">
      <div className="container">
        <button className="small-titled-box">Pricing</button>
        <h2>
          It have never been easier to <br /> manage more, for less
        </h2>
        <div id="details">
          Our prices are affordable and easily suits your business needs
        </div>
        <div id="price-choice">
          <p>Billed Yearly</p>
          <button />
          <p>Billed Monthly</p>
        </div>
        <div id="prices-container">
          <div className="price-box">
            <div className="price-type">Startup</div>
            <div className="price-tag">N2500</div>
            <div className="price-category">per user, per month</div>
            <button className="trial-button">Start my 15 day Trial</button>
            <hr />
            <div className="price-features">
              <p>5 Social Profiles</p>
              <p>5 Scheduled Posts Per Profile</p>
              <p>20+ Templates</p>
              <p>Calendar View</p>
              <p>24/7 Support</p>
            </div>
            <button id="get-package-button">Get started</button>
          </div>
          <div className="price-box current-price">
            <div className="price-type">Business</div>
            <div className="price-tag">N5000</div>
            <div className="price-category">per user, per month</div>
            <button className="trial-button">Start my 15 day Trial</button>
            <hr />
            <div className="price-features current-price">
              <p>10 Social Profiles</p>
              <p>25 Scheduled Posts Per Profile</p>
              <p>50+ Templates</p>
              <p>Calendar View</p>
              <p>24/7 VIP Support</p>
            </div>
            <button id="get-package-button">Get started</button>
          </div>
          <div className="price-box">
            <div className="price-type">Agency</div>
            <div className="price-tag">N7500</div>
            <div className="price-category">per user, per month</div>
            <button className="trial-button">Start my 15 day Trial</button>
            <hr />
            <div className="price-features">
              <p>100 Social Profiles</p>
              <p>100 Scheduled Posts Per Profile</p>
              <p>100+ Templates</p>
              <p>Calendar View</p>
              <p>24/7 VIP Support</p>
            </div>
            <button id="get-package-button">Get started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const GetStarted = () => {
  return (
    <section id="get-started-section">
      <div className="container">
        <h2>Get started a 15-days free trial</h2>
        <p>
          Be ominipresent present on all your social media accounts and enjoy
          the best social media management from one platform.
        </p>
        <form action>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Sign Up</button>
        </form>
        <p className="terms-conditions-paragraph">
          By clicking Sign Up you're confirming that you agree with our{" "}
          <a href className="terms">
            Terms and Conditions.
          </a>
        </p>
      </div>
    </section>
  );
};

export const Discover = () => {
  return (
    <section id="discover-section">
      <div className="container">
        <button className="small-titled-box">Discover more</button>
        <h2>Discover</h2>
        <p>
          Discover our process of enjoying the true meaning of social <br />{" "}
          media management in a technology driven era
        </p>
        <div id="process-box">
          <div className="process">
            <img src={plan} alt="Plans" />
            <p>Plan and schedule your contents, postings and engagements </p>
          </div>
          <div className="process">
            <img src={engage} alt="Engage" />
            <p>
              Engage and build influence on your social accounts with compelling
              contents
            </p>
          </div>
          <div className="process">
            <img src={grow} alt="Grow" />
            <p>
              Grow your business into a sustainable global and digital brand{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export const Customer = () => {
  return (
    <section id="customer-stories-section">
      <div className="container">
        <button className="small-titled-box">Customer Stories</button>
        <h2>What people are saying about us</h2>
        <div id="stories-box">
          <div className="customer-box">
            <img src={Review} alt="Review" />
            <p>
              SetterApp has made sharing my story and building my brand on
              social media so much easier.
            </p>
            <div className="customer">
              <img src={Image} alt="CurrentProfile" />
              <div className="customer-profile">
                <p className="customer-name">George Bassey</p>
                <p className="customer-location">Egbeda, Lagos</p>
              </div>
            </div>
          </div>
          <div className="customer-box">
            <img src={Review} alt="Review" />
            <p>
              SetterApp has made sharing my story and building my brand on
              social media so much easier.
            </p>
            <div className="customer">
              <img src={Image} alt="CurrentProfile" />
              <div className="customer-profile">
                <p className="customer-name">George Bassey</p>
                <p className="customer-location">Egbeda, Lagos</p>
              </div>
            </div>
          </div>
          <div className="customer-box">
            <img src={Review} alt="Review" />
            <p>
              SetterApp has made sharing my story and building my brand on
              social media so much easier.
            </p>
            <div className="customer">
              <img src={Image} alt="CurrentProfile" />
              <div className="customer-profile">
                <p className="customer-name">George Bassey</p>
                <p className="customer-location">Egbeda, Lagos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const GetStartedFooter = () => {
  return (
    <section id="get-started-footer-section">
      <h2>
        We are here to help <br /> you grow your business
      </h2>
      <button className="small-titled-box"><Link to="/SignUp">Get Started Now </Link></button>
    </section>
  );
};

const LandingPage = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Hero />
        <Features />
        <Product />
        <Pricing />
        <GetStarted />
        <Discover />
        <Customer />
        <GetStartedFooter />
      </main>
      <Footer />
    </React.Fragment>
  );
};
export default LandingPage;
