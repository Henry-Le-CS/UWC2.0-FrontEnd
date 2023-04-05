import "./AssignVehicle.css";
import React from "react";
import "../../Assign/Assign.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { Checkbox } from "@mui/material";
import axios from "axios";
function AssignVehicle(props) {
  const vehicle = props.vehicle;
  const [selectedVehicle, setSelectedVehicle] = React.useState({
    _id: "",
    current_capacity: 0,
    capacity: 0,
  });
  const [isPossible, setIsPossible] = React.useState(true);
  function handleSearch(event) {
    event.preventDefault();
  }
  async function handleSubmit(event) {
    event.preventDefault();
    let groupChosen;
    if (props.selectedGroup) {
      await axios.get("http://localhost:8000/viewGroup").then((response) => {
        const Group = response.data.find((group) => {
          return group._id == props.selectedGroup;
        });
        if (
          Group.worker_id.length >
          selectedVehicle.capacity - selectedVehicle.current_capacity
        ) {
          setIsPossible(false);
        } else {
          setIsPossible(true);
          groupChosen = Group;
        }
      });
      await axios.post("http://localhost:8000/assignVehicle", {
        selectedVehicle_id: selectedVehicle._id,
        selectedGroup: groupChosen,
      });
      await axios
      .get("http://localhost:8000/viewGroup")
      .then((response) => {
        props.setGroupData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }
  function handleCheckBox(event) {
    setSelectedVehicle(JSON.parse(event.target.value));
    console.log(selectedVehicle);
  }

  return (
    <div className="assign--container">
      <div className="assign--header">
        <div className="assign--text">
          <h2>Choose vehicle to assign</h2>
        </div>
        <div className="assign--closeBtn" onClick={props.setShowVehicle}>
          <AiFillCloseCircle />
        </div>
      </div>
      <div className="assign--content">
        <form className="assign--search--container" onSubmit={handleSearch}>
          <button className="assign--search--btn" type="submit">
            search
          </button>
          <input
            className="assign--search--input"
            type="search"
            placeholder="Search vehicle..."
          />
        </form>
        <form className="assign--select--container" onSubmit={handleSubmit}>
          <div className="assign--select--worker">
            {vehicle
              .filter((a) => a.capacity > a.current_capacity)
              .sort(
                (a, b) =>
                  b.current_capacity - a.current_capacity ||
                  b.capacity - a.capacity
              )
              .map((vehicle, index) => {
                return !vehicle.isAssigned ? (
                  <div className="assign--worker--display">
                    <div>
                      <div className="assign--worker--info">
                        <h4>{vehicle.name}</h4>
                      </div>
                      <div className="assign--worker--status">
                        {vehicle.current_capacity < vehicle.capacity ? (
                          <span style={{ color: "#4CAF50" }}>
                            Onload: {vehicle.current_capacity}/
                            {vehicle.capacity}
                          </span>
                        ) : (
                          <span style={{ color: "red" }}>Full</span>
                        )}
                      </div>
                    </div>
                    <input
                      id={"mcpSelection" + index}
                      type="radio"
                      name="mcpSelection"
                      value={JSON.stringify({
                        _id: vehicle._id,
                        current_capacity: vehicle.current_capacity,
                        capacity: vehicle.capacity,
                      })}
                      className="vehicle--radio vehicle--selection"
                      onClick={handleCheckBox}
                    />
                  </div>
                ) : (
                  <></>
                );
              })}
          </div>
          {!isPossible && (
            <h5 style={{ color: "red", marginTop: "5px" }}>
              The chosen vehicle does not have enough slot
            </h5>
          )}
          <button className="assign--submit--btn" type="submit">
            Assign
          </button>
        </form>
      </div>
    </div>
  );
}
export default AssignVehicle;
