/*
Primary idea:
This is used for removing or assigning vehicles.
Flow:
    Select a group -> In a box will turn up -> 2 main sections
    - Select a vehicle -> display a list of vehicles -> Submit and assign
    - Do not need to assign vehicles -> Just remove that group
    - Assign route ?
*/
import React from "react";
import "./Vehicle.css";
import { Checkbox } from "@mui/material";
import { MdAddTask } from "react-icons/md";
import axios from "axios";
function Vehicle(props) {
  const groupData = props.groupData;
  const [selectedGroup, setSelectedGroup] = React.useState("");
  groupData.sort((a, b) => b.mcp_id.length - a.mcp_id.length);
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.nativeEvent.submitter.name);
    if (event.nativeEvent.submitter.name == "assign") {
      props.setSelectedGroup(selectedGroup);
      props.setShowVehicle();
    } else {
      console.log("remove");
    }
  }
  function handleClickBox(event) {
    setSelectedGroup(event.target.value);
  }
  function Checkbox() {}
  function handleSearch(event) {
    event.preventDefault();
  }
  return (
    <div className="vehicle--container">
      <form className="TA--search--container" onSubmit={handleSearch}>
        <button className="TA--search--btn" type="submit">
          search
        </button>
        <input
          className="TA--search--input"
          type="search"
          placeholder="Search group of MCPs..."
        />
      </form>
      <form className="TA--MCP vehicle--group" onSubmit={handleSubmit}>
        <div name="assign" className="vehicle--submitBtn">
          <button
            name="assign"
            type="submit"
            className="TA--assignBtn vehicle--assignBtn"
            // onClick={() => {
            //   props.setShowVehicle();
            // }}
          >
            Assign vehicle
          </button>
          <button
            // name = "remove"
            name="remove"
            type="submit"
            className="TA--assignBtn vehicle--assignBtn vehicle--removeBtn"
            // onClick={() => {
            // }}
          >
            Remove group
          </button>
        </div>

        <div className="TA--MCP--container">
          {groupData.map((Group, index) => {
            return (
              <label
                htmlFor={"mcpSelection" + index}
                className="TA--MCP--display"
                key={index}
              >
                <div className="TA--MCP--info vehicle--group--info">
                  <h2
                    style={{
                      fontSize: "26px",
                      fontWeight: "bold",
                      letterSpacing: "0px",
                    }}
                  >
                    Group {index + 1}
                  </h2>
                  <div className="vehicle--container--displayInfo">
                    <div className="vehicle--displayInfo">
                      <span>#MCP:</span> {Group.mcp_id.length}
                    </div>
                    <div className="vehicle--displayInfo">
                      <span>#Worker:</span> {Group.worker_id.length}
                    </div>
                  </div>
                  <div>
                    <span style={{fontWeight: "bold"}}>Date:</span> {Group.day} {Group.month} {Group.year}
                  </div>
                </div>
                <input
                  id={"mcpSelection" + index}
                  type="radio"
                  name="mcpSelection"
                  value={Group._id}
                  className="vehicle--radio"
                  onClick={handleClickBox}
                />
              </label>
            );
          })}
        </div>
      </form>
    </div>
  );
}

export default Vehicle;
