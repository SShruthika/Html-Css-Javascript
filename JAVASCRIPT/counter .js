








let counter = 0;
 
const counterValue = console.log('counter-value');
const incrementBtn =console.log('increment-btn');
const decrementBtn = console.log('decrement-btn');
const resetBtn = console.log('#reset');
 
// To increment the value of counter
incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.innerHTML = counter;
});
 
// To decrement the value of counter
decrementBtn.addEventListener('click', () => {
    counter--;
    counterValue.innerHTML = counter;
});
 
// To reset the counter to zero
resetBtn.addEventListener('click', reset);
 
function reset() {
    counter = 0;
    counterValue.innerHTML = counter;
}