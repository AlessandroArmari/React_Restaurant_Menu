import "./Card.css";
import { useState } from "react";
//REMEMBER: IMPORT useState if you want to use it!

const Card = ({ pizzaName, pizzaIngredient }) => {
  const [addBasket, setaddBasket] = useState(0);

  return (
    <div className="Card">
      <div className="pizzaName">Pizza {pizzaName}</div>
      <div className="ingredient">Ingredients: {pizzaIngredient}</div>
      <div className="buttonZone">
        <button
          className="button"
          onClick={(addBasket) => {
            //   [[[addBasket.target.value++]]]---> every time I click, take
            //   the value of the "place" where "addBasket" is located
            //   and sum 1 to it!
            setaddBasket(addBasket.target.value++);
          }}
        >
          Add to Basket
        </button>
        <div>{addBasket}</div>
      </div>
    </div>
  );
};

export { Card };
