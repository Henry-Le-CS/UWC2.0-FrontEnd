import React from "react";
import "./index.css";
import axios from "axios";
import { MdAddTask } from "react-icons/md";
import Checkbox from "@mui/material/Checkbox";
function TaskAssignment(props) {
  let MCPs = props.MCPs.sort((a, b) => b.priority - a.priority);
  return (
    <div className="TA--container">
      <form className="TA--search--container">
        <button className="TA--search--btn" type="submit">
          search
        </button>
        <input
          className="TA--search--input"
          type="search"
          placeholder="Search MCP..."
        />
      </form>
      {/* <div className="TA--MCP">
        {MCPs.map((MCP, index) => {
          return (
            <div className="TA--MCP--display" key={index}>
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
                  <h5 style={{color: "orange", fontWeight: "bold"}}>Status: Half-full</h5>
                ) : (
                  <h5 style={{color: "green", fontWeight: "bold"}}>Status: Good</h5>
                )}
              </div>
              <button className="TA--MCP--assign">
                <MdAddTask />
              </button>
            </div>
          );
        })}
      </div> */}
      <form className="TA--MCP">
        <button type="submit" className="TA--assignBtn">Assign MCP(s) for workers</button>
        <div>
          {MCPs.map((MCP, index) => {
            return (
              <div className="TA--MCP--display" key={index}>
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
                {/* 
                <input
                  type="checkbox"
                  name={`mcp-${index}`}
                  value={MCP._id}
                  className="TA--MCP--assign"
                /> */}
                <Checkbox
                  name={`mcp-${index}`}
                  value={MCP._id}
                  className="TA--MCP--assign"
                  style={{ borderRadius: "50%" }}
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
