import React from "react";
import axios from "axios";
import { AiFillCloseCircle } from "react-icons/ai";
import "./detail.css";
export default function Detail(props) {
  function handleClose() {
    props.setShowWorker(false);
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  const [showTask, setShowTask] = React.useState(false);
  const workers = props.workerData.user[0];
  const groups = props.workerData.group;
  const dateOptions = groups
    .map((group) => {
      return `${group.day} ${group.month} ${group.year}`;
    })
    .sort((a, b) => {
      const dateA = new Date(a);
      const dateB = new Date(b);
      return dateA - dateB;
    });
  const [selectedDate, setSelectedDate] = React.useState(dateOptions[0]);
  const [selectedView, setSelectedView] = React.useState("MCPs");
  const [MCP, setMCP] = React.useState({});
  const [CoWorkers, setCoWorkers] = React.useState({});
  const [content, setContent] = React.useState({});
  React.useState(async () => {
    if (selectedDate) {
      const [filteredGroups] = groups.filter((group) => {
        const groupDate = `${group.day} ${group.month} ${group.year}`;
        return groupDate === selectedDate;
      });
      await axios
        .post("http://localhost:8000/listInfo", {
          _id: workers._id,
          mcp_id: filteredGroups.mcp_id,
          worker_id: filteredGroups.worker_id,
        })
        .then((res) => {
          setMCP(res.data.mcps);
          setCoWorkers(res.data.workers);
        });
      setShowTask(true);
    }
  }, []);
  async function handleTimeChange(event) {
    console.log(event.target.value);
    setSelectedDate(event.target.value);
    const [filteredGroups] = groups.filter((group) => {
      const groupDate = `${group.day} ${group.month} ${group.year}`;
      return groupDate === selectedDate;
    });
    console.log("hi")
    await axios
      .post("http://localhost:8000/listInfo", {
        _id: workers._id,
        mcp_id: filteredGroups.mcp_id,
        worker_id: filteredGroups.worker_id,
      })
      .then((res) => {
        setMCP(res.data.mcps);
        setCoWorkers(res.data.workers);
      });
  }
  async function handleViewChange(event) {
    console.log(event.target.value);
    console.log(selectedDate);
    setSelectedView(event.target.value);
    const [filteredGroups] = groups.filter((group) => {
      const groupDate = `${group.day} ${group.month} ${group.year}`;
      return groupDate === selectedDate;
    });
    await axios
      .post("http://localhost:8000/listInfo", {
        _id: workers._id,
        mcp_id: filteredGroups.mcp_id,
        worker_id: filteredGroups.worker_id,
      })
      .then((res) => {
        setMCP(res.data.mcps);
        setCoWorkers(res.data.workers);
      });
  }
  return (
    <div className="detail--container">
      <div className="detail--header">
        <div className="detail--question">Worker's information</div>
        <div className="detail--closeBtn" onClick={handleClose}>
          <AiFillCloseCircle />
        </div>
      </div>
      <div className="detail--body">
        <div className="detail--info">
          <div className="detail--img">
            <img src={workers["ava-url"]} alt="" />
          </div>
          <div className="detail--contact">
            <h3>
              Name:{" "}
              <span style={{ fontWeight: "200" }}>
                {workers["last_name"]} {workers["first_name"]}
              </span>
            </h3>
            <h3>
              Day of birth:{" "}
              <span style={{ fontWeight: "200" }}>
                {workers["day_of_birth"]}
              </span>
            </h3>
            <h3>
              Phone:{" "}
              <span style={{ fontWeight: "200" }}>
                {workers["phone_number"]}
              </span>
            </h3>
            <h3>
              Email:{" "}
              <span style={{ fontWeight: "200" }}>{workers["email"]}</span>
            </h3>
          </div>
        </div>
        <div className="detail--task">
          <div className="detail--select">
            <div>
              <h3>Select task date</h3>
              <select value={selectedDate} onChange={handleTimeChange}>
                {dateOptions.length > 0 ? (
                  dateOptions.map((date, index) => {
                    return (
                      <option key={index} value={date}>
                        {date}
                      </option>
                    );
                  })
                ) : (
                  <option>None</option>
                )}
              </select>
            </div>
            <div>
              <h3>About</h3>
              <select value={selectedView} onChange={handleViewChange}>
                <option key="0" value="MCPs">
                  MCPs
                </option>
                <option key="1" value="Co-workers">
                  Co-worker
                </option>
              </select>
            </div>
          </div>
          <div className="detail--display">
            <h2>List of {selectedView == "MCPs" ? "MCPs" : "Co-workers"}</h2>
            <div className="detail--list">
              {showTask ? (
                selectedView == "MCPs" ? (
                  MCP.sort((a, b) => b.priority - a.priority).map((mcp) => {
                    return (
                      <div className="detail--list--mcp">
                        <h4>{mcp.location}</h4>
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
                    );
                  })
                ) : (
                  CoWorkers.map((worker) => {
                    return (
                      <div className="detail--list--mcp">
                        <h4>
                          {worker.first_name} {worker.last_name}
                        </h4>
                        <h5>Phone: {worker.phone_number}</h5>
                      </div>
                    );
                  })
                )
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
