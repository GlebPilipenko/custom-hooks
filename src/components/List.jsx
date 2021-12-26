import {useRef, useState} from 'react';
import {useScroll} from '../hooks/useScroll';

const LIMIT = 20;

export const List = () => {
  // https://developer.mozilla.org/ru/docs/Web/API/Intersection_Observer_API

  const childRef = useRef();
  const parentRef = useRef();
  const [page, setPage] = useState(1);
  const [todos, setTodos] = useState([]);
  const intersected = useScroll(parentRef, childRef, () => fetchData(LIMIT, page));

  function fetchData(limit, page) {
    fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
      .then(response => response.json())
      .then(json => {
        setTodos(prevState => [...prevState, ...json]);
        setPage(prev => prev + 1);
      });
  }

  return (
    <div ref={parentRef} style={{height: '80vh', overflow: 'auto'}}>
      {todos.map(todo => {
        return (
          <div
            key={todo.id}
            style={{padding: 30, border: '2px solid black'}}
          >
            {todo.id} - {todo.title}
          </div>
        );
      })}
      <div ref={childRef} style={{height: 20, background: 'green'}} />
    </div>
  );
};