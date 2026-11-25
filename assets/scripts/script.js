function initPage() {
const canvas = document.getElementById("canvas");
renderCanvas(canvas, TIME.now());

  TIME.on("second", (t) => {});
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

  fillSquare(ctx, 40, 100, 20, "blue");
  fillCircle(ctx, 200, 300, 50, "pink");
  fillTriangle(ctx, 500, 200, 50, "green");
}

