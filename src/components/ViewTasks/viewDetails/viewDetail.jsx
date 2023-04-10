import React from "react";
import axios from "axios";
import "./viewDetail.css";
function ViewDetail(props) {
  const [MCP, setMCP] = React.useState(
    props.MCPs.filter((MCP) => MCP._id === props.selectedMCP._id)[0]
  );
  const [addText, setAddText] = React.useState(false);
  const [Text, setText] = React.useState(MCP.description);
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8000/writeDescription", {
        _id: MCP._id,
        description: Text,
      })
      .then((res) => {
        setMCP(res.data.filter((mcp) => mcp._id === props.selectedMCP._id)[0]);
        props.setMCP(res.data);
        setAddText(false);
      });
  }
  function handleMark(event) {
    event.preventDefault();
    axios.post("http://localhost:8000/markStatus", {
      isCompleted: MCP.isCompleted,
      _id: MCP._id,
      location: MCP.location,
    }).then(res=>{
        setMCP(res.data.filter((mcp) => mcp._id === props.selectedMCP._id)[0]);
        props.setMCP(res.data);
    })
  }
  return (
    <div className="displayMCP--container">
      <div className="displayMCP--Btn">
        <button
          className="TA--assignBtn vehicle--assignBtn"
          onClick={(event) => {
            event.preventDefault();
            props.setViewPage("");
          }}
        >
          Back
        </button>
        <button
          className="TA--assignBtn vehicle--assignBtn vehicle--removeBtn"
          onClick={(event) => {
            event.preventDefault();
            props.setCenter({
              lat: +props.selectedMCP.lat,
              lng: +props.selectedMCP.lng,
            });
          }}
        >
          Re-center
        </button>
      </div>
      <div className="displayMCP--Info viewDetail--info">
        <h1>{MCP.location}</h1>
        {MCP.isCompleted ? (
          <h5 style={{ color: "green", fontWeight: "bold", fontSize: "15px" }}>
            Completed
          </h5>
        ) : (
          <h5 style={{ color: "red", fontWeight: "bold", fontSize: "15px" }}>
            Incompleted
          </h5>
        )}
        <div className="displayMCP--description">
          <h2>Description:</h2>
          {MCP.description && !addText ? (
            <>
              <p>{MCP.description}</p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setAddText(true);
                }}
                className="displayMCP--desBtn"
                style={{
                  textTransform: "uppercase",
                  color: "white",
                  fontWeight: "bolder",
                }}
              >
                Edit
              </button>
            </>
          ) : addText ? (
            <form onSubmit={handleSubmit}>
              <textarea
                className="displayMCP--text"
                name=""
                id=""
                cols="100%"
                rows="10"
                value={Text}
                onChange={(event) => setText(event.target.value)}
              >
                {MCP.description}
              </textarea>
              <button className="displayMCP--desBtn" type="submit">
                Save
              </button>
            </form>
          ) : (
            <>
              <p style={{ fontStyle: "italic" }}>Not yet added</p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setAddText(true);
                }}
                className="displayMCP--desBtn"
              >
                Add description
              </button>
            </>
          )}
        </div>
        {!addText ? (
          <button
            className={
              "viewDetail--CompleteBtn" +
              (MCP.isCompleted ? " incomplete" : " complete")
            }
            onClick={handleMark}
          >
            Mark as {MCP.isCompleted ? "Incompleted" : "Completed"}
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default ViewDetail;
