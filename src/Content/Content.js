import React from 'react';
import './Content.css';

function Content (){
    return (
        <div className="content">
            <div className="content_left">
                <ul>
                    <li>
                        <a href="#">
                            <img src="/assets/user.png" alt="profile"/>
                            <span>Kezia Stephen</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="/assets/covid.png" alt="covid"/>
                            <span>COVID-19 Information Center</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="/assets/friends.png" alt="friends"/>
                            <span>Friends</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="/assets/groups.png" alt="groups" /> 
                            <span>Groups</span>
                        </a>
                     </li>
                     <li>
                        <a href="#">
                            <img src="/assets/marketplace.png" alt="marketplace" />
                            <span>Marketplace</span>
                        </a>
                     </li>
                     <li>
                        <a href="#">
                            <img src="/assets/videos.png" alt="videos" /> 
                            <span>Videos</span>
                         </a>
                     </li>
                     <li>
                        <a href="#">
                            <img src="/assets/events.png" alt="events" /> 
                            <span>Events</span>
                        </a>
                     </li>
                     <li>
                        <a href="#">
                            <img src="/assets/memories.png" alt="memories" />
                            <span>Memories</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="/assets/saved.png" alt="saved" /> 
                            <span>Saved</span>
                        </a>
                    </li>
                    <li>
                        <span className="see_more">See More</span>
                     </li>
                     <div className="border"></div>
                        <h3 className="shortcut_title">Your shortcuts</h3>
                        <div className="shortcuts_wrapper">
                            <a href="#">
                                <img src="/assets/shortcuts.jpg" alt="shortcuts" />
                                <span>Perfumes And Accessories Ltd.</span>
                            </a>
                        </div>
                </ul>
            </div>
            <div className="content_center">
                <div className="stories">
                <img src="https://picsum.photos/id/137/110/200" alt="" />
                <img src="https://picsum.photos/id/247/110/200" alt="" />
                <img src="https://picsum.photos/id/522/110/200" alt="" />
                <img src="https://picsum.photos/id/231/110/200" alt="" />
                <img src="https://picsum.photos/id/537/110/200" alt="" />
                <img src="https://picsum.photos/id/237/110/200" alt="" />
                </div>
                <div class="media_container">
                    <div className="share">
                        <div class="share_upSide">
                            <img src="/assets/user.png" alt="profile" />
                            <input type="text" placeholder="What's on your mind, Kezia?" />
                        </div>
                        <hr/>
                        <div className="share_downSide">
                        <div className="share_downSide_link">
                            <span>Live Video</span>
                        </div>
                        <div className="share_downSide_link">
                            <span>Photo/Video</span>
                        </div>
                        <div className="share_downSide_link">
                            <span>Feeling/Activity</span>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="news_feed">
                    <div className="news_feed_title">
                        <img src="/assets/profile.png" alt="user" />
                        <div className="news_feed_title_content">
                            <p>Codersbite Magazine</p>
                            <span>12h.</span>
                        </div>
                    </div>
                    <div className="news_feed_description">
                        <p className="news_feed_subtitle">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                            esse cum id vero odit tempora dicta. Saepe corporis voluptatibus
                            laboriosam?
                        </p>
                        <img src="/assets/sunflower.jpg" alt="sunflower" />
                        <div className="news_feed_description_title">
                            <span>YOUTUBE / CODERSBITE</span>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Nesciunt repudiandae exercitationem mollitia, suscipit labore
                            rem reiciendis distinctio atque totam facere placeat officia
                            ea quia? Atque.
                            </p>
                        </div>
                    </div>
                    <div className="likes_area">
                        <div className="emojis">
                            <img src="/assets/emoji_like.png" alt="like" />
                            <img src="/assets/emoji_surprised.png" alt="surprised" />
                            <img src="/assets/emoji_angry.png" alt="angry" />
                            <span>25</span>
                        </div>
                        <div className="comment_counts">
                            <span>4 Comments</span>
                            <span>13 Shares</span>
                        </div>
                    </div>
                    <div className="divider"><hr /></div>
                        <div className="likes_buttons">
                        <div className="likes_buttons_links">
                            <span>Like</span>
                        </div>
                        <div className="likes_buttons_links">
                            <span>Comment</span>
                        </div>
                        <div className="likes_buttons_links">
                            <span>Share</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content_right">
                <div className="content_right_inner">
                    <div className="your_pages">
                        <h3>Your Pages</h3>
                        {/* <i class="fas fa-ellipsis-h"></i> */}
                    </div>
                <ul>
                    <li>
                    <a href="#">
                        <img
                        className="your_page_logo"
                        src="/assets/codersbite.png"
                        alt="codersbite"
                        />
                        <span>Codersbite</span>
                    </a>
                    </li>
                    <li className="content_right_small_text">
                    <a href="#">
                        {/* <i class="fas fa-bell"></i> */}
                        <span>5 Notifications</span>
                    </a>
                    </li>
                    <li className="content_right_small_text">
                    <a href="#">
                        {/* <i class="fas fa-bullhorn"></i> */}
                        <span>Create Promotion</span>
                    </a>
                    </li>
                </ul>
                <div className="content_right_divider"></div>
                    <div className="birthdays">
                        <h3>Birthdays</h3>
                    </div>
                <ul>
                    <li>
                    <a href="#">
                        <img src="/assets/gift-box.png" alt="gift-box" />
                        <span>Jary Garson's birthday is today</span>
                    </a>
                    </li>
                </ul>
                <div className="content_right_divider"></div>
                    <div className="contacts">
                        <h3>Contacts</h3>
                        <div className="contact_icons">
                        {/* <i class="fas fa-search"></i>
                        <i class="fas fa-ellipsis-h"></i> */}
                        </div>
                            </div>
                <ul>
                    <li>
                    <a href="#">
                        <img src="/assets/avatar1.png" alt="user" />
                        <span>John Doe</span>
                    </a>
                    </li>
                    <li>
                    <a href="#">
                        <img src="/assets/avatar2.png" alt="user" />
                        <span>Zorah Makey</span>
                    </a>
                    </li>
                    <li>
                    <a href="#">
                        <img src="/assets/avatar5.png" alt="user" />
                        <span>Kero Janre</span>
                    </a>
                    </li>
                    <li>
                    <a href="#">
                        <img src="/assets/avatar3.png" alt="user" />
                        <span>Ube Yuri</span>
                    </a>
                    </li>
                    <li>
                    <a href="#">
                        <img src="/assets/avatar4.png" alt="user" />
                        <span>Hosaa Mora</span>
                    </a>
                    </li>
                </ul>
             </div>
        </div>

    </div>
    
    )
}

export default Content;

