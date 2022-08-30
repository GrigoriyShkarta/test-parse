import React from 'react';

import ListCer from "./listCer/ListCer";
import DrugAndDrop from "./drug&dropSide/DrugAndDrop";

import './App.css';


function App() {
  return (
      <div className="wrapper">
        <ListCer/>
        <DrugAndDrop/>
      </div>

  );
}

export default App;
