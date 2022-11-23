import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import profilePicture from "../../SetterApp-Assets/profilePicture.png";

export const DBheader = ({
  headline,
  headlineDetails,
  hideButton,
  hidePickSocials,
  smallName,
  occupation,
  modal,
  setModal,
}) => {
  return (
    <div className="headerDashContainer">
      <div className="DBleftHeader">
        <div className="DBUsername">
          <h2>{headline}</h2>
        </div>
        <div className="DBsmallWelcome">
          <p>{headlineDetails}</p>
        </div>
      </div>
      <div className="DBrightHeader">
        {hideButton ? null : (
          <button className="createPostBtn" onClick={() => setModal(true)}>
            Create Post +
          </button>
        )}
        {hidePickSocials ? null : (
          <div className="pickSocials">
            <select name="socialAccounts" id="socialAccounts">
              <option value="instagram">Instagram</option>
              <option value="Facebook">Facebook</option>
              <option value="Twitter">Twitter</option>
              <option value="LinkedIn">LinkedIn</option>
            </select>
          </div>
        )}
        <div className="smallProfile">
          <img src={profilePicture} alt="profilePicture" />
          <div className="smallName">
            <h3>
              {smallName} <FaCheckCircle />
            </h3>
            <p>{occupation}</p>
            <div className="view-profile">
              <h3 className="profile-boy">
                <Link to="/ProfilePage">
                  <span className="profile-color">View Profile</span>
                </Link>
              </h3>
              <hr className="demacation" />
              <h3 className="profile-boy">
                <Link to="/">
                  <span className="profile-color">Logout</span>
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
