//Deck
import '../App.css';
import React from 'react';
import Card from "./Card";


const cards = [];

function Deck({size, updateTopOfStacks, topOfStacks}){
    
    const stackID = "stock";
    const grdRow = 1;
    const grdCol = 1;
    let cardZIdx = 1;
    for (let i = 0; i < size; i++){
      console.log("Iteration",i);
      const suit = Math.floor(Math.random() * 4) + 1;
      const number = Math.floor(Math.random() * 13 ) + 1;
      console.log(`random number is ${number}`);
      if ( cards.length===0 || !cards.find(card => card.suit === suit && card.number === number)){
        cards.push (<Card 
          key= {`card-${i}`}
          cardValue = {number}
          suit = {suit}
          stackID = {stackID}
          updateTopOfStacks = {updateTopOfStacks}
          topOfStacks={topOfStacks} 
          zIdx = {cardZIdx}
        />); 
        console.log(`the card number ${i+1} is at row ${grdRow} and column ${grdCol}`);
        cardZIdx = cardZIdx + 1;
      }else{
        i--;
      }
    }
    console.log(cards.length);

    return(<>
          {cards}
          </>
    );
  }

  export default Deck;