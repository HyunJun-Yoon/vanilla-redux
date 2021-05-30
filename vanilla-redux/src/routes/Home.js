import React, { useState } from 'react';
import { connect } from 'react-redux';

function Home({ props, toDos }) {
  console.log(props);
  const [text, setText] = useState('');
  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log(text);
    setText('');
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type='text' value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>{toDos}</ul>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  console.log(state, ownProps);
  return { toDos: state };
}

export default connect(mapStateToProps)(Home);
