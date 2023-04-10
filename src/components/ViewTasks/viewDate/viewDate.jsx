import React from "react";
import "./viewDate.css";
import axios from "axios";
import { AiFillMessage } from "react-icons/ai";
import { TbLiveView } from "react-icons/tb";

function ViewDate(props) {
  const dateOptions = props.Group.map((group) => {
    return `${group.day} ${group.month} ${group.year}`;
  });
  const [selectedDate, setSelectedDate] = React.useState(dateOptions[0]);
  const [MCP, setMCP] = React.useState([]);
  const [coWorkers, SetCoWorkers] = React.useState([]);
  const [view, setView] = React.useState("mcps");
  React.useEffect(() => {
    const defaultGroup = props.Group.filter((group) => {
      return `${group.day} ${group.month} ${group.year}` === selectedDate;
    });
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
        console.log(res.data.mcps);
      });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function handleView(event) {
    event.preventDefault();
    const value = JSON.parse(
      event.target.tagName === "BUTTON"
        ? event.target.value
        : event.target.tagName === "svg"
        ? event.target.parentNode.value
        : event.target.parentNode.parentNode.value
    );
    console.log(value);
    if (value.lat !== "" && value.lng !== "") {
      let lat = +value.lat;
      let lng = +value.lng;
      props.setCenter({
        lat,
        lng,
      });
      props.setCenter({
        lat:lat,
        lng: lng,
      })
      props.setMCP(MCP);
      props.setSelectedMCP(value)
      props.setViewPage("detail")
      console.log(lat, lng);
    }
  }
  async function handleTimeChange(event) {
    event.preventDefault();
    setSelectedDate(event.target.value);
    const newGroup = props.Group.filter((group) => {
      return `${group.day} ${group.month} ${group.year}` === event.target.value;
    });
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
              className={view === "workers" ? "add" : "hidden"}
              onClick={() => setView("workers")}
            >
              Co-Workers
            </button>
          </div>
          <div className="viewDate--listSelection">
            {view === "mcps" ? (
              MCP.sort((a,b) => (a.isCompleted-b.isCompleted)).map((mcp, index) => {
                return (
                  <div
                    className="TA--MCP--display viewDate--MCP--display"
                    key={index}
                  >
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
                      {!mcp.isCompleted ? (
                        <h5 style={{ color: "red", fontWeight: "bold" }}>
                          Status: Incompleted
                        </h5>
                      ) : (
                        <h5 style={{ color: "green", fontWeight: "bold" }}>
                          Status: Completed
                        </h5>
                      )}
                    </div>
                    <div className="viewWorker--Btn">
                      <button
                        onClick={handleView}
                        value={JSON.stringify({
                          _id: mcp._id,
                          lat: mcp.lat,
                          lng: mcp.lng,
                        })}
                      >
                        <TbLiveView />
                      </button>
                    </div>
                  </div>
                );
              })
            ) : view === "workers" ? (
              coWorkers.map((worker, index) => {
                return (
                  <div className="detail--list--mcp viewDate-list--worker">
                    <div>
                      <h4>
                        {worker.first_name} {worker.last_name}
                      </h4>
                      <h5>Phone: {worker.phone_number}</h5>
                    </div>
                    <AiFillMessage
                      style={{ fontSize: "30px", color: "#4caf50" }}
                    ></AiFillMessage>
                  </div>
                );
              })
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ViewDate;
