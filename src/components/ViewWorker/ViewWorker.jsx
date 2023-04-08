import React from "react";
import "./ViewWorker.css";
import { AiFillMessage } from "react-icons/ai";
// import { GrView } from "react-icons/gr";
import { AiOutlineFolderView } from "react-icons/ai";
export default function ViewWorker(props) {
  const workerData = props.workerData;

  function handleSearch(event) {
    event.preventDefault();
  }
  function handleSubmit() {}
  function handleMessage(event) {
    event.preventDefault();
  }
  async function handleView(event) {
    event.preventDefault();
    const value =
      event.target.tagName === "BUTTON"
        ? event.target.value
        : event.target.tagName === "svg"
        ? event.target.parentNode.value
        : "";
    props.setSelectViewed(value);
    props.handleViewWorker(value);
  }
  return (
    <div className="TA--container viewWorker--container">
      <form className="TA--search--container" onSubmit={handleSearch}>
        <button className="TA--search--btn" type="submit">
          search
        </button>
        <input
          className="TA--search--input"
          type="search"
          placeholder="Search worker..."
        />
      </form>
      <form className="TA--MCP" onSubmit={handleSubmit}>
        <div type="submit" className="TA--assignBtn viewWorker--assignBtn">
          Click to view in details!
        </div>
        <div className="TA--MCP--container">
          {workerData
            .sort((a, b) => -b.is_avail + a.is_avail)
            .map((worker, index) => {
              return (
                <div className="TA--MCP--display " key={index}>
                  <div className="TA--MCP--info">
                    <h2
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        letterSpacing: "0px",
                      }}
                    >
                      {worker.first_name} {worker.last_name}
                    </h2>
                    {!worker.is_avail ? (
                      <h5 style={{ color: "red", fontWeight: "bold" }}>
                        Status: Working
                      </h5>
                    ) : (
                      <h5 style={{ color: "green", fontWeight: "bold" }}>
                        Status: Available
                      </h5>
                    )}
                  </div>
                  <div className="viewWorker--Btn">
                    <button title="In development" onClick={handleMessage}>
                      <AiFillMessage />
                    </button>
                    <button value={worker._id} onClick={handleView}>
                      <AiOutlineFolderView />
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </form>
    </div>
  );
}
