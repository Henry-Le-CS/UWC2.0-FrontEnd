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
import AssignVehicle from "../../components/Vehicle/Assign/AssignVehicle"
import Remove from "../../components/Vehicle/Remove/Remove";
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
  const [groupData, setGroupData] = React.useState([]);
  const [selectedGroup,setSelectedGroup] = React.useState("")
  const [showVehicle,setShowVehicle] = React.useState(false);
  const [vehicle,setVehicle] = React.useState([])
  const [removeGroup, setRemoveGroup] = React.useState([]);
  const [isSure,setIsSure] = React.useState(false)
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
  React.useEffect(() => {
    axios
      .get("http://localhost:8000/viewGroup")
      .then((response) => {
        setGroupData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  React.useEffect(()=>{
    axios.get("http://localhost:8000/viewVehicle")
      .then(response=>{
        setVehicle(response.data)
        console.log(response.data)
      })
      .catch(err=> console.log(err))
  },[])
  // React.useEffect(()=>{

  // },[])
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
    setShowAssign(false)
  }
  function updateMCPs(newMCPs){
    console.log(newMCPs)
    setMCPs(newMCPs)
  }
  function updateGroup(group){
    console.log(group)
    setGroupData(group)
  }
  function handleShowVehicle(){
    setShowVehicle(!showVehicle)
  }
  return (
    <div className="BO--container">
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
              <Vehicle setIsSure={setIsSure} setRemoveGroup={setRemoveGroup} groupData = {groupData} setShowVehicle={handleShowVehicle} setSelectedGroup={setSelectedGroup}/>
            ) : (
              <div className="BO--featuresDisplay">{showFeatures}</div>
            )}
          </div>
        )}
      </nav>
      {showAssign ? (
        <Assign
          showAssign={handleShowAssign}
          selectedMCPs={selected}
          setSelected={handleSelected}
          workerData={workerData}
          setShowAssign={setShowAssign}
          onUpdate={updateMCPs}
          setGroupData={updateGroup}
        />) : showVehicle ? <AssignVehicle setGroupData={setGroupData} setShowVehicle={handleShowVehicle} vehicle={vehicle} selectedGroup={selectedGroup}/> 
        :isSure? <Remove setMCPs={updateMCPs} setGroupData={updateGroup} setIsSure={setIsSure} selectedGroup={selectedGroup}/> :<></>
      }
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
