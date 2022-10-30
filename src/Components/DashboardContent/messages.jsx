import bolatito from '../../SetterApp-Assets/bolatito.png'
import george from '../../SetterApp-Assets/george.png'
import banwo from '../../SetterApp-Assets/bolatito.png'
import hauwa from '../../SetterApp-Assets/hauwa.png'
import maymouna from '../../SetterApp-Assets/maymouna.png'
import udeme from '../../SetterApp-Assets/udeme.png'
import yusuf from '../../SetterApp-Assets/yusuf.png'
import oladimeji from '../../SetterApp-Assets/dimeji.png'
import moreprofile from '../../SetterApp-Assets/more.png'
import morechat from '../../SetterApp-Assets/more2.png'
import searchicon from '../../SetterApp-Assets/search-normal.png'
import addstory from '../../SetterApp-Assets/addstory.png'
import story1 from '../../SetterApp-Assets/story1.png'
import story2 from '../../SetterApp-Assets/story2.png'
import story3 from '../../SetterApp-Assets/story3.png'
import story4 from '../../SetterApp-Assets/story4.png'
import logo from '../../SetterApp-Assets/logo.png'
import media1 from '../../SetterApp-Assets/media1.png'
import media2 from '../../SetterApp-Assets/media2.png'
import media3 from '../../SetterApp-Assets/media3.png'
import media4 from '../../SetterApp-Assets/media4.png'
import arrowdown from '../../SetterApp-Assets/arrow-down.png'
import arrowup from '../../SetterApp-Assets/arrow-up.png'
import arrowright from '../../SetterApp-Assets/arrow-right.png'
import happyemoji from '../../SetterApp-Assets/happyemoji.png'
import sendbutton from '../../SetterApp-Assets/send.png'

import '../../Stylesheets/messages.css'
    
export const MessageContent = () => {
    return (
    <div class="container">
        <div class="message-profile">
            <div class="profile-box">
                <img src={bolatito} alt="" class="picture-story" />
                <div class="profile">
                    <div class="name">Crystal Alaba</div>
                    <div class="role">Operations Manager</div>
                </div>
                <div><img src={moreprofile} alt="" /></div>
            </div>
            <div class="search-box">
                <img src={searchicon} alt="" />
                <input type="text" placeholder="Search people, groups & messages" />
            </div>
            <div class="stories-box">
                <div class="stories">
                    <img src={addstory} />
                    <img src={story1} />
                    <img src={story2} />
                    <img src={story3} />
                    <img src={story4} />
                    <img src={arrowright} />
                </div>
            </div>
            <div class="chats-box">
                <div class="chat">
                    <img src={george} alt="" class="picture-story" />
                    <div class="message-box">
                        <div class="name">George Dearie</div>
                        <div class="message">Hey dear, I'm coming to your pla..</div>
                    </div>
                    <div class="time">12.30pm</div>
                </div>
                <div class="chat">
                    <img src={banwo} alt="" class="picture-story" />
                    <div class="message-box">
                        <div class="name">Banwo Shogo</div>
                        <div class="message">How far?, You dey house..</div>
                    </div>
                    <div class="time">12.30pm</div>
                </div>
                <div class="chat">
                    <img src={hauwa} alt="" class="picture-story" />
                    <div class="message-box">
                        <div class="name">Hauwa Adamu</div>
                        <div class="message">Hey dear, whats up?..</div>
                    </div>
                    <div class="time">2.30pm</div>
                </div>
                <div class="chat">
                    <img src={maymouna} alt="" class="picture-story" />
                    <div class="message-box">
                        <div class="name">Maymouna Mogaji</div>
                        <div class="message">Have you done..</div>
                    </div>
                    <div class="time">12.55pm</div>
                </div>
                <div class="chat">
                    <img src={udeme} alt="" class="picture-story" />
                    <div class="message-box">
                        <div class="name">Udeme Eko</div>
                        <div class="message">Guy, the assignment..</div>
                    </div>
                    <div class="time">1.30am</div>
                </div>
                <div class="chat">
                    <img src={yusuf} alt="" class="picture-story" />
                    <div class="message-box">
                        <div class="name">Yusuf TL</div>
                        <div class="message">Guy, the assignment..</div>
                    </div>
                    <div class="time">1.50am</div>
                </div>
                <div class="chat">
                    <img src={oladimeji} alt="" class="picture-story" />
                    <div class="message-box">
                        <div class="name">Oladimeji TL</div>
                        <div class="message">Guy, the assignment..</div>
                    </div>
                    <div class="time">1.50am</div>
                </div>
            </div>
        </div>

        {/* <!-- MESSAGE CHAT --> */}
        <div class="message-chat">
            <div class="chat-header">
                <img src={logo} alt="" />
                <div class="profile-box">
                    <div class="profile-name">Pacesetter</div>
                    <div class="profile-details">10 Participants | 4 Online</div>
                </div>
                <div class="more"><img src={morechat} alt="" /></div>
            </div>
            <div class="chat-content">
                <div class="sender-content">
                    <div class="sender-details">
                        <div>Bolatito,</div>
                        <div>11:24</div>
                    </div>
                    <div class="sender-chat">
                        <div class="sender-message">
                            Guys, I wont be around. What's the update?? 😀
                        </div>
                        <img
                            src={bolatito}
                            class="picture-story-small"
                            alt=""
                        />
                    </div>
                </div>
                <div class="received-content">
                    <div class="received-chat">
                        <img
                            src={maymouna}
                            alt=""
                            class="picture-story-small"
                        />
                        <div class="received-message">
                            <div class="received-details">
                                <div>Maymouna,</div>
                                <div>11:26</div>
                            </div>
                            <div class="received-text">
                                Omoo, why you no talk since naw??
                            </div>
                        </div>
                    </div>
                </div>
                <div class="received-content">
                    <div class="received-chat">
                        <img
                            src={maymouna}
                            alt=""
                            class="picture-story-small"
                        />
                        <div class="received-message">
                            <div class="received-details">
                                <div>Maymouna,</div>
                                <div>11:27</div>
                            </div>
                            <div class="received-text">
                                You should have told us since lastweek ooo!
                            </div>
                        </div>
                    </div>
                </div>
                <div class="received-content">
                    <div class="received-chat">
                        <img
                            src={udeme}
                            alt=""
                            class="picture-story-small"
                        />
                        <div class="received-message">
                            <div class="received-details">
                                <div>Udeme,</div>
                                <div>11:27</div>
                            </div>
                            <div class="received-text">
                                <span>@Maymouna 😀</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="received-content">
                    <div class="received-chat">
                        <img
                            src={banwo}
                            alt=""
                            class="picture-story-small"
                        />
                        <div class="received-message">
                            <div class="received-details">
                                <div>Banwo Shogo,</div>
                                <div>11:29</div>
                            </div>
                            <div class="received-text">
                                <span>@bolatito</span>
                                I knew you won't make it. Hope you've done your task sha?
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sender-content">
                    <div class="sender-details">
                        <div>Bolatito,</div>
                        <div>11:40</div>
                    </div>
                    <div class="sender-chat">
                        <div class="sender-message">
                            I have done my task. Check the github repo 😀
                        </div>
                        <img
                            src={bolatito}
                            class="picture-story-small"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div class="chat-type-message">
                <div class="type-box">
                    <input type="text" placeholder="Write your message" />
                    <img src={happyemoji}id="happyemoji" alt="" />
                    <img src={sendbutton} id="send-icon" alt="" />
                </div>
            </div>
        </div>

        {/* <!-- MESSAGE-INFO --> */}
        <div class="message-info">
            <div class="info-header">
                <div class="heading">Group Info</div>
                <img src={logo} alt="" />
                <div class="name">Pacesetter</div>
            </div>
            <div class="shared-media">
                <div class="header-box">
                    <h3>Shared Media</h3>
                    <img src={arrowup} alt="" />
                </div>
                <div class="media">
                    <img src={media1} alt="" />
                    <img src={media2} alt="" />
                    <img src={media3} alt="" />
                    <img src={media4} alt="" />
                </div>
            </div>
            <div class="chat-members">
                <div class="header-box">
                    <h3>Chat Members</h3>
                    <img src={arrowup} alt="" />
                </div>
                <div class="members">
                    <div class="member">
                        <img
                            src={maymouna}
                            alt=""
                            class="picture-story-small"
                        />
                        <p id="admin">Maymouna Mogaji</p>
                        <span class="admin">Admin</span>
                    </div>
                    <div class="member">
                        <img
                            src={bolatito}
                            alt=""
                            class="picture-story-small"
                        />
                        <p>You</p>
                    </div>
                    <div class="member">
                        <img
                            src={udeme}
                            alt=""
                            class="picture-story-small"
                        />
                        <p>Udeme Eko</p>
                    </div>
                    <div class="member">
                        <img
                            src={yusuf}
                            alt=""
                            class="picture-story-small"
                        />
                        <p>Yusuf Olanrewaju</p>
                    </div>
                </div>
            </div>
            <div class="shared-files">
                <div class="header-box">
                    <h3>Shared Files</h3>
                    <img src={arrowdown} alt="" />
                </div>
            </div>
            <div class="shared-links">
                <div class="header-box">
                    <h3>Shared Links</h3>
                    <img src={arrowdown} alt="" />
                </div>
            </div>
            <div class="privacy-support">
                <div class="header-box">
                    <h3>Privacy & Support</h3>
                    <img src={arrowdown} alt="" />
                </div>
            </div>
        </div>
    </div>
    );
}