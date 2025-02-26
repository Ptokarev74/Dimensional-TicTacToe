// This is for allowing to board to rotate

const rotatableObject = document.getElementById('board');
  let isRotating = false;
  let rotateX = 0; // Vertical rotation (up/down)
  let rotateY = 0; // Horizontal rotation (left/right)

  rotatableObject.addEventListener('mousedown', (e) => {
    isRotating = true;
  });

  document.addEventListener('mouseup', () => {
    isRotating = false;
  });

  document.addEventListener('mousemove', (e) => {
    if (isRotating) {
      rotateX -= e.movementY * 0.5;
      rotateY += e.movementX * 0.5;
      rotatableObject.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  });

 