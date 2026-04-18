const canvas = document.getElementById("tech-bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let symbols = [];

const chars = "<>{}()[]/\\|console.log();HTMLCSSJAVA";

for (let i = 0; i < 80; i++) {
  symbols.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    speed: 0.5 + Math.random() * 1.5,
    char: chars[Math.floor(Math.random() * chars.length)],
  });
}

function draw() {
  ctx.fillStyle = "rgba(11,15,26,0.15)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0ff";
  ctx.font = "16px monospace";

  symbols.forEach((s) => {
    ctx.fillText(s.char, s.x, s.y);
    s.y += s.speed;

    if (s.y > canvas.height) {
      s.y = 0;
      s.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(draw);
}

draw();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
