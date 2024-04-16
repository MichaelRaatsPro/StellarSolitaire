//Card.jsx
import React, { memo, useState, useEffect } from 'react'
import cardBack from '../images/card-back.svg';
import alienCard from '../images/alien-card.svg';
import astronautCard from '../images/astronaut-card.svg';
import starCard from '../images/star-card.svg';
import moonCard from '../images/moon-card.svg';
import errorCard from '../images/error-card.svg';
import '../App.css';

function Card(props) {

  const [cardImage, setCardImage] = useState(cardBack);
  const [isFaceUp, setFaceUp] = useState(true);    //Cards default to face down state but can be flipped to face up
  const [inGoal, setGoal] = useState()
  const [isVisible, setIsVisible] = useState(true);
  // const [grdRow, setGrdRow] = useState(props.grdRow || 2); 
  // const [grdCol, setGrdCol] = useState(props.grdCol || 1); 
  // const setTopOfStack = props.setTopOfStack;
  //const [localTopOfStack, setLocalTopOfStack] = useState(topOfStack);
  const {updateTopOfStacks, topOfStacks, cardValue, stackID, suit} = (props);

  let displayValue = cardValue;
  switch (cardValue) {
    case 1:
      displayValue = 'A';
      break;
    case 11:
      displayValue = 'J';
      break;
    case 12:
      displayValue = 'Q';
      break;
    case 13:
      displayValue = 'K';
      break;
    default:
       displayValue = cardValue;
       break;
  }

   useEffect(() => {
    console.log('');
    let cardFront = cardBack;
    switch (suit) {
      case 'alien':
        cardFront = alienCard;
        break;
      case 'astronaut':
        cardFront = astronautCard;
        break;
      case 'star':
        cardFront = starCard;
        break;
      case 'moon':
        cardFront = moonCard;
        break;  
      default:
        cardFront = errorCard;
        break;
    }

    isFaceUp? setCardImage(cardFront) :  setCardImage(cardBack);
    isFaceUp? setIsVisible(true): setIsVisible(false);

    
   }, [isFaceUp,suit])

   useEffect(() => {
    if (stackID !== 0) {
      updateTopOfStacks(stackID);
      console.log(`The stack is ${stackID}`);
    }
  }, [stackID]);

   function flip(event){
    console.log('Flipping');
    setFaceUp(!isFaceUp);
    event.stopPropagation();
  }

  let valColour = suit === 'alien' || suit === 'astronaut'? 'black' : 'white';

  return (
    <>
    <div className = "cardContainer"  onClick = {flip} style = {{gridColumn: stackID, gridRow: topOfStacks[stackID]}}>
      {console.log(`gridRow will be ${topOfStacks[stackID].number}`)}
      <img src = {cardImage}  alt = '' /> 
      {isVisible && <p style = {{color: valColour, userSelect: 'none'}}>{displayValue}</p>}
      </div>
    </>
  )
}

export default Card;