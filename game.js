import {
  SNAKE_SPEED,
  drawSnake,
  updateSnake,
  getSnakeHead,
  snakeIntesaction,
} from "./snake.js";
import { drawFood, updateFood } from "./food.js";

import { outsideTheGrid } from "./grid.js";
let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");

const main = (currentTime) => {
  if (gameOver) {
    if (confirm("Try Again?")) {
      window.location = "/";
    }

    return;
  }

  window.requestAnimationFrame(main);

  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;

  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  lastRenderTime = currentTime;

  updateGame();

  drawGame();
};

window.requestAnimationFrame(main);

const updateGame = () => {
  updateSnake();
  updateFood();
  updateDeath();
};

const drawGame = () => {
  gameBoard.innerHTML = "";

  drawSnake(gameBoard);

  drawFood(gameBoard);
};

const updateDeath = () => {
  gameOver = outsideTheGrid(getSnakeHead()) || snakeIntesaction();

  

};
