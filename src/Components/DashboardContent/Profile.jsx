import "../../Stylesheets/profile.css"
import profile from "../../SetterApp-Assets/profilePagePicture.jpg"
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTrash, FaTwitter } from "react-icons/fa"



export const ProfileContent = () => {
    return(
        <section id="dashboard-profile-con">
  <div className="dashboard-prof-details">
    <div className="dashboard-profile-img">
      <img src={profile} alt="profile-pic" className="prof-img" />
    </div>
    <div className="profile-data">
      <h1>Banwo Olorunsogo Olubowale</h1>
      <p>sogobanwo@gmail.com</p>
      <p>09095351248</p>
      <p>1-Oct-1978</p>
      <div className="profile-button">
        <button className="profile-edit-btn">Edit</button>
        <button className="profile-password-btn">Change password</button>
      </div>
    </div>
  </div>
  <div className="dashboard-socials">
    <p>Social Accounts</p>
    <div className="profile-socials">
      <div className="profile-box">
        <div className="profile-social-icon profile-facebook "><FaFacebookSquare /></div><span className="profile-social-icon-text">Facebook</span>
        <div className="profile-delete profile-delete-icon"><FaTrash /></div>
      </div>
      <span className="profile-line" />
      <div className="profile-box">
      <div className="profile-social-icon profile-instagram "><FaInstagramSquare /></div><span className="profile-social-icon-text">Instagram</span>
        <div className="profile-delete profile-delete-icon"><FaTrash /></div>
      </div>
      <span className="profile-line" />
      <div className="profile-box">
      <div className="profile-social-icon profile-twitter "><FaTwitter /></div><span className="profile-social-icon-text">Twitter</span>
        <div className="profile-delete profile-delete-icon"><FaTrash /></div>
      </div>
      <span className="profile-line" />
      <div className="profile-box">
      <div className="profile-social-icon profile-linkedin "><FaLinkedin /></div><span className="profile-social-icon-text">Linkedin</span>
        <div className="profile-delete profile-delete-icon"><FaTrash /></div>
      </div>
    </div>
  </div>
</section>
    )
}

