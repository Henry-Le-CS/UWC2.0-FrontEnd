import React from "react";
import "./Task.css";
import axios from "axios";
import { MdAddTask } from "react-icons/md";
import Checkbox from "@mui/material/Checkbox";

function TaskAssignment(props) {
  let MCPs = props.MCPs.sort((a, b) => b.priority - a.priority);
  const [selectedMCPs, setSelectedMCPs] = React.useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setSelected(selectedMCPs);
  };
  const handleCheckBox = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedMCPs((prevSelected) => {
      if (checked) {
        return [...prevSelected, value];
      } else {
        return prevSelected.filter((id) => id != value);
      }
    });
  };
  function handleSearch(event) {
    event.preventDefault();
  }
  return (
    <div className="TA--container">
      <form className="TA--search--container" onSubmit={handleSearch}>
        <button className="TA--search--btn" type="submit">
          search
        </button>
        <input
          className="TA--search--input"
          type="search"
          placeholder="Search MCP..."
        />
      </form>
      <form className="TA--MCP" onSubmit={handleSubmit}>
        <button
          type="submit"
          className="TA--assignBtn"
          onClick={() => {
            props.setShowAssign(true);
          }}
        >
          Assign MCP(s) for workers
        </button>
        <div className="TA--MCP--container">
          {MCPs.map((MCP, index) => {
            return (
              <div className="TA--MCP--display" key={index}>
                <div className="TA--MCP--info">
                  <h2
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
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
                <Checkbox
                  name={`mcp-${index}`}
                  value={MCP._id}
                  className="TA--MCP--assign"
                  style={{ borderRadius: "50%" }}
                  onChange={handleCheckBox}
                />
              </div>
            );
          })}
        </div>
      </form>
    </div>
  );
}

export default TaskAssignment;
