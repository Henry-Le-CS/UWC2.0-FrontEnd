import React from "react";
import "./viewDate.css";
import axios from "axios";
import Checkbox from "@mui/material/Checkbox";
import { AiFillMessage } from "react-icons/ai";
function ViewDate(props) {
  const dateOptions = props.Group.map((group) => {
    return `${group.day} ${group.month} ${group.year}`;
  });
  const [selectedDate, setSelectedDate] = React.useState(dateOptions[0]);
  const [selectedGroup, setSelectedGroup] = React.useState({});
  const [MCP, setMCP] = React.useState([]);
  const [coWorkers, SetCoWorkers] = React.useState([]);
  const [vehicleType, setVehicleType] = React.useState("");
  const [view, setView] = React.useState("");
  React.useEffect(() => {
    const defaultGroup = props.Group.filter((group) => {
      return `${group.day} ${group.month} ${group.year}` === selectedDate;
    });
    setSelectedGroup(defaultGroup[0]);
    axios
      .post("http://localhost:8000/listInfoTasks", {
        _id: defaultGroup[0]._id,
        mcp_id: defaultGroup[0].mcp_id,
        worker_id: defaultGroup[0].worker_id,
        vehicle_id: defaultGroup[0].vehicle_id,
        user_ID: props.UserID,
      })
      .then((res) => {
        setMCP(res.data.mcps);
        SetCoWorkers(res.data.workers);
        setVehicleType(res.data.vehicle.name);
        console.log(res.data.workers);
      });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  async function handleTimeChange(event) {
    event.preventDefault();
    setSelectedDate(event.target.value);
    const newGroup = props.Group.filter((group) => {
      return `${group.day} ${group.month} ${group.year}` === event.target.value;
    });
    setSelectedGroup(newGroup[0]);
    await axios
      .post("http://localhost:8000/listInfoTasks", {
        _id: newGroup[0]._id,
        mcp_id: newGroup[0].mcp_id,
        worker_id: newGroup[0].worker_id,
        vehicle_id: newGroup[0].vehicle_id,
        user_ID: props.UserID,
      })
      .then((res) => {
        setMCP(res.data.mcps);
        SetCoWorkers(res.data.workers);
        console.log(res.data.workers);
        setVehicleType(res.data.vehicle.name);
      });
  }

  return (
    <div className="viewDate--list">
      <select className="viewDate--selection" onChange={handleTimeChange}>
        {selectedDate ? (
          dateOptions.map((date) => {
            return <option value={date}>{date}</option>;
          })
        ) : (
          <option value="">Not assigned yet</option>
        )}
      </select>
      {selectedDate ? (
        <div className="viewDate--Group">
          <div className="viewDate--viewSelection">
            <button
              className={view === "mcps" ? "add" : "hidden"}
              onClick={() => setView("mcps")}
            >
              MCP
            </button>
            <button
              className={view === "mcps" ? "hidden" : "add"}
              onClick={() => setView("workers")}
            >
              Co-Workers
            </button>
          </div>
          <div className="viewDate--listSelection">
            {view === "mcps"
              ? MCP.map((mcp, index) => {
                  return (
                    <div className="TA--MCP--display viewDate--MCP--display" key={index}>
                      <div className="TA--MCP--info">
                        <h2
                          style={{
                            fontSize: "20px",
                            fontWeight: "bold",
                            letterSpacing: "0px",
                          }}
                        >
                          {mcp.location}
                        </h2>
                        {mcp.priority == 3 ? (
                          <h5 style={{ color: "red", fontWeight: "bold" }}>
                            Status: Full
                          </h5>
                        ) : mcp.priority == 2 ? (
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
                        value={mcp._id}
                        className="TA--MCP--assign"
                        style={{ borderRadius: "50%" }}
                      />
                    </div>
                  );
                })
              : coWorkers.map((worker, index) => {
                  return (
                    <div className="detail--list--mcp viewDate-list--worker">
                      <div>
                        <h4>
                          {worker.first_name} {worker.last_name}
                        </h4>
                        <h5>Phone: {worker.phone_number}</h5>
                      </div>
                      <AiFillMessage style={{fontSize: "30px", color: "#4caf50"}}></AiFillMessage>
                    </div>
                  );
                })}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ViewDate;
