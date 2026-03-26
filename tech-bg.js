const canvas = document.getElementById('tech-bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let nodes = [];
const nodeCount = 50;

for (let i = 0; i < nodeCount; i++) {
  nodes.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    radius: Math.random() * 2 + 1
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  nodes.forEach(node => {
    node.x += node.vx;
    node.y += node.vy;

    if(node.x < 0 || node.x > canvas.width) node.vx *= -1;
    if(node.y < 0 || node.y > canvas.height) node.vy *= -1;

    ctx.beginPath();
    ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0,255,255,0.7)';
    ctx.fill();
  });

  for(let i = 0; i < nodes.length; i++){
    for(let j = i + 1; j < nodes.length; j++){
      let dx = nodes[i].x - nodes[j].x;
      let dy = nodes[i].y - nodes[j].y;
      let dist = Math.sqrt(dx*dx + dy*dy);
      if(dist < 150){
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(0,255,255,' + (1 - dist/150) + ')';
        ctx.lineWidth = 0.8;
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
