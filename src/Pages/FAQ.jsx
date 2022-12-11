import React from "react";
import { FaBan, FaCreditCard, FaDollarSign, FaEnvelope, FaTag, FaTruck } from "react-icons/fa";
import "../Stylesheets/FAQ.css"
import { Header } from "./landing-page";
import { Link } from "react-router-dom";
import { Footer } from "../Components/Footer/Footer";

export const FAQ =()=>{
  return(
    <section class="FAQpage">
    <div class="FAQHeader">
      <h3 class="TFAQP1">FAQs</h3>
      <h6 class="TFAQP2">Ask us anything</h6>
      <p class="TFAQP3">Have any questions? We're here to assist you.</p>
      <input type="text" placeholder="Search here" class="FAQSearch"/>
    </div>
    <div class="FAQBody">
      <div class="FAQBodyQuestions">
        <div class="EachFAQ">
          <div class="EachFAQIcon">
            <FaEnvelope />
          </div>
          <h2 class="FAQbodyQuestionHeader">How do I change my account email?</h2>
          <p class="EachFAQBody">
            You can log in to your account and change it from your Profile, Edit Profile. Then go to the general tab to change your email.
          </p>
        </div>
        <div class="EachFAQ">
          <div class="EachFAQIcon">
            <FaCreditCard />
          </div>
          <h2 class="FAQbodyQuestionHeader">What should I do if my payment fails?</h2>
          <p class="EachFAQBody">
            If your payment fails, you can use the (COD) payment option, if available on that order. If your payment is debited from your account after a payment failure, it will be credited back within 7-10 days.
          </p>
        </div>
        <div class="EachFAQ">
          <div class="EachFAQIcon">
          <FaBan />
          </div>
          <h2 class="FAQbodyQuestionHeader">What is your cancellation policy?</h2>
          <p class="EachFAQBody">
            You can now cancel an order when it is in packed/shipped status. Any amount paid will be credited into the same payment mode using which the payment was made
          </p>
        </div>
      </div>
      <div class="FAQBodyQuestions">
        <div class="EachFAQ">
          <div class="EachFAQIcon">
          <FaTruck />
          </div>
          <h2 class="FAQbodyQuestionHeader">How do I check order delivery status ?</h2>
          <p class="EachFAQBody">
           Please tap on “My Orders” section under main menu of App/Website/M-site to check your order status.
          </p>
        </div>
        <div class="EachFAQ">
          <div class="EachFAQIcon">
            <FaDollarSign />
          </div>
          <h2 class="FAQbodyQuestionHeader">What is Instant Refunds?</h2>
          <p class="EachFAQBody">
            Upon successful pickup of the return product at your doorstep, Myntra will instantly initiate the refund to your source account or chosen method of refund. Instant Refunds is not available in a few select pin codes and for all self ship returns.
          </p>
        </div>
        <div class="EachFAQ">
          <div class="EachFAQIcon">
            <FaTag />
          </div>
          <h2 class="FAQbodyQuestionHeader">How do I apply a coupon on my order?</h2>
          <p class="EachFAQBody">
            You can apply a coupon on cart page before order placement. The complete list of your unused and valid coupons will be available under “My Coupons” tab of App/Website/M-site.
          </p>
        </div>
      </div>
      <div class="FAQbottom">
        <div class="FAQBL">
          <h3 class="FAQbottomHeader">Still have questions?</h3>
          <p class="FAQbottomBody">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
        </div>
        <div class="FAQBR"><Link to="/ContactUs"><button 
        class="SendUsMessage">Get in touch</button></Link></div>
      </div>
    </div>
  </section>
  )
}

const FAQpage = () =>{
  return(
    <>
      <Header />
      <FAQ />
      <Footer />
    </>
  );
}
export default FAQpage