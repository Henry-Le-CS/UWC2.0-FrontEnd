import "./displayMCP.css";
import React from "react";
import axios from "axios"
export default function DisplayMCP(props) {
  const [MCP,setMCP]=React.useState(props.MCPs.filter((MCP) => MCP._id === props.selectedMCP._id)[0]);
  const [addText, setAddText] = React.useState(false);
  const [Text, setText] = React.useState(MCP.description);
  console.log(MCP.description)
  function handleSubmit(event){
    event.preventDefault();
    axios.post("http://localhost:8000/writeDescription",{
        _id: MCP._id,
        description: Text
    }).then(res=>{
        console.log(res.data.filter(mcp=>mcp._id === props.selectedMCP._id)[0]._id, "here")
        setMCP(res.data.filter(mcp=>mcp._id === props.selectedMCP._id)[0])
        props.setMCPs(res.data)
        setAddText(false);
    })
  }
  return (
    <div className="displayMCP--container">
      <div className="displayMCP--Btn">
        <button
          className="TA--assignBtn vehicle--assignBtn"
          onClick={(event) => {
            event.preventDefault();
            props.setShowContent("list");
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
      <div className="displayMCP--Info">
        <h1>{MCP.location}</h1>
        {MCP.isAssigned ? (
          <h5 style={{ color: "red", fontWeight: "bold", fontSize: "20px" }}>
            Status: Occupied
          </h5>
        ) : (
          <h5 style={{ color: "green", fontWeight: "bold", fontSize: "15px" }}>
            Status: Unoccupied
          </h5>
        )}
        <div className="displayMCP--description">
          <h2>Description:</h2>
          {MCP.description&&!addText? (
            <>
              <p>{MCP.description}</p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setAddText(true);
                }}
                className="displayMCP--desBtn"
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
                onChange={(event)=>setText(event.target.value)}
              >
                {MCP.description}
              </textarea>
              <button
                className="displayMCP--desBtn"
                type="submit"
              >
                Save
              </button>
            </form>
          ) : (
            <>
              <p>Not yet added</p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setAddText(true);
                }}
                className="displayMCP--desBtn"
                s
              >
                Add description
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
