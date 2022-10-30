import "../../Stylesheets/profile.css"



export const ProfileContent = () => {
    return(
        <section id="dashboard-profile-con">
  <div className="dashboard-prof-details">
    <div className="dashboard-profile-img">
      <img src="./images/image 7.png" alt="profile-pic" className="prof-img" />
    </div>
    <div className="profile-data">
      <h1>Maymounah Mogaji</h1>
      <p>maymounahmogaji@gmail.com</p>
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
        <i className="fa-brands fa-square-facebook profile-social-icon profile-facebook " /><span className="profile-social-icon-text">Facebook</span>
        <i className="fa-sharp fa-solid fa-trash profile-social-icon profile-delete-icon" />
      </div>
      <span className="profile-line" />
      <div className="profile-box">
        <i className="fa-brands fa-square-instagram profile-social-icon profile-instagram" /><span className="profile-social-icon-text">Instagram</span>
        <i className="fa-sharp fa-solid fa-trash profile-social-icon profile-delete profile-delete-icon" />
      </div>
      <span className="profile-line" />
      <div className="profile-box">
        <i className="fa-brands fa-twitter profile-social-icon profile-twitter" /><span className="profile-social-icon-text">Twitter</span>
        <i className="fa-sharp fa-solid fa-trash profile-social-icon profile-delete-icon" />
      </div>
      <span className="profile-line" />
      <div className="profile-box">
        <i className="fa-brands fa-linkedin profile-social-icon profile-linkedin" /><span className="profile-social-icon-text">Linkedin</span>
        <i className="fa-sharp fa-solid fa-trash profile-social-icon profile-delete-icon" />
      </div>
    </div>
  </div>
</section>
    )
}

