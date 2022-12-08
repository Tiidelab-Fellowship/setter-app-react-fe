import "../../Stylesheets/socialDashboard.css"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaUser, FaThumbsUp, FaComment,FaShare } from "react-icons/fa"
import { BarChart } from "../Chart/BarChart";
import { useState } from "react";
import { LikesData } from "../Chart/Data/LikesData"
import { Chart as ChartJS } from "chart.js/auto"
import avatar from "../../SetterApp-Assets/avatar.png";


export const SocialDashboardContent = () => {
  // console.log(LikesData)
 const [userLikes, setUserLikes] = useState({
  
  labels: LikesData.map((data)=> data.month),
  datasets: [{
    label: "number of likes",
    data : LikesData.map((data)=> data.numberOfLikes),
    backgroundColor: color => {
      let colors = color.index === 5 ? '#000000' : '#eeeeee'
      return colors;
    }, 
    borderWidth: 0.5,
    borderRadius: 20,
    barPercentage: 0.3,
  }]
 })
 
  return (
    <main className="social-dashboard-wrapper">
  <div className="dashboard-insights">
    <div className="box">
      <div className="fIcons"> <FaTwitter/> </div>
      <div>

        <h3>Coming soon...</h3>

        <h6><span className="green">0%</span>This week</h6>
      </div>
    </div>
    <div className="box">
      <div className="fIcons"> <FaFacebookF /> </div>
      <div>

        <h3>Coming soon...</h3>

        <h6><span className="red">0%</span>This week</h6>
      </div>
    </div>
    <div className="box">
      <div className="fIcons"> <FaLinkedinIn /> </div>
      <div>

        <h3>Coming soon...</h3>

        <h6><span className="green">0%</span>This week</h6>
      </div>
    </div>
    <div className="box">
      <div className="fIcons"> <FaInstagram /> </div>
      <div>

        <h3>Coming soon...</h3>

        <h6><span className="red">0%</span>This week</h6>
      </div>
    </div>
  </div>
  <section className="showcase">
    <div className="dashboard-stats">
      <div className="performance">
        <div className="chartBox">
          <BarChart chartData= {userLikes} />
          {/* <canvas id="myChart" /> */}
        </div>
      </div>
      <div className="dashboard-analysis">
        <div className="dashboard-card">
          <div className="dashboard-card-item">
            <div className="dashboard-social-icon"> <FaUser/> </div>
            <h3 className="social-dashboard-text">Followers</h3>
          </div>
          <div className="dashboard-card-item">

            <h6>Coming soon...</h6><span className="green">+0%</span>

          </div>
        </div>
        <div className="dashboard-card">
          <div className="dashboard-card-item">
            <div className="dashboard-social-icon">  <FaThumbsUp/>  </div>
            <h3 className="social-dashboard-text">Likes</h3>
          </div>
          <div className="dashboard-card-item">

            <h6>Coming soon...</h6><span className="red">-0%</span>

          </div>
        </div>
        <div className="dashboard-card">
          <div className="dashboard-card-item">
            <div className="dashboard-social-icon">  <FaComment/></div>
            <h3 className="social-dashboard-text">Comment</h3>
          </div>
          <div className="dashboard-card-item">

            <h6>Coming soon...</h6><span className="green">+0%</span>

          </div>
        </div>
        <div className="dashboard-card">
          <div className="dashboard-card-item">
            <div className="dashboard-social-icon">  <FaShare/> </div>
            <h3 className="social-dashboard-text">Share</h3>
          </div>
          <div className="dashboard-card-item">

            <h6>Coming soon...</h6><span className="red">-0%</span>

          </div>
        </div>
      </div>
    </div>
    <div className="social-dashboard-prof">
      <div className="dashboard-prof-img-con">
        <div><img src={avatar} className="dashboard-prof-img" alt="profile-img"/> </div>
      </div>
      {/* <h3>Olorunsogo Banwo</h3>
      <p className="dashboard-light-text">Realtor</p> */}
      <div className="social-dashboard-info">
        <div>

          <h3>Coming soon...</h3>
          <p className="dashboard-light-text">Post</p>
        </div>
        <div>
          <h3>Coming soon...</h3>
          <p className="dashboard-light-text">Followers</p>
        </div>
        <div>
          <h3>Coming soon...</h3>

          <p className="dashboard-light-text">Following</p>
        </div>
      </div>
      <div>
        <h2 className="latest-text">Latest Post</h2>
        <div className="dashboard-post-con">
          {/* <div><img src={TIIDELab} className="social-dashboard-post-img" alt="post-img"/> </div> */}
        </div>
        <div>
          {/* <div className="dashboard-acc-details">
            <div className="dashboard-post-img-con">
              <div><img src={avatar} className="dashboard-post-img" alt="profile-pic"/> </div>
            </div>
            <p className="dashboard-light-text">@thomas.fetcher</p>
          </div>
          <div className="social-dashboard-text">
            <p>“One touch of nature makes the whole world kin.” 
              “Look deep into nature, and then you will understand everything better.”
            </p>
          </div> */}
            <p>Coming Soon...
            </p>
        </div>
      </div>
    </div>
  </section>
</main>

  )
}
