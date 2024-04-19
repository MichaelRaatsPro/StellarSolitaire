import Card from "./Card";


const cards = [];

function Deck({size, updateTopOfStacks}){

    for (let i = 0; i < size; i++){
      console.log("Iteration",i);
      const suit = Math.floor(Math.random() * 4) + 1;
      const number = (i % 13) + 1;
      if (!cards.find(card => card.suit === suit && card.number === number)){
        cards.push({ number, suit});
      }
    }
    console.log(cards.length);

    return(
        <div className = "deck">
        {cards.map((card) =>
                 <Card 
                    key= {`${card.number}-${card.suit}`}
                    cardValue = {card.number}
                    suit = {card.suit}
                    updateTopOfStacks = {updateTopOfStacks} />
                 
         )}
          {/* <Card {`card-${x}`} suit = {'alien'} cardValue={x} stackID={0} grdCol = {x} grdRow = {1}  updateTopOfStacks={updateTopOfStacks} topOfStacks={topOfStacks} /> */}
        </div>
    );
  }

  export default Deck;