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
const MCPs = [
  {
    location: "268 LTK",
    priority: 3,
  },
  {
    location: "268 LTK",
    priority: 3,
  },
  {
    location: "268 LTK",
    priority: 3,
  },
  {
    location: "268 LTK",
    priority: 3,
  },
  {
    location: "268 LTK",
    priority: 3,
  },
  {
    location: "268 LTK",
    priority: 3,
  },
  {
    location: "268 LTK",
    priority: 3,
  },
  {
    location: "268 LTK",
    priority: 3,
  },
];
function Vehicle() {
  function handleSubmit(event) {
    event.preventDefault();
  }
  function handleClickBox() {
    console.log("hi");
  }
  function Checkbox() {}
  return (
    <div className="vehicle--container">
      <form className="TA--search--container">
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
            type="submit"
            className="TA--assignBtn vehicle--assignBtn"
            onClick={() => {
              // props.setShowAssign(true);
            }}
          >
            Assign vehicle
          </button>
          <button
            name="remove"
            type="submit"
            className="TA--assignBtn vehicle--assignBtn vehicle--removeBtn"
            onClick={() => {
              // props.setShowAssign(true);
            }}
          >
            Remove group
          </button>
        </div>

        <div className="TA--MCP--container">
          {MCPs.map((MCP, index) => {
            return (
              <label htmlFor={"mcpSelection"+index} className="TA--MCP--display" key={index}>
                <div className="TA--MCP--info">
                  <h2
                    style={{
                      fontSize: "26px",
                      fontWeight: "500",
                      letterSpacing: "0px",
                    }}
                  >
                    {MCP.location}
                  </h2>
                  {MCP.priority == 3 ? (
                    <h5 style={{ color: "red", fontWeight: "bold" }}>
                      Status: Full
                    </h5>
                  ) : MCP.priority == 2 ? (
                    <h5 style={{ color: "orange", fontWeight: "bold" }}>
                      Status: Half-full
                    </h5>
                  ) : (
                    <h5 style={{ color: "green", fontWeight: "bold" }}>
                      Status: Good
                    </h5>
                  )}
                </div>
                <input
                    id={"mcpSelection"+index}
                  type="radio"
                  name="mcpSelection"
                  value={MCP.id}
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
