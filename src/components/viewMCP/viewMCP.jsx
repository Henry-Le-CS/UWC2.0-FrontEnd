import React from "react";
import "./viewMCP.css";
import ListMCP from "./viewComponent/listMCP";
import DisplayMCP from "./viewComponent/displayMCP";
export default function ViewMCP(props) {
  const [showContent, setShowContent] = React.useState("list");
  const [selectedMCP, setSelectedMCP] = React.useState({});
  return showContent === "list" ? (
    <ListMCP
      setCenter={props.setCenter}
      MCPs={props.MCPs}
      workerData={props.workerData}
      setShowContent={setShowContent}
      setSelectedMCP={setSelectedMCP}
    ></ListMCP>
  ) : (
    <DisplayMCP setMCPs={props.setMCPs} MCPs={props.MCPs} selectedMCP={selectedMCP} setCenter={props.setCenter} setShowContent={setShowContent} />
  );
}
