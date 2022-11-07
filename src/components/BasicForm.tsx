import {
  BasicFormActionsDiv,
  BasicFormButton,
  BasicFormControlDiv,
  BasicFormDiv,
  BasicFormErrorTextP,
  BasicFormInput,
  BasicFormLabel,
} from '@/components/BasicFormStyle';
import { useBasicFormInput } from '@/hooks/use-basicform-input';
import React from 'react';

function BasicForm() {
  const {
    enteredValue: enteredFirstName,
    isTouched: isTouchedFirstName,
    isValidValue: isValidFirstName,
    valueInputChangeHandler: firstNameInputChangeHandler,
    valueInputBlurHandler: firstNameInputBlurHander,
  } = useBasicFormInput({ type: 'name' });
  const {
    enteredValue: enteredLastName,
    isTouched: isTouchedLastName,
    isValidValue: isValidLastName,
    valueInputChangeHandler: lastNameInputChangeHandler,
    valueInputBlurHandler: lastNameInputBlurHander,
  } = useBasicFormInput({ type: 'name' });
  const {
    enteredValue: enteredEmail,
    isTouched: isTouchedEmail,
    isValidValue: isValidEmail,
    valueInputChangeHandler: emailInputChangeHandler,
    valueInputBlurHandler: emailInputBlurHandler,
  } = useBasicFormInput({ type: 'email' });

  // Form validation
  let isValidForm = false;
  if (isValidFirstName && isValidLastName && isValidEmail) {
    isValidForm = true;
  } else {
    isValidForm = false;
  }

  // Each className for ControlDiv
  const firstNameControlDivClassName =
    !isValidFirstName && isTouchedFirstName ? 'invalid' : '';
  const lastNameControlDivClassName =
    !isValidLastName && isTouchedLastName ? 'invalid' : '';
  const emailControlDivClassName =
    !isValidEmail && isTouchedEmail ? 'invalid' : '';

  // Each error message
  const firstNameInputErrorMessage = !isValidFirstName &&
    isTouchedFirstName && (
      <BasicFormErrorTextP>Please enter your first name.</BasicFormErrorTextP>
    );
  const lastNameInputErrorMessage = !isValidLastName && isTouchedLastName && (
    <BasicFormErrorTextP>Please enter your last name.</BasicFormErrorTextP>
  );
  const emailInputErrorMessage = !isValidEmail && isTouchedEmail && (
    <BasicFormErrorTextP>Please enter valid email</BasicFormErrorTextP>
  );

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted successfully');
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <BasicFormDiv>
        <BasicFormControlDiv className={firstNameControlDivClassName}>
          <BasicFormLabel htmlFor="first-name">First Name</BasicFormLabel>
          <BasicFormInput
            type="text"
            id="first-name"
            value={enteredFirstName}
            onChange={firstNameInputChangeHandler}
            onBlur={firstNameInputBlurHander}
          />
          {firstNameInputErrorMessage}
        </BasicFormControlDiv>
        <BasicFormControlDiv className={lastNameControlDivClassName}>
          <BasicFormLabel htmlFor="last-name">Last Name</BasicFormLabel>
          <BasicFormInput
            type="text"
            id="last-name"
            value={enteredLastName}
            onChange={lastNameInputChangeHandler}
            onBlur={lastNameInputBlurHander}
          />
          {lastNameInputErrorMessage}
        </BasicFormControlDiv>
        <BasicFormControlDiv className={emailControlDivClassName}>
          <BasicFormLabel htmlFor="email">E-mail Addresss</BasicFormLabel>
          <BasicFormInput
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailInputChangeHandler}
            onBlur={emailInputBlurHandler}
          />
          {emailInputErrorMessage}
        </BasicFormControlDiv>
      </BasicFormDiv>
      <BasicFormActionsDiv>
        <BasicFormButton disabled={!isValidForm}>Submit</BasicFormButton>
      </BasicFormActionsDiv>
    </form>
  );
}

export default BasicForm;
