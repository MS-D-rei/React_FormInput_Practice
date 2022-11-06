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
  const [enteredEmail, setEnteredEmail] = useState('');
  const [isTouchedEnteredEmail, setIsTouchedEnteredEmail] = useState(false);

  /* isValidEnteredName is derived from enteredName. When enteredName state is changed,
  isValidEnteredName is also re-evaluated */
  const isValidEnteredName = enteredName.trim().length !== 0;

  const emailRegEx =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  const isValidEnteredEmail = enteredEmail.trim().match(emailRegEx);

  // useEffect(() => {
  //   if (isValidEnteredName) {
  //     setIsValidForm(true);
  //   } else {
  //     setIsValidForm(false);
  //   }
  // }, [isValidEnteredName]);

  /* isValidForm is derived from isValidEnteredName, there is no advantage from useEffect */
  let isValidForm = false;
  if (isValidEnteredName && isValidEnteredEmail) {
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

  const emailInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = () => {
    setIsTouchedEnteredEmail(true);
  };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`State: ${enteredName}`);
    console.log(`Ref: ${nameInputRef.current?.value}`);
    setIsTouchedEnteredName(true);
  };

  const nameControlDivClassName =
    !isValidEnteredName && isTouchedEnteredName ? 'invalid' : '';

  const emailControlDivClassName = !isValidEnteredEmail && isTouchedEnteredEmail ? 'invalid' : '';

  const nameValidationErrorMessage = !isValidEnteredName &&
    isTouchedEnteredName && (
      <SimpleInputErrorTextP>Name must not be empty.</SimpleInputErrorTextP>
    );

  const emailValidationErrorMessage = !isValidEnteredEmail &&
    isTouchedEnteredEmail && (
      <SimpleInputErrorTextP>Please enter valid email.</SimpleInputErrorTextP>
    );

  return (
    <form onSubmit={formSubmitHandler}>
      <SimpleInputControlDiv className={nameControlDivClassName}>
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
      <SimpleInputControlDiv className={emailControlDivClassName}>
        <SimpleInputLabel htmlFor="email">E-mail Address</SimpleInputLabel>
        <SimpleInputInput
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailValidationErrorMessage}
      </SimpleInputControlDiv>
      <SimpleInputActionsDiv>
        <SimpleInputButton disabled={!isValidForm}>Submit</SimpleInputButton>
      </SimpleInputActionsDiv>
    </form>
  );
}

export default SimpleInput;
