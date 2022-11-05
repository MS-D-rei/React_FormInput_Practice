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
  SimpleInputInput,
  SimpleInputLabel,
} from '@/components/SimpleInputStyle';
import React, { useRef, useState } from 'react';

function SimpleInput() {
  const [enteredName, setEnteredName] = useState('');
  const nameInputRef = useRef<HTMLInputElement>(null);

  const nameInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredName(event.target.value);
  };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`State: ${enteredName}`);
    console.log(`Ref: ${nameInputRef.current?.value}`)
    setEnteredName('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <SimpleInputControlDiv>
        <SimpleInputLabel htmlFor="name">Your name</SimpleInputLabel>
        <SimpleInputInput
          ref={nameInputRef}
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
        />
      </SimpleInputControlDiv>
      <SimpleInputActionsDiv>
        <SimpleInputButton>Submit</SimpleInputButton>
      </SimpleInputActionsDiv>
    </form>
  );
}

export default SimpleInput;
