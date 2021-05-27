import { createStore } from 'redux';

const countModifier = (count = 0, action) => {
  if (action.type === 'ADD') {
    return ++count;
  } else if (action.type === 'SUBTRACT') {
    return --count;
  } else {
    return count;
  }
};

const countStore = createStore(countModifier);

countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'SUBTRACT' });
countStore.dispatch({ type: 'SUBTRACT' });

console.log(countStore.getState());

// const add = document.getElementById('add');
// const subtract = document.getElementById('subtract');
// const number = document.querySelector('span');

// let count = 0;

// number.innerText = count;

// const updateText = () => {
//   number.innerText = count;
// };

// const handleAdd = () => {
//   count++;
//   updateText();
// };

// const handleSubtract = () => {
//   count--;
//   updateText();
// };

// add.addEventListener('click', handleAdd);
// subtract.addEventListener('click', handleSubtract);
