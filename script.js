const container = document.getElementById("heartContainer");

for (let t = 0; t < Math.PI * 2; t += 0.1) {
  const x = 16 * Math.pow(Math.sin(t), 3);
  const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));

  const heart = document.createElement("heart");
  heart.style.left = `${window.innerWidth / 2 + x * 10}px`;
  heart.style.top = `${200 + y * 10}px`;
  container.appendChild(heart);
}
