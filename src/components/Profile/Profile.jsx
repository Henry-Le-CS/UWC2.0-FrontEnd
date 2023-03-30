import "./index.css"
import { RxAvatar } from "react-icons/rx";
import React from "react";
import { AiFillIdcard } from "react-icons/ai"
import { BsFillPersonVcardFill } from "react-icons/bs"
import { BsFillChatDotsFill } from "react-icons/bs"
import { AiFillCloseCircle } from "react-icons/ai"
import Card from "./Card/Card";
import axios from "axios";
function Profile(props) {
    const [profileSection, setProfileSection] = React.useState("");
    const [profileInfo,setProfile] = React.useState({})
    React.useEffect(() => {
      axios 
        .post("http://localhost:8000/infoBO", { user_id: props.userID })
        .then((res) => {
          setProfile(res.data)
        });
    }, []);

    function handleProfileClick(clickedProfile) {
        setProfileSection(clickedProfile);
    }
    return (
        <div className="Profile--container">
            {
                !props.showProfile ?
                    <div className="Profile--showBtn">
                        <button onClick={props.handleProfile}><RxAvatar /></button>
                    </div>
                    :
                    <div className="Profile--Display">
                        <div className="Profile--navbar">
                            <div className="Profile--section">
                                <BsFillPersonVcardFill onClick={() => handleProfileClick("profile")} className="Profile--section--component" />
                                <BsFillChatDotsFill onClick={() => handleProfileClick("chat")} className="Profile--section--component" />
                            </div>
                            <button  className="Profile--section--component close-btn" onClick={()=>{props.handleProfile(); handleProfileClick("")}}><AiFillCloseCircle /></button>
                        </div>
                        {
                            profileSection == "profile" ?
                                <Card profileInfo = {profileInfo}></Card>
                                :
                                profileSection == "chat" ?
                                <div>Chat goes here</div>:<Card profileInfo = {profileInfo}/>
                                }
                    </div>
            }

        </div>
    )
}
export default Profile;
