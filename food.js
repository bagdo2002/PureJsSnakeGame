import { expandeSnake, onSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";

const EXPANSION_RATE = 3;
let food = random();
export const updateFood = () => {
  if (onSnake(food)) {
    expandeSnake(EXPANSION_RATE);

    food = random();
  }
};

export const drawFood = (gameBoard) => {
  const foodElement = document.createElement("div");

  foodElement.style.gridRowStart = food.y;

  foodElement.style.gridColumnStart = food.x;

  foodElement.classList.add("food");

  gameBoard.appendChild(foodElement);
};

function random() {
  let randomNumber;

  while (randomNumber == null || onSnake(randomNumber)) {
    randomNumber = randomGridPosition();
  }

  return randomNumber;
}
