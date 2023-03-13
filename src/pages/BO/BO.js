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
                <nav class="BO--sidebar">
                    <ul>
                        <li>
                            <div class="assign-task">
                                <a href="#">
                                    <img src={require("../../assets/icon-sidebar/material-symbols_add-task.png")} alt="Add task" />
                                </a>
                                <a>Home</a>
                            </div>
                        </li>
                        <li>
                            <a>About</a>
                        </li>
                        <li>
                            <a>Contact</a>
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
