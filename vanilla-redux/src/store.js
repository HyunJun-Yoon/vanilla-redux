import { createStore } from 'redux';
import {
  configureStore,
  createAction,
  createReducer,
  createSlice
} from '@reduxjs/toolkit';

// -- with createSlice() --

const toDos = createSlice({
  name: 'toDosReducer',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => state.filter(toDo => toDo.id !== action.payload)
  }
});

const store = configureStore({ reducer: toDos.reducer });

export const { add, remove } = toDos.actions;

export default store;

// -- with toolkit --

// const addToDo = createAction('ADD');
// const deleteToDo = createAction('DELETE');

// const reducer = createReducer([], {
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() });
//   },
//   [deleteToDo]: (state, action) =>
//     state.filter(toDo => toDo.id !== action.payload)
// });

//const store = configureStore({ reducer });

// export const actionCreators = {
//   addToDo,
//   deleteToDo
// };

// -- without toolkit --

// const ADD = 'ADD';
// const DELETE = 'DELETE';

// const addToDo = text => {
//   return {
//     type: ADD,
//     text
//   };
// };

// const deleteToDo = id => {
//   return {
//     type: DELETE,
//     id: parseInt(id)
//   };
// };

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD:
//       return [{ text: action.text, id: Date.now() }, ...state];
//     case DELETE:
//       return state.filter(toDo => toDo.id !== action.id);
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);
