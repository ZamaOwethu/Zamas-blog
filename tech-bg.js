const text = "Life Before HTML & Java";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typed").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  } else {
    document.getElementById("subtitle").classList.remove("hidden");
  }
}

window.onload = typeWriter;
