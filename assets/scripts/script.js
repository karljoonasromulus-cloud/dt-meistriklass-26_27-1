function initPage() {
const canvas = document.getElementById("canvas");
renderCanvas(canvas, TIME.now());

  TIME.on("second", (t) => {
    renderCanvas(canvas, t);
  });
}

document.addEventListener("DOMContentLoaded", initPage);

function fillSquare(ctx, x, y, size, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, size, size);
}

function fillCircle(ctx, x, y, size, color) {
  const radius = size / 2;

  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
}

function fillTriangle(ctx, x, y, size, color) {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.moveTo(x + size / 2, y);
  ctx.lineTo(x + size, y + size);
  ctx.lineTo(x, y + size);
  ctx.fill();
}

function renderCanvas(canvas, time) {
  if (!canvas) return
  const ctx = canvas.getContext("2d");
  const { width, height } = canvas;

  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, width, height);
  

  function getRandomCoordinates(size) {
   const x = Math.floor(Math.random() * (width - size));
   const y = Math.floor(Math.random() * (height - size));

   return { x, y };
  }

  function renderSeconds(seconds) {
    const size = 10;
    const color = "blue";

    for (let i = 0; i < seconds; i++) {
      const { x, y } = getRandomCoordinates(size);

      fillSquare(ctx, x, y, size, color);
    }
  }
  
  function renderMinutes(minute) {
    const size = 20;
    const color = "green";

    for (let i = 0; i < minute; i++) {
      const { x, y } = getRandomCoordinates(size);

      fillCircle(ctx, x, y, size, color);
    }
  }

  function renderHours(hour) {
    const size = 40;
    const color = "yellow";

    for (let i = 0; i < hour; i++) {
      const { x, y } = getRandomCoordinates(size);

      fillTriangle(ctx, x, y, size, color);
    }
  }

  renderSeconds(time.second);
  renderMinutes(time.minute);
  renderHours(time.hour);

}