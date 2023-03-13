
import React, { useState } from "react";
import "./BO.css";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

export default function BO() {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <div className="BO--container">
            <button className="toggle-button" onClick={toggleSidebar}>
                {showSidebar ? "Hide" : "Show"} Sidebar
            </button>
            {showSidebar && (
                <nav class="BO--sidebar">
                    <ul>
                        <li>
                            <div class="assign-task">
                                <a href="#">
                                    <img src={require("../../assets/icon-sidebar/material-symbols_add-task.png")} alt="Add task" />
                                </a>
                                <a>Home</a>
                            </div>
                        </li>
                        <li>
                            <a>About</a>
                        </li>
                        <li>
                            <a>Contact</a>
                        </li>
                    </ul>
                </nav>

            )}

            <main className="BO--content">
                <h1>BO site</h1>
                <p>hi</p>
            </main>
        </div>
    );



// function BO() {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: "AIzaSyAn7zRwQZC0MNs2kQIf8ATBBSW2ZzLXCtw"
//   })

//   const [map, setMap] = React.useState(null)

//   const onLoad = React.useCallback(function callback(map) {
//     // This is just an example of getting and using the map instance!!! don't just blindly copy!
//     const bounds = new window.google.maps.LatLngBounds(center);
//     map.fitBounds(bounds);

//     setMap(map)
//   }, [])

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null)
//   }, [])

//   return isLoaded ? (
//     <div>
//       <h1>BO Site</h1>
//       <div className="map">
//         <GoogleMap
//           mapContainerStyle={containerStyle}
//           center={center}
//           zoom={16}
//           onLoad={onLoad}
//           onUnmount={onUnmount}
//         >
//           <Marker
//             position={center}
//           />
//           <></>
//         </GoogleMap>
//       </div>
//     </div>
//   ) : <></>
// >>>>>>> main
// }

export default BO
