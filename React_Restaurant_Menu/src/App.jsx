import { Card } from "./Card/Card";
import { Head } from "./Head/Head";

const pizzas = [
  {
    name: "Margherita",
    ingredients: "tomato sauce, mozzarella, flour, water, salt, yeast",
  },
  {
    name: "Marinara",
    ingredients: "garlic, origan, flour, water, salt, yeast",
  },
  {
    name: "Boscaiola",
    ingredients: "sausages, mushrooms, mozzarella, flour, water, salt, yeast",
  },
  {
    name: "Four Seasons",
    ingredients:
      "gorgonzola, parmigiano, mozzarella, flour, water, salt, yeast",
  },
];

function App() {
  return (
    <>
      <Head />
      {pizzas.map((element, index) => {
        return (
          <Card
            key={index}
            pizzaName={element.name}
            pizzaIngredient={element.ingredients}
          />
        );
      })}
      {/* <Card pizzaName={pizzas[0].name} /> */}
    </>
  );
}

export default App;
