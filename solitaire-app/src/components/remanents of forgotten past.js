import React, { Component } from 'react'
import card from '../images/alien-card.png';
import cardBack from '../images/card-back.png'

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFaceUp: props.isFaceUp !== undefined ? props.isFaceUp : false
    };
  }

  // Function to toggle the isFaceUp state
  flipUp = () => {
    if (!this.state.isFaceUp) { // Check if isFaceUp is false
      this.setState({ isFaceUp: true }); // Set isFaceUp to true only if it's currently false
    }
  };

  render() {
    const { suit, value, stackNumber, stackLayer, goalStack, onClick } = this.props;
    const { isFaceUp } = this.state;

    const cardStyle = {
      width: "10vw",
      zIndex: 2,
      cursor: 'pointer' // Add cursor pointer for clickable cards
    };

    const cardColor = suit === 'Star' || suit === 'Moon' ? '' : 'black';

    return (
      <img
        src={!isFaceUp ? cardBack : card} 
        style={{ ...cardStyle, color: cardColor }}
        onClick={() => {
          this.flipUp();
        }}
        alt={`${value} of ${suit}`}
      />
    );
  }
}
