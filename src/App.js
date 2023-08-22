import React from "react";
import "./App.css";

import imagebg from "./bck-.jpg";

function App() {
  return (
    <main
      style={{
        backgroundImage: `url(${imagebg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <header>
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://globalnetexperts.com.ng"
        >
          <p>Back to home</p>
        </a>
      </header>
      {/* <img src={imagebg} alt="background" className="bck__image" /> */}
      <div className="main">
        <df-messenger
          intent="WELCOME"
          chat-title="GlobalNet Nexus"
          agent-id="be6fb2e4-16e2-43de-a079-35fcbb417d9c"
          language-code="en"
        ></df-messenger>
      </div>
    </main>
  );
}

export default App;
