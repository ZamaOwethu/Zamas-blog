const text = "Life Before HTML & Java";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typed").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  } else {
    document.getElementById("subtitle").classList.add("show");

    setTimeout(() => {
      document.querySelector(".story").classList.add("show");
    }, 600);
  }
}

window.onload = typeWriter;

document.addEventListener("DOMContentLoaded", () => {
  const bug = document.querySelector(".bug-text");

  bug.addEventListener("mouseenter", () => {
    bug.classList.add("glitch");
  });

  bug.addEventListener("mouseleave", () => {
    bug.classList.remove("glitch");
  });
});
