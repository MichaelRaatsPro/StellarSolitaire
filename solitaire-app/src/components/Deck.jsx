//Deck
import '../App.css';
import React from 'react';
import Card from "./Card";


const cards = [];

function Deck({size, updateTopOfStacks, topOfStacks, droppableAreas}){
    {console.log("deck is called ")}
    let stackID = "stock";
    const grdRow = 1;
    const grdCol = 1;
    let cardZIdx = 1;
    for (let i = 1; i < size+1; i++){
      console.log("Iteration",i);
      const suit = Math.floor(Math.random() * 4) + 1;
      const number = Math.floor(Math.random() * 13 ) + 1;
      if (i>24){
        if (i >= 45 && i < 52){
          stackID = "t7";
        }else if(i >= 39 && i < 45 ){
          stackID = "t6";
        }else if(i >= 34 && i < 39 ){
          stackID = "t5";
        }else if(i >= 30 && i < 34 ){
          stackID = "t4";
        }else if(i >= 27 && i < 30 ){
          stackID = "t3";
        }else if(i === 25 || i === 26 ){
          stackID = "t2";
        }else{
          stackID = "t1";
        }
      }else{
        stackID = "stock";
      }
      if ( cards.length===0 || !cards.find(card => card.suit === suit && card.number === number)){
        {console.log(`card-${i}`)}
        cards.push (
        <Card 
          key= {`card-${i}`}
          cardValue = {number}
          suit = {suit}
          stackID = {stackID}
          droppableAreas={droppableAreas} 
          updateTopOfStacks = {updateTopOfStacks}
          topOfStacks={topOfStacks} 
          zIdx = {cardZIdx}
        />); 
        console.log(`the card number ${i} is at row ${grdRow} and column ${grdCol}`);
        cardZIdx = cardZIdx + 1;
      }else{
        i--;
      }
    }
    console.log(`the number of cards is ${cards.length}`);

    return(<>
          {cards}
          </>
    );
  }

  export default Deck;