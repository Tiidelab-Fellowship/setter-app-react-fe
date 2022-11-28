import React from 'react';
import '../../Stylesheets/analytics.css'
import arrowUp from '../../SetterApp-Assets/arrow-up.png';
import more from '../../SetterApp-Assets/more.png';
import cat from '../../SetterApp-Assets/cat.png';
import man from '../../SetterApp-Assets/man.png';
import abstract from '../../SetterApp-Assets/abstract.png';
import like from '../../SetterApp-Assets/like.png';
import share from '../../SetterApp-Assets/share.png';
import growth from '../../SetterApp-Assets/growth.png';
import moreBottom from '../../SetterApp-Assets/more-bottom.png';
import "../../Stylesheets/analytics.css";
import { BarChart } from '../AnalyticsChart/line';
import { useState } from "react";
import { Chart as ChartJS } from "chart.js/auto"


import { LikesData } from '../AnalyticsChart/analyticsData';
// import { BarChart } from '../Chart/BarChart';



export const AnalyticsContent = () => {
const [userLikes, setUserLikes] = useState({
  
  labels: LikesData.map((data)=> data.month),
  datasets: [{
    label: "number of Followers",
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
    <React.Fragment>

  <div className="Acontainer">
    <div className="Atop-header">
      <div className="Aaccount-data">
        <div className="Atop-top">
          <img src={growth} alt="grow" />
          <div className="Atop-title">Account Reached</div>
        </div>
        <div className="Atop-bottom">
          <div className="Atop-followers">Counting</div>
          <div>
            <div className="Abottom-data">
              <img src={arrowUp} alt="arrow up" />
              <p>0%</p>
            </div>
            <div className="Abottom-period">This week</div>
          </div>
        </div>
      </div>
      <div className="Aaccount-data">
        <div className="Atop-top">
          <img src={growth} alt="grow" />
          <div className="Atop-title">Account Reached</div>
        </div>
        <div className="Atop-bottom">
          <div className="Atop-followers">Counting</div>
          <div>
            <div className="Abottom-data">
              <img src={arrowUp} alt="arrow up" />
              <p>0%</p>
            </div>
            <div className="Abottom-period">This week</div>
          </div>
        </div>
      </div>
      <div className="Aaccount-data">
        <div className="Atop-top">
          <img src={growth} alt="grow" />
          <div className="Atop-title">Account Reached</div>
        </div>
        <div className="Atop-bottom">
          <div className="Atop-followers">Counting</div>
          <div>
            <div className="Abottom-data">
              <img src={arrowUp} alt="arrow up" />
              <p>0%</p>
            </div>
            <div className="Abottom-period">This week</div>
          </div>
        </div>
      </div>
      <div className="Aaccount-data">
        <div className="Atop-top">
          <img src={growth} alt="grow" />
          <div className="Atop-title">Account Reached</div>
        </div>
        <div className="Atop-bottom">
          <div className="Atop-followers">Coming</div>
          <div>
            <div className="Abottom-data">
              <img src={arrowUp} alt="arrow up" />
              <p>0%</p>
            </div>
            <div className="Abottom-period">This week</div>
          </div>
        </div>
      </div>
    </div>
    <div className="Ainner-body">
      <div className="Afollowers-growth">
        <div className="Auser-growth">
          <div className='barchartWrapper'><BarChart chartData= {userLikes} /> </div>
        </div>
        <div className="Auser-country" />
      </div>
      <div className="Ascheduled-posts">
        <div className="Aschedule-header">
          <div className="Aschedule-title">Schedule Post</div>
          <div className="Aadd-post"><a href="./" >Add Post</a></div>
        </div>

        <div className="Apost-container">
          <img src={cat} alt="" />
          <div className="Apost-info">
            <div className="Apost-heading">For Fox Sake</div>
            <div className="Apost-details">

              <p>
                <span>Posted on</span><br />
                Instagram
              </p>
              <p>
                <span>Posting Date</span><br />
                13 March, 2020
              </p>
            </div>
          </div>
          <img src={more} alt="" />
        </div>

        <div className="Apost-container">
          <img src={cat} alt="" />
          <div className="Apost-info">
            <div className="Apost-heading">For Fox Sake</div>
            <div className="Apost-details">
              <p>
                <span>Posted on</span><br />
                Instagram
              </p>
              <p>
                <span>Posting Date</span><br />
                13 March, 2020
              </p>
            </div>
          </div>
          <img src={more} alt=""/>
        </div>
      <div className="action">Commented on your photo</div>
        <div className="Aactivities">
          <div className="Aactivity-title">Activities</div>
          <div className="Aactivity-box">
            <div className="Aactivity-person">
              <img src={man} alt="" />
              <div className="Aperson-action">
                <div className="Aname">Banwo Olorun</div>
                <div className="Aaction">Commented on your photo</div>
              </div>
            </div>
            <div className="Aactivity-content">
              <div className="Acontent">
                Great work deserves appreciations. This is so amazing! 😍🎉
              </div>
              <img src={abstract} alt="" />
            </div>

            <div className="Aending">
              <div className="Atime">1 h ago</div>
              <img src={like} alt="" />
              <img src={share} alt="" />
              <img src={moreBottom} alt="" />
            </div>
          </div>
          <div className="Aactivity-box">
            <div className="Aactivity-person">
              <img src="./images/man.png" alt="" />
              <div className="Aperson-action">
                <div className="Aname">Banwo Olorun</div>
                <div className="Aaction">Commented on your photo</div>
              </div>
            </div>
            <div className="Aactivity-content">
              <div className="Acontent">
                Great work deserves appreciations. This is so amazing! 😍🎉
              </div>
              <img src={abstract} alt="" />
            </div>

            <div className="Aending">
              <div className="Atime">1 h ago</div>
              <img src={like} alt="" />
              <img src={share} alt="" />
              <img src={moreBottom} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</React.Fragment>

  )
}