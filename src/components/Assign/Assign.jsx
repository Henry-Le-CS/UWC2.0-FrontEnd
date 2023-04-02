import React from "react";
import "./Assign.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { Checkbox } from "@mui/material";
import axios from "axios";
function Assign(props) {
  const workerData = props.workerData;
  const [selectedWorker, setSelectedWorker] = React.useState([]);
  function handleCheckBox(event) {
    const checked = event.target.checked;
    const workerID = event.target.value;
    if (checked) {
      setSelectedWorker((prevSelectedWorker) => {
        return [...prevSelectedWorker, workerID];
      });
    } else {
      setSelectedWorker((prevSelectedWorker) =>
        prevSelectedWorker.filter((id) => id != workerID)
      );
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8000/assignUser", {
        mcp_id: props.selectedMCPs,
        worker_id: selectedWorker,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="assign--container">
      <div className="assign--header">
        <div className="assign--text">
          <h2>Choose workers to assign</h2>
        </div>
        <div className="assign--closeBtn" onClick={props.showAssign}>
          <AiFillCloseCircle />
        </div>
      </div>
      <div className="assign--content">
        <form className="assign--search--container">
          <button className="assign--search--btn" type="submit">
            search
          </button>
          <input
            className="assign--search--input"
            type="search"
            placeholder="Search MCP..."
          />
        </form>
        <form className="assign--select--container" onSubmit={handleSubmit}>
          <div className="assign--select--worker">
            {workerData
              .sort((a, b) => b.is_avail - a.is_avail)
              .map((worker) => {
                return (
                  <div className="assign--worker--display">
                    <div>
                      <div className="assign--worker--info">
                        <h4>
                          {worker.first_name} {worker.last_name}
                        </h4>
                        <h4>ID: {worker.user_id}</h4>
                      </div>
                      <div className="assign--worker--status">
                        {worker.is_avail ? (
                          <span style={{ color: "#4CAF50" }}>Available</span>
                        ) : (
                          <span style={{ color: "red" }}>Busy</span>
                        )}
                      </div>
                    </div>
                    <Checkbox
                      name={`workerID`}
                      value={worker._id}
                      className="TA--MCP--assign"
                      style={{ borderRadius: "50%" }}
                      onChange={handleCheckBox}
                    />
                  </div>
                );
              })}
          </div>
          <button className="assign--submit--btn" type="submit">
            Assign
          </button>
        </form>
      </div>
    </div>
  );
}
export default Assign;
