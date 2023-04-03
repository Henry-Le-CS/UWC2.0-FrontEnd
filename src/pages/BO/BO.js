import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import {
  googleMapsApiKey,
  useJsApiLoader,
  Marker,
  GoogleMap,
} from "@react-google-maps/api";
import "./BO.css";
import { useLocation, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MdAddTask } from "react-icons/md";
import { BsFillTruckFrontFill } from "react-icons/bs";
import { FiUserPlus } from "react-icons/fi";
import { ImLocation } from "react-icons/im";
import TaskAssignment from "../../components/Task/taskAssignment";
import Profile from "../../components/Profile/Profile";
import Assign from "../../components/Assign/Assign";
import Vehicle from "../../components/Vehicle/Vehicle";
const containerStyle = {
  width: "100%",
  height: "100vh",
};
const center = {
  lat: 10.772792707928192,
  lng: 106.6577516415506,
};
const mapOptions = {
  fullscreenControl: false,
};

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showFeatures, setShowFeatures] = useState("Assign task");
  const [currentBO, setCurrentBO] = useState({});
  const [map, setMap] = React.useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [showAssign, setShowAssign] = useState(false);
  const [selected, setSelected] = React.useState([]);
  const [MCPs, setMCPs] = React.useState([]);
  const location = useLocation();
  const { isLogin, userID } = location.state;
  const [workerData, setWorkerData] = React.useState([]);
  const [isSubmit, setIsSubmit] = React.useState(false);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCTtc1rWtMOgBr86wkvAxmhUJ3THUoed8A",
    // AIzaSyCTtc1rWtMOgBr86wkvAxmhUJ3THUoed8A
  });

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  React.useEffect(() => {
    axios
      .get("http://localhost:8000/viewWorker")
      .then((res) => {

        setWorkerData(res.data);
      })
      .catch((err) => console.log(err));
  }, [selected]);
  React.useState(() => {
    console.log("get data mcp")
    axios
      .get("http://localhost:8000/viewMCP")
      .then((res) => {
        console.log(res.data)
        setMCPs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    
  }, [showAssign]);

  function handleShowBar() {
    setShowSidebar(!showSidebar);
    if (!showSidebar) {
      setShowFeatures("Assign task");
    }
  }
  function handleShowAssign() {
    setShowAssign(false);
  }

  function handleShowProfile() {
    setShowProfile(!showProfile);
  }
  function handleIsSubmit() {
    setIsSubmit(!isSubmit);
  }
  function handleSelected() {
    console.log(selected)
    setShowAssign(false)
    console.log("hihihi")
  }
  function updateMCPs(newMCPs){
    setMCPs(newMCPs)
    console.log("i was herre")
  }

  return (
    <div className="BO--container">
      x``
      <nav
        className={
          showSidebar ? "BO--sidebar BO--sidebar_addition" : "BO--sidebar"
        }
      >
        {!showSidebar && (
          <div className="BO--ShowBtn">
            <button onClick={handleShowBar}>
              <FaBars />
            </button>
          </div>
        )}
        {showSidebar && (
          <div className="BO--features-box">
            <ul className="BO--features">
              <div className="BO--ShowBtn">
                <button onClick={handleShowBar}>
                  <FaBars />
                </button>
              </div>
              <li onClick={() => setShowFeatures("Assign task")}>
                <MdAddTask />
              </li>
              <li onClick={() => setShowFeatures("Assign vehicles")}>
                <BsFillTruckFrontFill />
              </li>
              <li onClick={() => setShowFeatures("View workers")}>
                <FiUserPlus />
              </li>
              <li onClick={() => setShowFeatures("View MCPs")}>
                <ImLocation />
              </li>
            </ul>
            {showFeatures == "Assign task" ? (
              <div className="BO--task">
                <TaskAssignment
                  MCPs={MCPs}
                  setSelected={setSelected}
                  setShowAssign={setShowAssign}
                />
              </div>
            ) : showFeatures == "Assign vehicles" ? (
              <Vehicle />
            ) : (
              <div className="BO--featuresDisplay">{showFeatures}</div>
            )}
          </div>
        )}
      </nav>
      {showAssign && (
        <Assign
          showAssign={handleShowAssign}
          selectedMCPs={selected}
          setSelected={handleSelected}
          workerData={workerData}
          setShowAssign={setShowAssign}
          onUpdate={updateMCPs}
        />
      )}
      <main className="BO--content">
        {isLoaded && (
          <div
            className="map"
            onClick={() =>
              showSidebar
                ? setShowSidebar(!showSidebar)
                : setShowSidebar(showSidebar)
            }
          >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={16}
              onUnmount={onUnmount}
              onClick={(e) => {
                console.log("latitude = ", e.latLng.lat());
                console.log("longtitude = ", e.latLng.lng());
              }}
              options={mapOptions}
            >
              <Marker position={center} />
              <></>
            </GoogleMap>
          </div>
        )}
      </main>
      <Profile
        showProfile={showProfile}
        handleProfile={handleShowProfile}
        userID={userID}
      ></Profile>
    </div>
  );
}
