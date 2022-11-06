/* 
  Validation Timing
  1. When submitting the form => useRef might be better
  2. When onBlur or every keystroke => useState is better

  nameInputRef.current.value = ''; => manipulating DOM directly is NOT ideal.
*/

import React from 'react';
import {
  SimpleInputActionsDiv,
  SimpleInputButton,
  SimpleInputControlDiv,
  SimpleInputErrorTextP,
  SimpleInputInput,
  SimpleInputLabel,
} from '@/components/SimpleInputStyle';
import { useInput } from '@/hooks/use-input';

function SimpleInput() {
  /* every useInput creates its state relatively, when the state changes, useInput func is executed. */
  const {
    enteredValue: enteredName,
    isTouched: isTouchedName,
    setIsTouched: setIsTouchedName,
    isValidValue: isValidName,
    valueInputChangeHandler: nameInputChangeHandler,
    valueInputBlurHandler: nameInputBlurHandler,
  } = useInput({ type: 'name' });
  const {
    enteredValue: enteredEmail,
    isTouched: isTouchedEmail,
    setIsTouched: setIsTouchedEmail,
    isValidValue: isValidEmail,
    valueInputChangeHandler: emailInputChangeHandler,
    valueInputBlurHandler: emailInputBlurHandler,
  } = useInput({ type: 'email' });

  /* Move to use-input.tsx */
  // const [enteredName, setEnteredName] = useState('');
  // const [isValidEnteredName, setIsValidEnteredName] = useState(false);
  // const [isTouchedEnteredName, setIsTouchedEnteredName] = useState(false);
  // const [isValidForm, setIsValidForm] = useState(false);
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [isTouchedEnteredEmail, setIsTouchedEnteredEmail] = useState(false);

  /* isValidEnteredName is derived from enteredName. When enteredName state is changed,
  isValidEnteredName is also re-evaluated */
  // const isValidEnteredName = enteredName.trim().length !== 0;

  /* isValidForm is derived from isValidEnteredName, there is no advantage from useEffect */
  let isValidForm = false;
  if (isValidName && isValidEmail) {
    isValidForm = true;
  }

  /* All these Handler move to use-input.tsx */
  // const nameInputChangeHandler = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   setEnteredName(event.target.value);
  // };
  // const nameInputBlurHandler = () => {
  //   setIsTouchedEnteredName(true);
  // };
  // const emailInputChangeHandler = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   setEnteredEmail(event.target.value);
  // };
  // const emailInputBlurHandler = () => {
  //   setIsTouchedEnteredEmail(true);
  // };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`State: ${enteredName}`);
    setIsTouchedName(true);
    setIsTouchedEmail(true);
  };

  const nameControlDivClassName =
    !isValidName && isTouchedName ? 'invalid' : '';

  const emailControlDivClassName =
    !isValidEmail && isTouchedEmail ? 'invalid' : '';

  const nameValidationErrorMessage = !isValidName && isTouchedName && (
    <SimpleInputErrorTextP>Name must not be empty.</SimpleInputErrorTextP>
  );

  const emailValidationErrorMessage = !isValidEmail && isTouchedEmail && (
    <SimpleInputErrorTextP>Please enter valid email.</SimpleInputErrorTextP>
  );

  return (
    <form onSubmit={formSubmitHandler}>
      <SimpleInputControlDiv className={nameControlDivClassName}>
        <SimpleInputLabel htmlFor="name">Your name</SimpleInputLabel>
        <SimpleInputInput
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
