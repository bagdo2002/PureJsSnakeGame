let positionZero = { x: 0, y: 0 };
let lastPosition = { x: 0, y: 0 };
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      if (positionZero.y !== 0) break;
      positionZero = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      if (positionZero.y !== 0) break;
      positionZero = { x: 0, y: 1 };
      break;

    case "ArrowLeft":
      if (positionZero.x !== 0) break;
      positionZero = { x: -1, y: 0 };
      break;

    case "ArrowRight":
      if (positionZero.x !== 0) break;
      positionZero = { x: 1, y: 0 };
      break;
  }
});

export const handleDirection = () => {
  lastPosition = positionZero
  return positionZero;
};
