import React, { useState } from 'react';

interface UseInputProps {
  type: 'name' | 'email';
}

export function useInput({ type }: UseInputProps) {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  let isValidValue = false;

  if (type === 'name') {
    isValidValue = enteredValue.trim().length !== 0;
  }
  const emailRegEx =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  if (type === 'email') {
    isValidValue = !!enteredValue.trim().match(emailRegEx);
  }

  const valueInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredValue(event.target.value);
  };

  const valueInputBlurHandler = () => {
    setIsTouched(true);
  };

  return {
    enteredValue,
    setIsTouched,
    isTouched,
    isValidValue,
    valueInputChangeHandler,
    valueInputBlurHandler,
  };
}
