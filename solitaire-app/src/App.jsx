//App.jsx
import logo from "./images/alien.svg";
import Table from "./components/Table";
import React, { useState } from 'react';
import './App.css';
import Card from "./components/Card";


function App() {

  // using a for loop to populate the grid seems to disable the changing of images
  const items = [];
  for (let i = 1; i < 15; i++) {
    for (let j = 1; j < 8; j++) {
      items.push(<Card key={`card-${i}-${j}`} grdCol={j} grdRow={i} />);
    }

  }

  const [topOfStacks, setTopOfStacks] = //number refers to the number of cards in the stack
    useState([
      { id: 1, number: 1 },
      { id: 2, number: 2 },
      { id: 3, number: 3 },
      { id: 4, number: 4 },
      { id: 5, number: 5 },
      { id: 6, number: 6 },
      { id: 7, number: 7 }]); //set the tops of each stack
 
      function updateTopOfStacks(stackID){
        console.log(topOfStacks);
        
        const updatedStacks = topOfStacks.map( stack => ({ ...stack, number: stack.number + 1}));
        setTopOfStacks(updatedStacks);
        // console.table(updatedStacks.map(item => ({ id: item.id, number: item.number })));
      }

    // function updateTopOfStacks(idToUpdate) {
      
    //   console.log("ID to update is :" + idToUpdate);
    //   // console.log(prevTopOfStacks);
    //   setTopOfStacks((prevTopOfStacks) =>
    //     prevTopOfStacks.map((item) => 
    //       item.id === idToUpdate ? {...item, number: item.number+1} : item)
    //   );

    //   console.table(topOfStacks.map(item => ({ id: item.id, number: item.number })));
    //   // setTopOfStacks((prevTopOfStacks) => [...prevTopOfStacks,
    //   //     { id: 8, number: 10 }]);
      
    // }

  return (
    <>
      {/*Header and logo}*/}

<<<<<<< HEAD
      <div className="container">
        <div>
          <h1 className="h1" >Stellar Solitaire</h1>
        </div >
        <img src={logo} alt="alien" style={{ float: 'right', marginLeft: '20px', height: '100px', width: 'auto' }} />

      </div>
      {/*Header and logo}*/}
      <div className="tableGrid">
=======
    <div className = "container">
      <div>
      <h1 className="h1" >Stellar Solitaire</h1>
      </div >
      <img src = {logo} alt = "alien" style = {{float: 'right' ,marginLeft:'20px' ,height: '100px', width: 'auto'}}/>
      
    </div>
    {/*Header and logo}*/}
    <div className= "tableGrid">
    
    
    {/* {items.map} */}

    {/* stack 1 */}
    {/* <Card suit = "alien" cardValue = {13}  updateTopOfStack = {updateTopOfStack} topOfStack={topOfStack}/>
    <Card suit = "star" cardValue = {1}  updateTopOfStack = {updateTopOfStack} topOfStack={topOfStack}/>
    <Card suit = "moon" cardValue = {13}  updateTopOfStack = {updateTopOfStack} topOfStack={topOfStack}/>
    <Card suit = "astronaut" cardValue = {13}  updateTopOfStack = {updateTopOfStack} topOfStack={topOfStack}/>
    <Card suit = "alien" cardValue = {1}  updateTopOfStack = {updateTopOfStack} topOfStack={topOfStack}/> */}
    {/* stack2 */}
    {/* <Card suit = "alien" cardValue = {1} stack = {2}  updateTopOfStack = {updateTopOfStack} topOfStack={topOfStack}/>
    <Card suit = "alien" cardValue = {1} stack = {2}  updateTopOfStack = {updateTopOfStack} topOfStack={topOfStack}/> */}
    {/* stack 3 */}
    <Card suit = "alien" cardValue = {1} stack = {3}  updateTopOfStack = {updateTopOfStack} topOfStack={topOfStack}/>
    <Card suit = "alien" cardValue = {1} stack = {3}  updateTopOfStack = {updateTopOfStack} topOfStack={topOfStack}/>
    <Card suit = "alien" cardValue = {1} stack = {3}  updateTopOfStack = {updateTopOfStack} topOfStack={topOfStack}/>

>>>>>>> b5159d418eb31d2905ea03dddd12cf4d150254bd


        {/* {items.map} */}

        {/* stack 1 - */}
        <Card suit="alien" cardValue={1} stackID = {1} updateTopOfStacks={updateTopOfStacks} topOfStacks={topOfStacks} />
        <Card suit="star" cardValue={11} stackID = {1} updateTopOfStacks={updateTopOfStacks} topOfStacks={topOfStacks} />
        <Card suit="moon" cardValue={1} stackID = {1} updateTopOfStacks={updateTopOfStacks} topOfStacks={topOfStacks} />
        <Card suit="astronaut" cardValue={1} stackID = {1} updateTopOfStacks={updateTopOfStacks} topOfStacks={topOfStacks} />
        <Card suit="alien" cardValue={13} stackID = {1} updateTopOfStacks={updateTopOfStacks} topOfStacks={topOfStacks} />
        {/* stack2 */}
        <Card suit="alien" cardValue={1} stackID ={2} updateTopOfStacks={updateTopOfStacks} topOfStacks={topOfStacks} />
        <Card suit="alien" cardValue={1} stackID ={2} updateTopOfStacks={updateTopOfStacks} topOfStacks={topOfStacks} />
        {/* stack 3 */}
        <Card suit="alien" cardValue={1} stackID ={3} updateTopOfStacks={updateTopOfStacks} topOfStacks={topOfStacks} />
        <Card suit="alien" cardValue={1} stackID ={3} updateTopOfStacks={updateTopOfStacks} topOfStacks={topOfStacks} />


        {/* <Card suit = "moon" cardValue = {2} grdCol = {2} grdRow = {2}/>
    <Card suit = "moon" cardValue = {2} grdCol = {2} grdRow = {2}/>
    <Card suit = "star" cardValue = {3} grdCol = {3} grdRow = {2}/> 
    <Card suit = "astronaut" cardValue = {11} grdCol = {4} grdRow = {2} />
    <Card suit = "moon" cardValue = {12} grdCol = {5} grdRow = {2}/>
    <Card suit = "star" cardValue = {13} grdCol = {6} grdRow = {2}/> 
    <Card suit = "astronaut" cardValue = {2} grdCol = {7} grdRow = {2} /> */}






        {/* <Table></Table>  */}
      </div>
    </>
  );
}



export default App;
