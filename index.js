// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function useForloop(arr, subFnc) {
  return arr.forEach(subFnc);
}

const wtItReturn = useForloop([1, 2, 3, 4, 5], (itm, index, arr) => {
  console.log(`value at ${index} : ${itm} of array ${arr}`);
  return itm;
});

console.log(wtItReturn);
