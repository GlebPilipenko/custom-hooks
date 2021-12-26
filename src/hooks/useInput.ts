import {ChangeEvent, useState} from 'react';

export const useInput = (searchCallback: any) => {
  const [value, setValue] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const currentValue = event.currentTarget.value;

    setValue(currentValue);
    searchCallback(currentValue);
  };

  return {value, onChange};
};