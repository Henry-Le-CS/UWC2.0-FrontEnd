import "./Profile.css";
import { RxAvatar } from "react-icons/rx";
import React, { useState, useEffect } from "react";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { BsFillChatDotsFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import Card from "./Card/Card";
import axios from "axios";
import ChatContainer from "./Chat/ChatContainer";


function Profile(props) {
  const [profileSection, setProfileSection] = React.useState("");
  const [profileInfo, setProfile] = React.useState({});

  useEffect(() => {
    axios
      .post("http://localhost:8000/infoBO", { user_id: props.userID })
      .then((res) => {
        setProfile(res.data);
      });
  }, []);

  function handleProfileClick(clickedProfile) {
    setProfileSection(clickedProfile);
  }

  return (
    <div className="Profile--container">
      {!props.showProfile ? (
        <div className="Profile--showBtn">
          <button onClick={props.handleProfile}>
            <RxAvatar />
          </button>
        </div>
      ) : (
        <div className="Profile--Display">
          <div className="Profile--navbar">
            <div className="Profile--section">
              <BsFillPersonVcardFill
                onClick={() => handleProfileClick("profile")}
                className="Profile--section--component"
              />
              <BsFillChatDotsFill

                onClick={() => handleProfileClick("chat")}

                className="Profile--section--component"
              />
            </div>
            <button
              className="Profile--section--component close-btn"
              onClick={() => {
                props.handleProfile();
                handleProfileClick("");
              }}
            >
              <AiFillCloseCircle />
            </button>
          </div>
          {profileSection == "profile" ? (
            <Card profileInfo={profileInfo}></Card>
          ) : profileSection == "chat" ? (
            <div id="chat">
              <div class="message received">Hi there, how are you doing?</div>
              <div class="message sent">I'm doing pretty well, thanks for asking. How about you?</div>
              <div class="message received">I'm doing well too, thanks for asking. What have you been up to?</div>
              <div class="message sent">Heading for MCP1</div>
              <div class="message received">OK, have a good day</div>
            </div>
          ) : (
            <Card profileInfo={profileInfo} />
          )}
        </div>
      )}
    </div>
  );
}

export default Profile;
