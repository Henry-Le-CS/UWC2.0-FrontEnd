import React, { useState } from "react";
import "./BO.css";

export default function BO() {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <div className="BO--container">
            <button className="toggle-button" onClick={toggleSidebar}>
                {showSidebar ? "Hide" : "Show"} Sidebar
            </button>
            {showSidebar && (
                <nav className="BO--sidebar">
                    <ul>
                        <li>
                            <div className="assign-task">
                                <a href="#">
                                    <img src={require("../../assets/icon-sidebar/material-symbols_add-task.png")} alt="Add task" />
                                </a>
                                <a>Assign task</a>
                            </div>
                        </li>
                        <li>
                            <div className="assign-vehicles">
                                <a href="#">
                                    <img src={require("../../assets/icon-sidebar/material-symbols_fire-truck.png")} alt="Add vehicle" />
                                </a>
                                <a>Assign vehicles</a>
                            </div>
                        </li>
                        <li>
                            <div className="assign-worker">
                                <a href="#">
                                    <img src={require("../../assets/icon-sidebar/mdi_worker.png")} alt="Add worker" />
                                </a>
                                <a>Assign workers</a>
                            </div>
                        </li>
                        <li>
                            <div className="assign-MCP">
                                <a href="#">
                                    <img src={require("../../assets/icon-sidebar/basil_hotspot-solid.png")} alt="Add MCP" />
                                </a>
                                <a>View MCPs</a>
                            </div>
                        </li>
                        <li>
                            <div className="settings">
                                <a href="#">
                                    <img src={require("../../assets/icon-sidebar/ant-design_setting-outlined.png")} alt="Add MCP" />
                                </a>
                                <a>settings</a>
                            </div>
                        </li>
                    </ul>
                </nav>
            )}

            <main className="BO--content">
                <h1>BO site</h1>
                <p>hi</p>
            </main>
        </div>
    );
}
