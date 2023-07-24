import { handleDirection } from "./directionKey.js";

export const SNAKE_SPEED = 5;

const snakeBody = [{ x: 11, y: 11 }];

let newSegment = 0;

export const updateSnake = () => {
  addSegment();
  let direction = handleDirection();

  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }

  snakeBody[0].x += direction.x;
  snakeBody[0].y += direction.y;
};

export const expandeSnake = (amount) => {
  newSegment += amount;
};

export const onSnake = (segment, { ignoreHead = false } = {}) => {
  return snakeBody.some((element, index) => {
    if (ignoreHead && index == 0) {
      return false;
    }

    return equalHandler(segment, element);
  });
};

const equalHandler = (segment, element) => {
  return segment.x == element.x && segment.y == element.y;
};

export const getSnakeHead = () => {
  return snakeBody[0];
};

export const snakeIntesaction = () => {
  return onSnake(snakeBody[0], { ignoreHead: true });
};
export const drawSnake = (gameBoard) => {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add("snake");
    gameBoard.appendChild(snakeElement);
  });
};

const addSegment = () => {
  for (let i = 0; i < newSegment; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
  }

  newSegment = 0;
};
