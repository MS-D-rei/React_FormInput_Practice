/* 
  Validation Timing
  1. When submitting the form => useRef might be better
  2. When onBlur or every keystroke => useState is better

  nameInputRef.current.value = ''; => manipulating DOM directly is NOT ideal.
*/

import {
  SimpleInputActionsDiv,
  SimpleInputButton,
  SimpleInputControlDiv,
  SimpleInputErrorTextP,
  SimpleInputInput,
  SimpleInputLabel,
} from '@/components/SimpleInputStyle';
import React, { useEffect, useRef, useState } from 'react';

function SimpleInput() {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const [enteredName, setEnteredName] = useState('');
  const [isValidEnteredName, setIsValidEnteredName] = useState(false);
  const [isTouchedEnteredName, setIsTouchedEnteredName] = useState(false);

  useEffect(() => {
    if (isValidEnteredName) {
      console.log('name is valid');
    }
  }, [isValidEnteredName]);

  const nameInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = () => {
    setIsTouchedEnteredName(true);
    if (enteredName.trim().length === 0) {
      setIsValidEnteredName(false);
      return;
    }
  };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`State: ${enteredName}`);
    console.log(`Ref: ${nameInputRef.current?.value}`);

    setIsTouchedEnteredName(true);

    if (enteredName.trim() === '') {
      setIsValidEnteredName(false);
      return;
    }

    setIsValidEnteredName(true);
  };

  const controlDivClassName = !isValidEnteredName && isTouchedEnteredName ? 'invalid' : '';

  const nameValidationErrorMessage = !isValidEnteredName &&
    isTouchedEnteredName && (
      <SimpleInputErrorTextP>Name must not be empty.</SimpleInputErrorTextP>
    );

  return (
    <form onSubmit={formSubmitHandler}>
      <SimpleInputControlDiv className={controlDivClassName}>
        <SimpleInputLabel htmlFor="name">Your name</SimpleInputLabel>
        <SimpleInputInput
          ref={nameInputRef}
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameValidationErrorMessage}
      </SimpleInputControlDiv>
      <SimpleInputActionsDiv>
        <SimpleInputButton>Submit</SimpleInputButton>
      </SimpleInputActionsDiv>
    </form>
  );
}

export default SimpleInput;
