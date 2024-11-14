/* App.js
 * Author: Jack Burton
 *
 * Purpose: Main driver to display the active tab
*/

import React, { useState } from "react";
import './App.css';
import Tabs from './components/Tabs';
import Calculator from './components/Calculator';
import Sources from './components/Sources';
import About from './components/About';

function App() {
  document.title = 'EcoBite';
  const [activeTab, setActiveTab] = useState("Calculator");

  return (
    <div className="App">
      <h1>EcoBite</h1>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Calculator" && <Calculator />}
      {activeTab === "Sources" && <Sources />}
      {activeTab === "About" && <About />}
    </div>
  );
}

export default App;
