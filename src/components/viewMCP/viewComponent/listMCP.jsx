import "./listMCP.css";
import React from "react";

import { TbLiveView } from "react-icons/tb";
export default function ListMCP(props) {
  const MCPs = props.MCPs;
  function handleSearch(event) {
    event.preventDefault();
  }
  function handleSubmit() {}
  function handleView(event) {
    event.preventDefault();
    const value = JSON.parse(
      event.target.tagName === "BUTTON"
        ? event.target.value
        : event.target.tagName === "svg"
        ? event.target.parentNode.value
        : event.target.parentNode.parentNode.value
    );
    if (value.lat !== "" && value.lng !== "") {
      let lat = +value.lat;
      let lng = +value.lng;
      props.setCenter({
        lat,
        lng,
      });
    }
    props.setSelectedMCP(value)
    props.setShowContent("detail");
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
          placeholder="Search MCP..."
        />
      </form>
      <form className="TA--MCP" onSubmit={handleSubmit}>
        <div type="submit" className="TA--assignBtn viewWorker--assignBtn">
          Click to view MCP in details!
        </div>
        <div className="TA--MCP--container">
          {MCPs.sort((a, b) => -b.isAssigned + a.isAssigned).map(
            (MCP, index) => {
              return (
                <div className="TA--MCP--display" key={index}>
                  <div className="TA--MCP--info">
                    <h2
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        letterSpacing: "0px",
                      }}
                    >
                      {MCP.location}
                    </h2>
                    {MCP.isAssigned ? (
                      <h5 style={{ color: "red", fontWeight: "bold" }}>
                        Status: Occupied
                      </h5>
                    ) : (
                      <h5 style={{ color: "green", fontWeight: "bold" }}>
                        Status: Unoccupied
                      </h5>
                    )}
                  </div>
                  <div className="viewWorker--Btn">
                    <button
                      onClick={handleView}
                      value={JSON.stringify({
                        _id: MCP._id,
                        lat: MCP.latitude,
                        lng: MCP.longitude,
                      })}
                    >
                      <TbLiveView />
                    </button>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </form>
    </div>
  );
}
