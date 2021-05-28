import { createStore } from 'redux';

const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const number = document.querySelector('span');

number.innerText = 0;

const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case SUBTRACT:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleSubtract = () => {
  countStore.dispatch({ type: SUBTRACT });
};

add.addEventListener('click', handleAdd);

subtract.addEventListener('click', handleSubtract);

console.log(countStore.getState());
