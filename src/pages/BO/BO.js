import React, { useState } from "react";
import "./BO.css";

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
                <nav className="BO--sidebar">
                    <ul>
                        <li>
                            <div className="assign-task">
                                <a href="#">
                                    <img src={require("../../assets/icon-sidebar/material-symbols_add-task.png")} alt="Add task" />
                                </a>
                                <a>Assign task</a>
                            </div>
                        </li>
                        <li>
                            <div className="assign-vehicles">
                                <a href="#">
                                    <img src={require("../../assets/icon-sidebar/material-symbols_fire-truck.png")} alt="Add vehicle" />
                                </a>
                                <a>Assign vehicles</a>
                            </div>
                        </li>
                        <li>
                            <div className="assign-worker">
                                <a href="#">
                                    <img src={require("../../assets/icon-sidebar/mdi_worker.png")} alt="Add worker" />
                                </a>
                                <a>Assign workers</a>
                            </div>
                        </li>
                        <li>
                            <div className="assign-MCP">
                                <a href="#">
                                    <img src={require("../../assets/icon-sidebar/basil_hotspot-solid.png")} alt="Add MCP" />
                                </a>
                                <a>View MCPs</a>
                            </div>
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
}

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
