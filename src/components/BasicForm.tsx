import {
  BasicFormActionsDiv,
  BasicFormButton,
  BasicFormControlDiv,
  BasicFormDiv,
  BasicFormInput,
  BasicFormLabel,
} from '@/components/BasicFormStyle';
import { useBasicFormInput } from '@/hooks/use-basicform-input';

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
  return (
    <form>
      <BasicFormDiv>
        <BasicFormControlDiv>
          <BasicFormLabel htmlFor="first-name">First Name</BasicFormLabel>
          <BasicFormInput
            type="text"
            id="first-name"
            value={enteredFirstName}
            onChange={firstNameInputChangeHandler}
            onBlur={firstNameInputBlurHander}
          />
        </BasicFormControlDiv>
        <BasicFormControlDiv>
          <BasicFormLabel htmlFor="last-name">Last Name</BasicFormLabel>
          <BasicFormInput
            type="text"
            id="last-name"
            value={enteredLastName}
            onChange={lastNameInputChangeHandler}
            onBlur={lastNameInputBlurHander}
          />
        </BasicFormControlDiv>
        <BasicFormControlDiv>
          <BasicFormLabel htmlFor="email">E-mail Addresss</BasicFormLabel>
          <BasicFormInput
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailInputChangeHandler}
            onBlur={emailInputBlurHandler}
          />
        </BasicFormControlDiv>
      </BasicFormDiv>
      <BasicFormActionsDiv>
        <BasicFormButton>Submit</BasicFormButton>
      </BasicFormActionsDiv>
    </form>
  );
}

export default BasicForm;
