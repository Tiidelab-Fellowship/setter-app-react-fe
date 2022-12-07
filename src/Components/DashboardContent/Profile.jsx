import "../../Stylesheets/profile.css";
import avatar from "../../SetterApp-Assets/avatar.png";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export const ProfileContent = ({
  modal,
  setModal,
  modal2,
  setModal2,
  user,
  businessInfo,
}) => {
  console.log(user);
  const { firstName, lastName, phoneNumber, email, userName } = user;
  const { name, size, businessCategoryName } = businessInfo;
  console.log(businessInfo);
  const handleEditModal = () => {
    setModal(!modal);
  };

  const handleEditModal2 = () => {
    setModal2(!modal2);
  };

  return (
    <section id="dashboard-profile-con">
      <div className="dashboard-prof-details">
        <div className="dashboard-profile-img">
          <img src={avatar} alt="profile-pic" className="prof-img" />
        </div>
        <div className="profile-data">
          <h1>{firstName + " " + lastName}</h1>
          <p>Username: {userName}</p>
          <p>Email: {email}</p>
          <p> Phone Number: {phoneNumber}</p>
          <div className="profile-button">
            <button className="profile-edit-btn" onClick={handleEditModal2}>
              Update Profile
            </button>
            <button className="profile-password-btn" onClick={handleEditModal}>
              Register Business
            </button>
          </div>
        </div>
      </div>
      {businessInfo === {name:"", size:"", businessCategoryName: ""} ? (
        <h1>Register Your Business</h1>
      ) : ( 
        <div className="dashboard-bus-details">
          <h2>Business Information</h2>
          <div className="bus-details">
            <p>Business Name: {name}</p>
            <p>Business Size: {size}</p>
            <p>Business Type: {businessCategoryName}</p>
          </div>
        </div>
      )}

      <div className="dashboard-socials">
        <p>Social Accounts</p>
        <div className="profile-socials">
          <div className="profile-box">
            <div className="profile-social-icon profile-facebook">
              <FaFacebookSquare />
            </div>
            <span className="profile-social-icon-text">Facebook</span>
            <button className="profile-connect">Connect</button>
          </div>

          <span className="profile-line" />
          <div className="profile-box">
            <div className="profile-social-icon profile-instagram ">
              <FaInstagramSquare />
            </div>
            <span className="profile-social-icon-text">Instagram</span>
            <button className="profile-connect">Connect</button>
          </div>
          <span className="profile-line" />
          <div className="profile-box">
            <div className="profile-social-icon profile-twitter ">
              <FaTwitter />
            </div>
            <span className="profile-social-icon-text">Twitter</span>
            <button className="profile-connect">Connect</button>
          </div>
          <span className="profile-line" />
          <div className="profile-box">
            <div className="profile-social-icon profile-linkedin ">
              <FaLinkedin />
            </div>
            <span className="profile-social-icon-text">Linkedin</span>
            <button className="profile-connect">Connect</button>
          </div>
        </div>
      </div>
    </section>
  );
};
