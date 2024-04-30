//App.jsx
import logo from "./images/alien.svg";
import {useDrag, useDrop, DndProvider } from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
// import Table from "./components/Table";
import React, { useState } from 'react';
import './App.css';
import Card from "./components/Card";
import Deck from "./components/Deck";
import moonFoundation from "./images/moon-foundation.svg";
import starFoundation from "./images/star-foundation.svg";
import alienFoundation from "./images/alien-foundation.svg";
import astronautFoundation from "./images/astronaut-foundation.svg";

document.title = "Stellar Solitaire";

function App() {
  
  let topOfStacks = [
    //stock & waste
    {id: "stock", number: 1},
    {id: "waste", number: 1},
    //foundations
    {id: "f1", number: 1},
    {id: "f2", number: 1},
    {id: "f3", number: 1},
    {id: "f4", number: 1},
    //tableau stacks
    { id: "t1", number: 1 },
    { id: "t2", number: 1 },
    { id: "t3", number: 1 },
    { id: "t4", number: 1 },
    { id: "t5", number: 1 },
    { id: "t6", number: 1 },
    { id: "t7", number: 1 }]; //set the tops of each stack

  function updateTopOfStacks(stackID) {
    const stackToUpdate = topOfStacks.find(stack => stack.id === stackID);

  if (stackToUpdate) {
    stackToUpdate.number += 1;
  }
    } console.log(topOfStacks);

  const droppableAreas = [
    {id: 't1', gridCol: 1, gridRow: 2, spanRows: 12},
    {id: 't2', gridCol: 2, gridRow: 2, spanRows: 12},
    {id: 't3', gridCol: 3, gridRow: 2, spanRows: 12},
    {id: 't4', gridCol: 4, gridRow: 2, spanRows: 12},
    {id: 't5', gridCol: 5, gridRow: 2, spanRows: 12},
    {id: 't6', gridCol: 6, gridRow: 2, spanRows: 12},
    {id: 't7', gridCol: 7, gridRow: 2, spanRows: 12},
    {id: 'f1', gridCol: 4, gridRow: 1},
    {id: 'f2', gridCol: 5, gridRow: 1},
    {id: 'f3', gridCol: 6, gridRow: 1},
    {id: 'f4', gridCol: 7, gridRow: 1}
  ]
  

  return (
    <>
      {/*Header and logo}*/}

      <div className="container">
        <div>
          <h1 className="h1" >Stellar Solitaire</h1>
        </div >
        <img src={logo} alt="alien" style={{ float: 'right', marginLeft: '20px', height: '100px', width: 'auto' }} />

      </div>
      {/*Header and logo}*/}
      
      {/* Table grid and cards */}
      
      <div className="tableGrid">
      {droppableAreas.map((area) => (
        <div
          key={area.id}
          className="drop-area"
          style={{ 
            gridColumn: `${area.gridColumn}`,
            gridRow: `${area.gridRow}${area.id.includes('f') ? ' / span ' + area.spanRows : ''}`,
            zIndex: '30'
          }}></div>))}
        <img src = {alienFoundation} style={{ gridColumn: '4', gridRow: '1' , paddingBottom : "20px", justifySelf: "center", zIndex: "0", minHeight: "100%"}} />
        <img src = {astronautFoundation} style={{ gridColumn: '5', gridRow: '1', justifySelf: "center", zIndex: "0"}} />
        <img src = {starFoundation} style={{ gridColumn: '6', gridRow: '1', justifySelf: "center", zIndex: "0"}} />
        <img src = {moonFoundation} style={{ gridColumn: '7', gridRow: '1', justifySelf: "center", zIndex: "0"}} />
        <Deck size={52} droppableAreas={droppableAreas} updateTopOfStacks={updateTopOfStacks} topOfStacks={topOfStacks} />
        {}
       
        {/* <Table></Table>  */}
      </div> 
    
    </>
  );
}



export default App;
