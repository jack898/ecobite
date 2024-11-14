/* Tabs.js
 * Author: Jack Burton
 *
 * Purpose: Maps out tabs and switches currently active tab.
*/

import React from "react";

function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className="tab-container">
      {["Calculator", "Sources", "About"].map((tab) => (
        <div
          key={tab}
          className={`basic-button ${activeTab === tab ? "active" : ""}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
}

export default Tabs;
