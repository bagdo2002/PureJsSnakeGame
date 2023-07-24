const GRID_SIZE = 21;

export const randomGridPosition = () => {
  return {
    x: Math.floor(Math.random() * GRID_SIZE) + 1,
    y: Math.floor(Math.random() * GRID_SIZE) + 1,
  };
};

export const outsideTheGrid = (snake) => {
  return (
    snake.x > GRID_SIZE || snake.x < 1 || snake.y > GRID_SIZE || snake.y < 1
  );
};
