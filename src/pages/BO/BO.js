import React, { useState } from "react";
import "./BO.css";

export default function BO() {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <div className="container" id="bo-container">
            <button className="toggleSidebarBtn" onClick={toggleSidebar}>
                {showSidebar ? "Hide" : "Show"} Sidebar
            </button>
            {console.log("BO", showSidebar)}
            {showSidebar && (
                <nav className="sidebar">
                    <ul>
                        <li>
                            <a>Home</a>
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

            <main className="content">
                <h1>BO site</h1>
                <p>hi</p>
            </main>
        </div>
    );
}
