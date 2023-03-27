import React, { useState, useEffect, useCallback } from "react";
import { googleMapsApiKey, useJsApiLoader, Marker, GoogleMap } from "@react-google-maps/api"
import "./BO.css";
import { FaBars } from "react-icons/fa"
import { MdAddTask } from "react-icons/md";
import { BsFillTruckFrontFill } from "react-icons/bs"
import { FiUserPlus } from "react-icons/fi";
import { ImLocation } from "react-icons/im"
import TaskAssignment from "../../components/Task/taskAssignment"
import Profile from "../../components/Profile/Profile";

const containerStyle = {
  width: '100%',
  height: '100vh'
};
const center = {
  lat: 10.772792707928192,
  lng: 106.6577516415506
};
const mapOptions = {
  fullscreenControl: false
};

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCTtc1rWtMOgBr86wkvAxmhUJ3THUoed8A"
    // googleMapsApiKey: "AIzaSyDaOulQACiJzBfqumbsqg_-vKha8fCnL-s"
  })
  const [showFeatures, setShowFeatures] = useState("Assign task");
  const [map, setMap] = React.useState(null)
  const [showProfile, setShowProfile] = useState(false);
  // const [isAssign, setIsAssign] = React.useState(false);
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  function handleShowBar() {
    setShowSidebar(!showSidebar);
    if (!showSidebar) {
      setShowFeatures("Assign task");
    }
  }
  function handleShowProfile() {
    setShowProfile(!showProfile);
  }

  /*
  1. Assign MCPS for workers
  2. Assign vehicles -> list of MCP
  */
  return (
    <div className="BO--container">
      <nav className={showSidebar ? "BO--sidebar BO--sidebar_addition" : "BO--sidebar"}>
        <div className="BO--ShowBtn">
          <button onClick={handleShowBar}><FaBars /></button>
        </div>
        {showSidebar && <div className="BO--features-box">
          <ul className="BO--features">
            <li onClick={() => setShowFeatures("Assign task")}><MdAddTask /></li>
            <li onClick={() => setShowFeatures("Assign vehicles")}><BsFillTruckFrontFill /></li>
            {/* 
            assign vehicle -> create routes
            priority -> how full the mcp is ? [1,2,3] priority ascending -> sort the list of tasks
            sort descending -> if boolean == 3 -> truck, 1,2-> troller, truck
             */}
            <li onClick={() => setShowFeatures("Assign workers")}><FiUserPlus /></li>
            <li onClick={() => setShowFeatures("View MCPs")}><ImLocation /></li>
            {/*  
                2 positions -> MCP:
                Map: small windows -> summarized info: MCP id, location
                Sidebar: MCP id, location, occupation
            */}
          </ul>
          {
            showFeatures == "Assign task" ? <div className="BO--task" ><TaskAssignment /></div>
              : <div className="BO--featuresDisplay">{showFeatures}</div>
          }
        </div>}
      </nav>
      <main className="BO--content">
        {isLoaded &&
          <div className="map" onClick={() => showSidebar ? setShowSidebar(!showSidebar) : setShowSidebar(showSidebar)}>
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
              <Marker
                position={center}
              />
              <></>
            </GoogleMap>
          </div>}
      </main >
      <Profile showProfile={showProfile} handleProfile={handleShowProfile}></Profile>
    </div >
  );
}

// List of tasks and the workers taking them on

