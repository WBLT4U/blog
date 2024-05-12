import React, { useState } from "react";

//Loader component
function Loader() {
  return <div className="loader">Loading...</div>;
  
}
function Content() {
  return <div className="content">
    <p>
      React is a Front End Programming Language
    </p>
  </div>;
}
function App() {
  //Render

  const [isLoading, setIsLoading] = useState(true);

  //Set a timeout to simulate data loading...
      setTimeout(() => { 
      setIsLoading(false);
    }, 5000);
  //Render
  return (
    <section className="main-container">
      {isLoading ? <Loader /> : <Content />}
     </section>
  );
}
export default App;