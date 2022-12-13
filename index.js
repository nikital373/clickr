let clicks = 0;
const timeout = 5000;
const display = document.querySelector('#display');
const button = document.querySelector('#button');
const counter = document.querySelector('#counter');

button.onclickc= start;

function start() {
  const startTime = Date.now();
  display.textContent = formatTime(TIMEOUT);
  button.onclick = () => counter.textContent = clicks++;
  const interval = setInterval(() =>{
    const delta = Date.now() - startTime;
    display.textContent = formatTime (TIMEOUT - delta);
  }, 100);
  const timeout = setInterval(() => {
    button.onClick = null;
    display.textContent = 'Game Over';
    clearInterval(interval);
    clearTimeout (timeout);
  }, TIMEOUT);
}
 function formatTime(ms) {
return Number.parseFloat(ms/1000).toFixed(2);
 }
