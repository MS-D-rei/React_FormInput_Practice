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
  // const [isValidEnteredName, setIsValidEnteredName] = useState(false);
  const [isTouchedEnteredName, setIsTouchedEnteredName] = useState(false);
  // const [isValidForm, setIsValidForm] = useState(false);

  /* isValidEnteredName is derived from enteredName. When enteredName state is changed,
  isValidEnteredName is also re-evaluated */
  const isValidEnteredName = enteredName.trim().length !== 0;

  // useEffect(() => {
  //   if (isValidEnteredName) {
  //     setIsValidForm(true);
  //   } else {
  //     setIsValidForm(false);
  //   }
  // }, [isValidEnteredName]);

  /* isValidForm is derived from isValidEnteredName, there is no advantage from useEffect */
  let isValidForm = false;
  if (isValidEnteredName) {
    isValidForm = true;
  }

  const nameInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = () => {
    setIsTouchedEnteredName(true);
  };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`State: ${enteredName}`);
    console.log(`Ref: ${nameInputRef.current?.value}`);
    setIsTouchedEnteredName(true);
  };

  const controlDivClassName =
    !isValidEnteredName && isTouchedEnteredName ? 'invalid' : '';

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
        <SimpleInputButton disabled={!isValidForm}>Submit</SimpleInputButton>
      </SimpleInputActionsDiv>
    </form>
  );
}

export default SimpleInput;
