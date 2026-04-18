const canvas = document.getElementById("tech-bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const symbols = ["</>", "{}", "()", "01", "HTML", "CSS", "JS", "API"];

let particles = [];

for (let i = 0; i < 35; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    speed: 0.2 + Math.random() * 0.4,
    size: 16 + Math.random() * 12,
    text: symbols[Math.floor(Math.random() * symbols.length)],
    opacity: 0.08 + Math.random() * 0.18
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    ctx.font = `${p.size}px monospace`;

    ctx.fillStyle = `rgba(255, 105, 180, ${p.opacity})`;
    ctx.shadowColor = "rgba(255,105,180,0.4)";
    ctx.shadowBlur = 6;

    ctx.fillText(p.text, p.x, p.y);

    ctx.shadowBlur = 0;

    p.y -= p.speed;

    if (p.y < -20) {
      p.y = canvas.height + 20;
      p.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(draw);
}

draw();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
