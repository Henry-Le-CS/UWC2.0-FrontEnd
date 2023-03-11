import React, { useState } from "react";
import "./Bo.css";

export default function BO() {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <div className="container" id="bo-container">
            <div className="SideBarBtn">
                <button className="toggleSidebarBtn" onClick={toggleSidebar}>
                    {showSidebar ? "Hide" : "Show"} Sidebar
                </button>
            </div>
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
            {console.log("BO", showSidebar)}

            <main className="content">
                <div>

                <h1>BO site</h1>
                <p>hi</p>
                </div>
            </main>
        </div>
    );
}
