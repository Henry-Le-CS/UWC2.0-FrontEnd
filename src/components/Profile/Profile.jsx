import "./Profile.css";
import { RxAvatar } from "react-icons/rx";
import React, { useState, useEffect } from "react";
import { AiFillIdcard } from "react-icons/ai";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { BsFillChatDotsFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import Card from "./Card/Card";
import axios from "axios";
import ChatSection from "./Chat/chat";
// add eventListerner to the form


function Profile(props) {
  const [chatList, setChatList] = useState({});
  const [profileSection, setProfileSection] = React.useState("");
  const [profileInfo, setProfile] = React.useState({});
  const [chatConversation, setChatConversation] = React.useState({});

  useEffect(() => {
    axios
      .post("http://localhost:8000/infoBO", { user_id: props.userID })
      .then((res) => {
        setProfile(res.data);
      });
  }, []);

  useEffect(() => {
    //console.log(props.userID);
    axios
      .post("http://localhost:8000/infoBO/listMessages", { user_id: props.userID })
      .then((res) => {
        setChatList(res.data);
      });
  }, []);


  function handleProfileClick(clickedProfile) {

    setProfileSection(clickedProfile);

  }

  function handleChatClick(chatID) {
    // Fetch chat conversation and display it
    axios
      .get(`http://localhost:8000/chat/${chatID}`)
      .then((res) => {
        // Display chat section with conversation data
        setProfileSection("chat");
        setChatConversation(res.data);
      });
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
              <ChatSection chatList={chatList} handleChatClick={handleChatClick} />
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
