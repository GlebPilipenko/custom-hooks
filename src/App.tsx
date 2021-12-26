import React from 'react';
import {List} from './components/List';
import {Hover} from './components/Hover';
import {Debounce} from './components/Debounce';

function App() {
  return (
    <>
      <List />
      <Hover />
      <Debounce />
    </>
  );
}

export default App;
