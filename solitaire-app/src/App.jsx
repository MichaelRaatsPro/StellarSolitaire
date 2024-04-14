//App.jsx
import logo from "./images/alien.svg";
import Table from "./components/Table";
import React, {useState} from 'react';
import './App.css';
import Card from "./components/Card";


function App() {

// using a for loop to populate the grid seems to disable the changing of images
  const items = [];
    for (let i = 1; i < 15; i++) {
      for (let j = 1; j < 8; j++) {
    items.push(<Card key={`card-${i}-${j}`} grdCol = {j} grdRow = {i}/>);
   } 

}      

const [topOfStack, setTopOfStack] = useState([1,1,1,1,1,1,1]); //set the tops of each stack
function updateTopOfStack(index) {
  console.log("rahhh");
  setTopOfStack((prevTopOfStack) =>
    prevTopOfStack.map((value, idx) => (idx === index ? value + 1 : value))
  );
}

  return (
    <>
    {/*Header and logo}*/}

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
