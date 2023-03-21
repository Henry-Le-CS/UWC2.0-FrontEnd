import React, { useState, useEffect, useCallback } from "react";
import { googleMapsApiKey, useJsApiLoader, Marker, GoogleMap } from "@react-google-maps/api"
import "./BO.css";

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

  const [map, setMap] = React.useState(null)

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return (
    <div className="sidebar-container">
      <nav className="BO--sidebar">
        <ul>
          <li>
            <a href="#">
              <img src={require("../../assets/icon-sidebar/add-task.png")} alt="Add task" />
              Assign task
            </a>
          </li>
          <li>
            <a href="#">
              <img src={require("../../assets/icon-sidebar/vehicle.png")} alt="Add vehicle" />
              Assign vehicles
            </a>
          </li>
          <li>
            <a href="#">
              <img src={require("../../assets/icon-sidebar/worker.png")} alt="Add worker" />
              Assign workers
            </a>
          </li>
          <li>
            <a href="#">
              <img src={require("../../assets/icon-sidebar/hotspot.png")} alt="Add MCP" />
              View MCPs
            </a>
          </li>
          <li>
            <a href="#">
              <img src={require("../../assets/icon-sidebar/setting.png")} alt="Settings" />
              Settings
            </a>
          </li>
        </ul>
        <button className="toggle-button" onClick={() => setShowSidebar(!showSidebar)}>
          <span className="arrow-toggle"></span>
          {showSidebar ? "Hide" : "Show"}
        </button>
      </nav>


      <main className="BO--content">
        {/* <h1>BO site</h1> */}
        {isLoaded &&
          <div className="map">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={16}
              onUnmount={onUnmount}
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

// function BO() {
  // const { isLoaded } = useJsApiLoader({
  //   id: 'google-map-script',
  //   googleMapsApiKey: "AIzaSyAn7zRwQZC0MNs2kQIf8ATBBSW2ZzLXCtw"
  // })

  // const [map, setMap] = React.useState(null)

  // const onLoad = React.useCallback(function callback(map) {
  //   // This is just an example of getting and using the map instance!!! don't just blindly copy!
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);

  //   setMap(map)
  // }, [])

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null)
  // }, [])

//   return isLoaded ? (
//     <div>
//       <h1>BO Site</h1>
    //   <div className="map">
    //     <GoogleMap
    //       mapContainerStyle={containerStyle}
    //       center={center}
    //       zoom={16}
    //       onLoad={onLoad}
    //       onUnmount={onUnmount}
    //     >
    //       <Marker
    //         position={center}
    //       />
    //       <></>
    //     </GoogleMap>
    //   </div>
    // </div>
//   ) : <></>
// >>>>>>> main
// }
