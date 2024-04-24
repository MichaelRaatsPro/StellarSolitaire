//App.jsx
import logo from "./images/alien.svg";
import Table from "./components/Table";
import React, { useState } from 'react';
import './App.css';
import Card from "./components/Card";
import Deck from "./components/Deck";
import moonFoundation from "./images/moon-foundation.svg";

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

  const tableuCards = [];

  for (let i = 1; i < 8; i++) {
    for (let j = 1; j < 15; j++) {
      tableuCards.push(<Card key={`card-${i}-${j}`} suit = {1} cardValue={j} stackID={i} updateTopOfStacks={updateTopOfStacks} topOfStacks={topOfStacks} />);
      // console.log(j);
    }


  }

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
      <div className="tableGrid">

        {<Deck size = {52} updateTopOfStacks={updateTopOfStacks} topOfStacks={topOfStacks}/> }
        {/* {topCards}  */}
        {/* {tableuCards}  */}

        {/* <Table></Table>  */}
      </div>
    </>
  );
}



export default App;
