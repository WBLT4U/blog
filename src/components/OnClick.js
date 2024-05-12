import React from "react";

//Handle button click
function App() {
  const handleClick = (event) => {
    console.log("Button clicked!");
  };
    return ( 
        <section className="main-page">
          <button onClick={handleClick}>Click Me</button>
        
        </section>
    );

    }
    export default App;