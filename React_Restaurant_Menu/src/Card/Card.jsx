import "./Card.css";

const Card = ({ pizzaName, pizzaIngredient }) => {
  return (
    <div className="Card">
      <div className="pizzaName">Pizza {pizzaName}</div>
      <div className="ingredient">Ingredients: {pizzaIngredient}</div>
    </div>
  );
};

export { Card };
