const body = document.querySelector("body");
const button = body.querySelector("button");
// const numColors = 8;
// const numTiming = 5;
// const numTops = 3;
// const earningRate = 3605;
// const numberFormatter = new Intl.NumberFormat('en', { style: 'currency', currency: 'USD', maximumFractionDigits: 0, minimumFractionDigits: 0 });
// let amount = 0;


// For theme (dark/light mode)
button.addEventListener('click', () => {
  body.classList.toggle("light-mode");
});
