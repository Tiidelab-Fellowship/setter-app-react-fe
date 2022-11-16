import "../../Stylesheets/profile.css";
import profile from "../../SetterApp-Assets/profilePagePicture.jpg";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTrash,
  FaTwitter,
} from "react-icons/fa";

export const ProfileContent = ({ modal, setModal, modal2, setModal2 }) => {

  const handleEditModal =()=>{
    setModal(!modal)
  }

  const handleEditModal2 =()=>{
    setModal2(!modal2)
  }

  return (
    <section id="dashboard-profile-con">
      <div className="dashboard-prof-details">
        <div className="dashboard-profile-img">
          <img src={profile} alt="profile-pic" className="prof-img" />
        </div>
        <div className="profile-data">
          <h1>Banwo Olorunsogo Olubowale</h1>
          <h4>Username</h4>
          <p>sogobanwo@gmail.com</p>
          <p>09095351248</p>
          <div className="profile-button">
            <button className="profile-edit-btn" onClick={handleEditModal2}>Update Profile</button>
            <button className="profile-password-btn" onClick={handleEditModal}>Register Business</button>
          </div>
        </div>
      </div>
      <div className="dashboard-socials">
        <p>Social Accounts</p>
        <div className="profile-socials">
          <div className="profile-box">
            <div className="profile-social-icon profile-facebook ">
              <FaFacebookSquare />
            </div>
            <span className="profile-social-icon-text">Facebook</span>
            <div className="profile-delete profile-delete-icon">
              <FaTrash />
            </div>
          </div>
          <span className="profile-line" />
          <div className="profile-box">
            <div className="profile-social-icon profile-instagram ">
              <FaInstagramSquare />
            </div>
            <span className="profile-social-icon-text">Instagram</span>
            <div className="profile-delete profile-delete-icon">
              <FaTrash />
            </div>
          </div>
          <span className="profile-line" />
          <div className="profile-box">
            <div className="profile-social-icon profile-twitter ">
              <FaTwitter />
            </div>
            <span className="profile-social-icon-text">Twitter</span>
            <div className="profile-delete profile-delete-icon">
              <FaTrash />
            </div>
          </div>
          <span className="profile-line" />
          <div className="profile-box">
            <div className="profile-social-icon profile-linkedin ">
              <FaLinkedin />
            </div>
            <span className="profile-social-icon-text">Linkedin</span>
            <div className="profile-delete profile-delete-icon">
              <FaTrash />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
