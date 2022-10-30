import bolatito from "../../SetterApp-Assets/bolatito.png";
import george from "../../SetterApp-Assets/george.png";
import banwo from "../../SetterApp-Assets/bolatito.png";
import hauwa from "../../SetterApp-Assets/hauwa.png";
import maymouna from "../../SetterApp-Assets/maymouna.png";
import udeme from "../../SetterApp-Assets/udeme.png";
import yusuf from "../../SetterApp-Assets/yusuf.png";
import oladimeji from "../../SetterApp-Assets/dimeji.png";
import moreprofile from "../../SetterApp-Assets/more.png";
import searchicon from "../../SetterApp-Assets/search-normal.png";
import morechat from "../../SetterApp-Assets/more2.png";
import addstory from "../../SetterApp-Assets/addstory.png";
import story1 from "../../SetterApp-Assets/story1.png";
import story2 from "../../SetterApp-Assets/story2.png";
import story3 from "../../SetterApp-Assets/story3.png";
import story4 from "../../SetterApp-Assets/story4.png";
import logo from "../../SetterApp-Assets/logo.png";
import media1 from "../../SetterApp-Assets/media1.png";
import media2 from "../../SetterApp-Assets/media2.png";
import media3 from "../../SetterApp-Assets/media3.png";
import media4 from "../../SetterApp-Assets/media4.png";
import arrowdown from "../../SetterApp-Assets/arrow-down.png";
import arrowup from "../../SetterApp-Assets/arrow-up.png";
import arrowright from "../../SetterApp-Assets/arrow-right.png";
import happyemoji from "../../SetterApp-Assets/happyemoji.png";
import sendbutton from "../../SetterApp-Assets/send.png";

import "../../Stylesheets/messages.css";

export const MessageContent = () => {
  return (
    <div className="Mcontainer">
      <div className="Mmessage-profile">
        <div className="Mprofile-box">
          <img src={bolatito} alt="" className="Mpicture-story" />
          <div className="Mprofile">
            <div className="Mname">Crystal Alaba</div>
            <div className="Mrole">Operations Manager</div>
          </div>
          <div>
            <img src={moreprofile} alt="" />
          </div>
        </div>
        <div className="Msearch-box">
          <img src={searchicon} alt="" />
          <input type="text" placeholder="Search people, groups & messages" />
        </div>
        <div className="Mstories-box">
          <div className="Mstories">
            <img src={addstory} alt="addstory" />
            <img src={story1} alt="" />
            <img src={story2} alt="" />
            <img src={story3} alt="" />
            <img src={story4} alt="" />
            <img src={arrowright} alt="" />
          </div>
        </div>
        <div className="Mchats-box">
          <div className="Mchat">
            <img src={george} alt="" className="Mpicture-story" />
            <div className="Mmessage-box">
              <div className="Mname">George Dearie</div>
              <div className="Mmessage">Hey dear, I'm coming to your pla..</div>
            </div>
            <div className="Mtime">12.30pm</div>
          </div>
          <div className="Mchat">
            <img src={banwo} alt="" className="Mpicture-story" />
            <div className="Mmessage-box">
              <div className="Mname">Banwo Shogo</div>
              <div className="Mmessage">How far?, You dey house..</div>
            </div>
            <div className="Mtime">12.30pm</div>
          </div>
          <div className="Mchat">
            <img src={hauwa} alt="" className="Mpicture-story" />
            <div className="Mmessage-box">
              <div className="Mname">Hauwa Adamu</div>
              <div className="Mmessage">Hey dear, whats up?..</div>
            </div>
            <div className="Mtime">2.30pm</div>
          </div>
          <div className="Mchat">
            <img src={maymouna} alt="" className="Mpicture-story" />
            <div className="Mmessage-box">
              <div className="Mname">Maymouna Mogaji</div>
              <div className="Mmessage">Have you done..</div>
            </div>
            <div className="Mtime">12.55pm</div>
          </div>
          <div className="Mchat">
            <img src={udeme} alt="" className="Mpicture-story" />
            <div className="Mmessage-box">
              <div className="Mname">Udeme Eko</div>
              <div className="Mmessage">Guy, the assignment..</div>
            </div>
            <div className="Mtime">1.30am</div>
          </div>
          <div className="Mchat">
            <img src={yusuf} alt="" className="Mpicture-story" />
            <div className="Mmessage-box">
              <div className="Mname">Yusuf TL</div>
              <div className="Mmessage">Guy, the assignment..</div>
            </div>
            <div className="Mtime">1.50am</div>
          </div>
          <div className="Mchat">
            <img src={oladimeji} alt="" className="Mpicture-story" />
            <div className="Mmessage-box">
              <div className="Mname">Oladimeji TL</div>
              <div className="Mmessage">Guy, the assignment..</div>
            </div>
            <div className="Mtime">1.50am</div>
          </div>
        </div>
      </div>
      {/* MESSAGE CHAT */}
      <div className="Mmessage-chat">
        <div className="Mchat-header">
          <img src={logo} alt="" />
          <div className="Mprofile-box">
            <div className="Mprofile-name">Pacesetter</div>
            <div className="Mprofile-details">10 Participants | 4 Online</div>
          </div>
          <div className="Mmore">
            <img src={morechat} alt="" />
          </div>
        </div>
        <div className="Mchat-content">
          <div className="Msender-content">
            <div className="Msender-details">
              <div>Bolatito,</div>
              <div>11:24</div>
            </div>
            <div className="Msender-chat">
              <div className="Msender-message">
                Guys, I wont be around. What's the update?? 😀
              </div>
              <img src={bolatito} className="Mpicture-story-small" alt="" />
            </div>
          </div>
          <div className="Mreceived-content">
            <div className="Mreceived-chat">
              <img src={maymouna} alt="" className="Mpicture-story-small" />
              <div className="Mreceived-message">
                <div className="Mreceived-details">
                  <div>Maymouna,</div>
                  <div>11:26</div>
                </div>
                <div className="Mreceived-text">
                  Omoo, why you no talk since naw??
                </div>
              </div>
            </div>
          </div>
          <div className="Mreceived-content">
            <div className="Mreceived-chat">
              <img src={maymouna} alt="" className="Mpicture-story-small" />
              <div className="Mreceived-message">
                <div className="Mreceived-details">
                  <div>Maymouna,</div>
                  <div>11:27</div>
                </div>
                <div className="Mreceived-text">
                  You should have told us since lastweek ooo!
                </div>
              </div>
            </div>
          </div>
          <div className="Mreceived-content">
            <div className="Mreceived-chat">
              <img src={udeme} alt="" className="Mpicture-story-small" />
              <div className="Mreceived-message">
                <div className="Mreceived-details">
                  <div>Udeme,</div>
                  <div>11:27</div>
                </div>
                <div className="Mreceived-text">
                  <span>@Maymouna 😀</span>
                </div>
              </div>
            </div>
          </div>
          <div className="Mreceived-content">
            <div className="Mreceived-chat">
              <img src={banwo} alt="" className="Mpicture-story-small" />
              <div className="Mreceived-message">
                <div className="Mreceived-details">
                  <div>Banwo Shogo,</div>
                  <div>11:29</div>
                </div>
                <div className="Mreceived-text">
                  <span>@bolatito</span>I knew you won't make it. Hope you've
                  done your task sha?
                </div>
              </div>
            </div>
          </div>
          <div className="Msender-content">
            <div className="Msender-details">
              <div>Bolatito,</div>
              <div>11:40</div>
            </div>
            <div className="Msender-chat">
              <div className="Msender-message">
                I have done my task. Check the github repo 😀
              </div>
              <img src={bolatito} className="Mpicture-story-small" alt="" />
            </div>
          </div>
        </div>
        <div className="Mchat-type-message">
          <div className="Mtype-box">
            <input type="text" placeholder="Write your message" />
            <img src={happyemoji} id="Mhappyemoji" alt="" />
            <img src={sendbutton} id="Msend-icon" alt="" />
          </div>
        </div>
      </div>
      {/* MESSAGE-INFO */}
      <div className="Mmessage-info">
        <div className="Minfo-header">
          <div className="Mheading">Group Info</div>
          <img src={logo} alt="" />
          <div className="Mname">Pacesetter</div>
        </div>
        <div className="Mshared-media">
          <div className="Mheader-box">
            <h3>Shared Media</h3>
            <img src={arrowup} alt="" />
          </div>
          <div className="Mmedia">
            <img src={media1} alt="" />
            <img src={media2} alt="" />
            <img src={media3} alt="" />
            <img src={media4} alt="" />
          </div>
        </div>
        <div className="Mchat-members">
          <div className="Mheader-box">
            <h3>Chat Members</h3>
            <img src={arrowup} alt="" />
          </div>
          <div className="Mmembers">
            <div className="Mmember">
              <img src={maymouna} alt="" className="Mpicture-story-small" />
              <p id="admin">Maymouna Mogaji</p>
              <span className="Madmin">Admin</span>
            </div>
            <div className="Mmember">
              <img src={bolatito} alt="" className="Mpicture-story-small" />
              <p>You</p>
            </div>
            <div className="Mmember">
              <img src={udeme} alt="" className="Mpicture-story-small" />
              <p>Udeme Eko</p>
            </div>
            <div className="Mmember">
              <img src={yusuf} alt="" className="Mpicture-story-small" />
              <p>Yusuf Olanrewaju</p>
            </div>
          </div>
        </div>
        <div className="Mshared-files">
          <div className="Mheader-box">
            <h3>Shared Files</h3>
            <img src={arrowdown} alt="" />
          </div>
        </div>
        <div className="Mshared-links">
          <div className="Mheader-box">
            <h3>Shared Links</h3>
            <img src={arrowdown} alt="" />
          </div>
        </div>
        <div className="Mprivacy-support">
          <div className="Mheader-box">
            <h3>Privacy &amp; Support</h3>
            <img src={arrowdown} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
