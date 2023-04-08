import "./viewTask.css";
import React from "react";
import ViewDate from "./viewDate/viewDate";
function ViewTask(props) {
  const [selection, setSelection] = React.useState("");
  return (
    <div className="viewTask--container">
      <div className="viewTask--header">View Collecting Points</div>
      <div className="viewTask--selection">
        <button
          onClick={() => {
            setSelection("date");
          }}
          className={selection === "date" ? "add" : "hidden"}
        >
          Select a date
        </button>
        <button
          onClick={() => {
            setSelection("calendar");
          }}
          className={selection === "calendar" ? "add" : "hidden"}
        >
          View in calendar
        </button>
      </div>
      {selection === "date" ? (
        <ViewDate UserID={props.UserID} Group={props.Group} />
      ) : selection === "calendar " ? (
        <>hehe</>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ViewTask;
