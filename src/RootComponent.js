import React from "react";


//Creat a root component
function App() {
  //List of items
  const items = ["Volkwagen", "Honda", "Toyota", "DAF"];
  //Create a list of list items
  const ListItems = items.map(item => { return <li key={item}>{item}</li>})
  return (
    <ol>
      {ListItems }
    </ol>
  );
}
export default App;