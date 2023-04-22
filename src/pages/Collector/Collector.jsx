import React, { useState } from "react";
import axios from "axios";
import { useJsApiLoader, Marker, GoogleMap } from "@react-google-maps/api";
import "./Worker.css";
import { useLocation } from "react-router-dom";
import { FaTasks, FaBars } from "react-icons/fa";
import ViewTask from "../../components/ViewTasks/viewTask";
const containerStyle = {
  width: "100%",
  height: "100vh",
};
const mapOptions = {
  fullscreenControl: false,
};

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();
  const { _id } = location.state;
  const [zoom, setZoom] = React.useState(16);
  const [group, setGroup] = React.useState([]);
  const [center, setCenter] = React.useState({
    lat: 10.772792707928192,
    lng: 106.6577516415506,
  });
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCTtc1rWtMOgBr86wkvAxmhUJ3THUoed8A",
  });

  React.useEffect(() => {
    axios.post("http://localhost:8000/findGroups", { _id: _id }).then((res) => {
      setGroup(res.data);
    });
  }, []);
  return (
    <div className="BO--container">
      <nav
        className={
          showSidebar ? "BO--sidebar BO--sidebar_addition" : "BO--sidebar"
        }
      >
        {!showSidebar && (
          <div className="BO--ShowBtn">
            <button onClick={() => setShowSidebar(true)}>
              <FaBars />
            </button>
          </div>
        )}
        {showSidebar && (
          <div className="BO--features-box">
            <ul className="BO--features worker--features">
              <div className="BO--ShowBtn ">
                <button onClick={() => setShowSidebar(false)}>
                  <FaBars />
                </button>
              </div>
              <li>
                <FaTasks />
              </li>
            </ul>
            <div className="BO--task">
              <ViewTask UserID={_id} Group={group}/>
            </div>
          </div>
        )}
      </nav>
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
              zoom={zoom}
              options={mapOptions}
            >
              <Marker position={center} />
              <></>
            </GoogleMap>
          </div>
        )}
      </main>
    </div>
  );
}
