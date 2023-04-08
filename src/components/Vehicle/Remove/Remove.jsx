import React from "react";
import "./Remove.css";
import { AiFillCloseCircle } from "react-icons/ai";
import axios from "axios";
export default function Remove(props) {
  function handleClose() {
    props.setIsSure(false);
  }
  async function handleSubmit(event) {
    event.preventDefault();
    if (event.nativeEvent.submitter.name == "remove") {
      try {
        await axios.post("http://localhost:8000/removeGroup", {
          group: props.selectedGroup,
        })
        const response1 = await axios.get("http://localhost:8000/viewGroup");
        props.setGroupData(response1.data);
  
        const response2 = await axios.get("http://localhost:8000/viewMCP");
        props.setMCPs(response2.data);
  
        handleClose();
      } catch (err) {
        console.log(err);
      }
    } else {
      // Handle other cases
    }
  }
  
  return (
    <div className="remove--container">
      <div className="remove--header">
        <div className="remove--question">You want to remove this group?</div>
        <div className="remove--closeBtn" onClick={handleClose}>
          <AiFillCloseCircle />
        </div>
      </div>
      <div className="remove--description">
        You have to re-assign the MCPs and the workers!
      </div>
      <form className="remove--form" onSubmit={handleSubmit}>
        <button
          name="remove"
          type="submit"
          style={{ backgroundColor: "#4CAF50" }}
        >
          Remove
        </button>
        <button
          name="cancel"
          type="submit"
          style={{ backgroundColor: "#f67280" }}
          onClick={handleClose}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
