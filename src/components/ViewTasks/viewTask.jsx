import "./viewTask.css";
import React from "react";
import ViewDate from "./viewDate/viewDate";
import ViewDetail from "./viewDetails/viewDetail";
function ViewTask(props) {
  const [selection, setSelection] = React.useState("");
  const [viewPage, setViewPage] = React.useState("");
  const [MCP, setMCP] = React.useState([])
  const [selectedMCP, setSelectedMCP] = React.useState([])
  return (
    <div className="viewTask--container">
      {viewPage === "detail" ? (
        <ViewDetail setMCP={setMCP} selectedMCP={selectedMCP} MCPs={MCP} setViewPage={setViewPage} setCenter={props.setCenter}/>
      ) : (
        <>
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
            <ViewDate
              setCenter={props.setCenter}
              UserID={props.UserID}
              Group={props.Group}
              back = {props.setViewPage}
              setViewPage={setViewPage}
              setMCP={setMCP}
              setSelectedMCP={setSelectedMCP}
            />
          ) : selection === "calendar" ? (
            <>Calendar Display</>
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
}

export default ViewTask;
