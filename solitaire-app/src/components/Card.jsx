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
  const [grdRow, setGrdRow] = useState(props.grdRow); 
  const [zIdx, setZIdx] = useState(props.zIdx || grdRow); // Initialize zIndex with grdRow
  const [grdCol, setGrdCol] = useState(props.grdCol); 
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
    let cardFront = cardBack;
    switch (suit) {
      case 1:
        cardFront = alienCard;
        break;
      case 2:
        cardFront = astronautCard;
        break;
      case 3:
        cardFront = starCard;
        break;
      case 4:
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
      // console.log(`The stack is ${stackID}`);
      setGrdCol(stackID);
      setGrdRow(topOfStacks[stackID-1].number);
    }
  }, [stackID]);

  useEffect(() => {
    if (stackID !== 0){
      setZIdx(grdRow);
    }
  }, [grdRow]);

   function flip(event){
    console.log('Flipping');
    console.log(`the zindex of this card is ${zIdx})`)
    setGrdCol(grdCol+1);
    setFaceUp(!isFaceUp);
    event.stopPropagation();
  }

  let valColour = suit === 'alien' || suit === 'astronaut'? 'black' : 'white';

  return (
    <>
    <div className = "cardContainer"  onClick = {flip} style = {{gridColumn: grdCol, gridRow: grdRow, zIndex: zIdx}}>
      <img src = {cardImage}  alt = '' /> 
      {isVisible && <p style = {{color: valColour, userSelect: 'none'}}>{displayValue}</p>}
      </div>
    </>
  )
}

export default Card;