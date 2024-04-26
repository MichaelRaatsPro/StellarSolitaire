//App.jsx
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'; 
import logo from "./images/alien.svg";
import Table from "./components/Table";
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

  const deck = <Deck size={52} updateTopOfStacks={updateTopOfStacks} topOfStacks={topOfStacks} />;

  function updateTopOfStacks(stackID) {
    const stackToUpdate = topOfStacks.find(stack => stack.id === stackID);

  if (stackToUpdate) {
    stackToUpdate.number += 1;
  }
    } console.log(topOfStacks);

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
        <img src = {alienFoundation} style={{ gridColumn: '4', gridRow: '1' , marginBottom : "10px", justifySelf: "center", zIndex: "0"}} />
        <img src = {astronautFoundation} style={{ gridColumn: '5', gridRow: '1', justifySelf: "center", zIndex: "0"}} />
        <img src = {starFoundation} style={{ gridColumn: '6', gridRow: '1', justifySelf: "center", zIndex: "0"}} />
        <img src = {moonFoundation} style={{ gridColumn: '7', gridRow: '1', justifySelf: "center", zIndex: "0"}} />
        {<Deck size = {52} updateTopOfStacks={updateTopOfStacks} topOfStacks={topOfStacks}/> }
        {}

        {/* <Table></Table>  */}
      </div>
    </>
  );
}



export default App;
