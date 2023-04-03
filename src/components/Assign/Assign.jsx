import React from "react";
import "./Assign.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { Checkbox } from "@mui/material";
import axios from "axios";
function Assign(props) {
  const workerData = props.workerData;
  const [selectedWorker, setSelectedWorker] = React.useState([]);
  const [selectedDate, setSelectedDate] = React.useState({
    day: 1,
    month: "January",
    year: "2023",
  });
  // ---------CREATE TIME ARRAY---------
  const days = Array.from(Array(31).keys()).map((day) => (
    <option name={day + 1} key={day + 1} value={day + 1}>
      {day + 1}
    </option>
  ));
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ].map((month) => (
    <option key={month} value={month}>
      {month}
    </option>
  ));
  const years = Array.from(Array(100).keys()).map((year) => (
    <option key={year + 1} value={year + 2023}>
      {year + 2023}
    </option>
  ));
  //---------END CREATE TIME ARRAY---------
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

  //---------Submit to server---------
  async function handleSubmit(event) {
    event.preventDefault();
    console.log(props.selectedMCPs);
    console.log(selectedWorker, selectedDate);
    await axios
      .post("http://localhost:8000/assignUser", {
        mcp_id: props.selectedMCPs,
        worker_id: selectedWorker,
        timeStamp: selectedDate,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    await axios
      .get("http://localhost:8000/viewMCP")
      .then((res) => {
        console.log(res.data)
        props.onUpdate(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
    props.showAssign()
  }
  //---------End submit to server---------
  function handleTimeChange(event) {
    setSelectedDate((prevSelectedDate) => {
      return {
        ...prevSelectedDate,
        [event.target.name]: event.target.value,
      };
    });
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
          <div className="assign--select--time">
            <label>
              Day:
              <select
                className="assign--select--component"
                name="day"
                value={selectedDate.day}
                onChange={handleTimeChange}
              >
                {days}
              </select>
            </label>
            <label>
              Month:
              <select
                className="assign--select--component"
                name="month"
                value={selectedDate.month}
                onChange={handleTimeChange}
              >
                {months}
              </select>
            </label>
            <label>
              Year:
              <select
                className="assign--select--component"
                name="year"
                value={selectedDate.year}
                onChange={handleTimeChange}
              >
                {years}
              </select>
            </label>
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
