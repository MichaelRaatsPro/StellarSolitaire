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
  const [cardFront, setCardFront] = useState(errorCard);
  const [isFaceUp, setFaceUp] = useState(false);    //Cards default to face down state but can be flipped to face up
  const [inGoal, setGoal] = useState()
  const [isVisible, setIsVisible] = useState(true);
  const [grdRow, setGrdRow] = useState(props.grdRow); 
  const [zIdx, setZIdx] = useState(props.zIdx || grdRow); // Initialize zIndex with grdRow
  const [grdCol, setGrdCol] = useState(props.grdCol); 
  const [stackID, setStackID] = useState(props.stackID);
  const {updateTopOfStacks, topOfStacks, cardValue, suit} = (props);
  const [canUpdate, setCanUpdate] = useState(true);     //used to avoid infinite looping of useEffects

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
    switch (suit) {
      case 1:
        setCardFront(alienCard);
        break;
      case 2:
        setCardFront(astronautCard);
        break;
      case 3:
        setCardFront(starCard);
        break;
      case 4:
        setCardFront(moonCard);
        break;  
      default:
        setCardFront(errorCard);
        break;
    }
   }, [suit])

   useEffect(() => {
    isFaceUp? setCardImage(cardFront) :  setCardImage(cardBack);
    isFaceUp? setIsVisible(true): setIsVisible(false);
   }, [isFaceUp])

   useEffect(() => {
    // if (canUpdate){
      setCanUpdate(false);
      updateTopOfStacks(stackID);
      let colRef = 1;
      switch(stackID){
        case "stock": case "t1":
          colRef = 1;
          break;
        case "waste": case "t2":
          colRef = 2;
          break;
        case "t3":
          colRef = 3;
          break;
        case "t4": case "f1":
          colRef = 4;
          break;  
        case "t5": case "f2":
          colRef = 5;
          break;  
        case "t6": case "f3":
          colRef = 6;
          break;
        case "t7": case "f4":
          colRef = 7;
          break;     
        default:
          colRef = -1;
          break;
      }
      // console.log(`The stack is ${stackID}`);
      if (stackID.startsWith('t')) {
        setGrdRow(topOfStacks.find(stack => stack.id === stackID).number);
      }else{
        setGrdRow(1);
      }
      setGrdCol(colRef);
      setZIdx(topOfStacks.find(stack => stack.id === stackID).number);
    // }
  }, [stackID]);

  // if the column changes, StackID needs to update acccordingly
  // useEffect(() => {
  //   // if (canUpdate){
  //     if (grdRow === 1){
  //       switch(grdCol){
  //         case 1: 
  //           setStackID("stock");
  //           break;
  //         case 2:
  //           setStackID("waste");
  //           break;
  //         case 4: case 5: case 6: case 7:
  //           setStackID(`f${grdCol}`);
  //           break;  
  //         default:
  //           setStackID("");
  //           break;
  //       }
  //     }else if (grdRow >= 2){
  //       setStackID(`t${grdCol}`);
  //     }
  //   // }
  // }, [grdCol,grdRow]);

   function flip(event){
    console.log('Flipping');
    console.log(`the stackID of this card is ${stackID})`);
    console.log(`the zindex of this card is ${zIdx})`)
    console.log(`the col of this card is ${grdCol})`)
    console.log(`the row of this card is ${grdRow})`)
    setCanUpdate(true);
    if (grdCol === 1 && grdRow === 1){
      setGrdCol(grdCol+1);
    }
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