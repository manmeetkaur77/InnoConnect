/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <section className="section home" id="home">
      <Link>
        <h1 className="targetHeading">
          {" "}
          <FaArrowLeft className="horizontal-spacing1" />
          Home
        </h1>
      </Link>
      <div className="messagesViewHidden">
        <div className="messageProfile">
          <div className="messageViewProfilePictureContainer">
            <img src="https://picsum.photos/200" alt="" className="messageViewProfilePicture" />
          </div>
          <div className="messageViewInfo">
            <div className="messageViewHeader">
              <h3 className="messageViewName">Priyanshu</h3>
              <p className="messageViewUsername">@lion</p>
              <p className="messageViewDate">15 jan</p>
            </div>
            <p className="lastMessage">I love Maggie</p>
          </div>
        </div>
      </div>
      <div className="profileHeader">
        <div className="backColumn">
          <i className="fa-solid fa-arrow-left"></i>
        </div>
        <div className="profileBanner">
          <img
            src="https://picsum.photos/200"
            alt=""
            className="profileBannerPic"
            id="profileBannerPic"
          />
        </div>
        <div className="imgAndEdit">
          <img
            src="https://picsum.photos/200"
            alt=""
            className="mainProfilePic"
            id="mainProfilePic"
          />
          <button className="btn editProfileButton" id="editProfileButton">
            Message
          </button>

          <button className="btn editProfileButton" id="editProfileButton">
            Follow
          </button>
        </div>

        <div className="mainProfileNameDiv">
          <h3 className="mainProfileName" id="mainProfileName">
            Akvn
          </h3>
          <p className="mainProfileUsername" id="mainProfileUsername">
            @ak
          </p>
          <p className="bio" id="bio">
            Nothing in this world is permanent and you have to constanly grow and improve yourself 
          </p>
        </div>
        <div className="profileCount">
          <div className="countItem">
            <p className="countNumber" id="followingCount">
              23
            </p>
            <p className="countText">Following</p>
          </div>
          <div className="countItem">
            <p className="countNumber" id="followersCount">
              0
            </p>
            <p className="countText">Followers</p>
          </div>
          <div className="countItem">
            <p className="countNumber" id="tweetsCount">
              0
            </p>
            <p className="countText">Tweets</p>
          </div>
        </div>
        <div className="profileNavigationButtons">
          <button className="followingButton profileNavButton" id="profileNavButtonPosts">
            Posts
          </button>
          <button className="followingButton profileNavButton" id="profileNavButtonReplies">
            Replies
          </button>
          <button className="followingButton profileNavButton" id="profileNavButtonLikes">
            Likes
          </button>
        </div>
      </div>
      <div className="profileTweets" id="profileTweets"></div>

      <button className="followingButton">Following</button>
      <div className="tweets" id="tweets">
        <div className="tweet">
          <div className="tweetContent">
            <div className="profileName">
              <img src="https://picsum.photos/200" alt="" className="tweetProfilePic" />
              <h3 className="tweetName">Priyanshu</h3>
              <p className="tweetUsername">@lion</p>
              <p className="tweetTime">28m</p>
            </div>
            <div className="tweetText">
              I love Oranges
            </div>
            <div className="tweetChoices">
              <p className="tweetChoice">
                <i className="fa-regular fa-comment"></i> 2
              </p>
              <p className="tweetChoice">
                <i className="fa-solid fa-retweet"></i> 7
              </p>
              <p className="tweetChoice">
                <i className="fa-regular fa-heart"></i> 12
              </p>
            </div>
            <div className="tweetCommentsHidden">
              <div className="tweet">
                <div className="tweetContent">
                  <div className="profileName">
                    <img src="https://picsum.photos/100" alt="" className="tweetProfilePic" />
                    <h3 className="tweetName">x x</h3>
                    <p className="tweetUsername">@babe</p>
                    <p className="tweetTime" dateCreated="">
                      28m
                    </p>
                  </div>
                  <div className="tweetText">
                    Why I am in mechanical
                  </div>
                  <div className="tweetChoices">
                    <p className="tweetChoice">
                      <i className="fa-regular fa-comment"></i> 2
                    </p>
                    <p className="tweetChoice">
                      <i className="fa-solid fa-retweet"></i> 7
                    </p>
                    <p className="tweetChoice">
                      <i className="fa-regular fa-heart"></i> 12
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tweet">
          <div className="tweetContent">
            <div className="profileName">
              <img src="https://picsum.photos/100" alt="" className="tweetProfilePic" />
              <h3 className="tweetName">x x</h3>
              <p className="tweetUsername">@xx</p>
              <p className="tweetTime" dateCreated="">
                28m
              </p>
            </div>
            <div className="tweetText">
             Earth is round
            
            <div className="tweetChoices">
              <p className="tweetChoice">
                <i className="fa-regular fa-comment"></i> 2
              </p>
              <p className="tweetChoice">
                <i className="fa-solid fa-retweet"></i> 7
              </p>
              <p className="tweetChoice">
                <i className="fa-regular fa-heart"></i> 12
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;