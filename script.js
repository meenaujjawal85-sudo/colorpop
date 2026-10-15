const colorButton = document.getElementById('colorButton');
const colorPreview = document.getElementById('colorPreview');
const colors = [
  { background: '#e8e2ff', color: '#3b2b7a', label: 'LAVENDER MODE' },
  { background: '#d9f5e7', color: '#205d43', label: 'MINT MODE' },
  { background: '#ffe3d9', color: '#8b402b', label: 'PEACH MODE' },
  { background: '#fff1b8', color: '#725613', label: 'SUNSHINE MODE' },
  { background: '#dceeff', color: '#23517c', label: 'SKY MODE' }
];
let colorIndex = 0;

colorButton.addEventListener('click', () => {
  colorIndex = (colorIndex + 1) % colors.length;
  const selected = colors[colorIndex];
  colorPreview.style.backgroundColor = selected.background;
  colorPreview.style.color = selected.color;
  colorPreview.querySelector('span').innerHTML = selected.label.replace(' ', '<br>');
});

const greetButton = document.getElementById('greetButton');
greetButton.addEventListener('click', () => {
  const now = new Date();
  const hour = now.getHours();
  let greeting, icon;
  if (hour < 12) { greeting = 'Good morning!'; icon = '☀'; }
  else if (hour < 17) { greeting = 'Good afternoon!'; icon = '🌤'; }
  else if (hour < 21) { greeting = 'Good evening!'; icon = '🌇'; }
  else { greeting = 'Good night!'; icon = '🌙'; }
  document.getElementById('greetingText').textContent = greeting;
  document.getElementById('greetingIcon').textContent = icon;
  document.getElementById('timeText').textContent = 'Your local time: ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
});

document.getElementById('calculatorForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const first = Number(document.getElementById('numOne').value);
  const second = Number(document.getElementById('numTwo').value);
  const sum = first + second;
  document.getElementById('result').textContent = 'Result: ' + sum;
});
