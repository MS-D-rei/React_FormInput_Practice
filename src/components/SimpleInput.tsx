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
import React, { useRef, useState } from 'react';

function SimpleInput() {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const [enteredName, setEnteredName] = useState('');
  const [isValidEnteredName, setIsValidEnteredName] = useState(false);

  const nameInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredName(event.target.value);
  };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`State: ${enteredName}`);
    console.log(`Ref: ${nameInputRef.current?.value}`);
    if (enteredName.trim() === '') {
      setIsValidEnteredName(false);
      return;
    }

    setIsValidEnteredName(true);
  };

  const controlDivClassName = isValidEnteredName ? '' : 'invalid';

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
        />
        {!isValidEnteredName && (
          <SimpleInputErrorTextP>Name must not be empty.</SimpleInputErrorTextP>
        )}
      </SimpleInputControlDiv>
      <SimpleInputActionsDiv>
        <SimpleInputButton>Submit</SimpleInputButton>
      </SimpleInputActionsDiv>
    </form>
  );
}

export default SimpleInput;
