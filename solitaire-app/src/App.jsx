//App.jsx
import logo from "./images/alien.svg";
import Table from "./components/Table";
import React, { useState } from 'react';
import './App.css';
import Card from "./components/Card";
import Deck from "./components/Deck";

document.title = "Stellar Solitaire";

function App() {
  
  let topOfStacks = [
    { id: 1, number: 1 },
    { id: 2, number: 1 },
    { id: 3, number: 1 },
    { id: 4, number: 1 },
    { id: 5, number: 1 },
    { id: 6, number: 1 },
    { id: 7, number: 1 }]; //set the tops of each stack

  
  const topCards = [];

  for (let x = 1; x < 8; x++) {
    if (x !==  3){
      topCards.push(<Card key={`card-${x}`} suit = {'alien'} cardValue={x} stackID={0} grdCol = {x} grdRow = {1}  updateTopOfStacks={updateTopOfStacks} topOfStacks={topOfStacks} />)
    }
  }


  const tableuCards = [];

  for (let i = 1; i < 8; i++) {
    for (let j = 1; j < 15; j++) {
      tableuCards.push(<Card key={`card-${i}-${j}`} suit = {'alien'} cardValue={j} stackID={i} updateTopOfStacks={updateTopOfStacks} topOfStacks={topOfStacks} />);
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

        <Deck size = {52} updateTopOfStacks={updateTopOfStacks}/>
        {/* {topCards} 
        {tableuCards}  */}

        {/* <Table></Table>  */}
      </div>
    </>
  );
}



export default App;
