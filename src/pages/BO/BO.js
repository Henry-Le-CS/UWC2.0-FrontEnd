import React, { useState, useEffect, useCallback } from "react";
import { googleMapsApiKey, useJsApiLoader, Marker, GoogleMap } from "@react-google-maps/api"
import "./BO.css";
import { FaBars } from "react-icons/fa"
import { MdAddTask } from "react-icons/md";
import { BsFillTruckFrontFill } from "react-icons/bs"
import { FiUserPlus } from "react-icons/fi";
import { ImLocation } from "react-icons/im"
import TaskAssignment from "../../components/Task/taskAssignment"

const containerStyle = {
  width: '100%',
  height: '100vh'
};
const center = {
  lat: 10.772792707928192,
  lng: 106.6577516415506
};
export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAn7zRwQZC0MNs2kQIf8ATBBSW2ZzLXCtw"
  })
  const [showFeatures, setShowFeatures] = useState("Assign task");

  const [map, setMap] = React.useState(null)

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  function handleShowBar() {
    setShowSidebar(!showSidebar);
    if (!showSidebar) {
      setShowFeatures("Assign task");
    }
  }
  function handleFeatures(event) {
    console.log()
  }
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
            <li onClick={() => setShowFeatures("Assign workers")}><FiUserPlus /></li>
            <li onClick={() => setShowFeatures("View MCPs")}><ImLocation /></li>
          </ul>
            {
              showFeatures == "Assign task" ? <div className="BO--task"><TaskAssignment /></div>
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
            >
              <Marker
                position={center}
              />
              <></>
            </GoogleMap>
          </div>}
      </main >
    </div >
  );
}
