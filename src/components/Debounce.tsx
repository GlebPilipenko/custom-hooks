import {useInput} from '../hooks/useInput';
import {useDebounce} from '../hooks/useDebounce';

export const Debounce = () => {
  const debouncedCallback = useDebounce(search, 500);

  const {value, onChange} = useInput(debouncedCallback);

  function search(query: string) {
    fetch(`https://jsonplaceholder.typicode.com/todos?query=${query}`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
      });
  }

  return <input type="text" value={value} onChange={onChange} />;
};