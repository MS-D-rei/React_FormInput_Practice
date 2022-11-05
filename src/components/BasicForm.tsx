import {
  BasicFormActionsDiv,
  BasicFormButton,
  BasicFormControlDiv,
  BasicFormDiv,
  BasicFormInput,
  BasicFormLabel,
} from '@/components/BasicFormStyle';

function BasicForm() {
  return (
    <form>
      <BasicFormDiv>
        <BasicFormControlDiv>
          <BasicFormLabel htmlFor="first-name">First Name</BasicFormLabel>
          <BasicFormInput type="text" id="first-name" />
        </BasicFormControlDiv>
        <BasicFormControlDiv>
          <BasicFormLabel htmlFor="last-name">Last Name</BasicFormLabel>
          <BasicFormInput type="text" id="last-name" />
        </BasicFormControlDiv>
        <BasicFormControlDiv>
          <BasicFormLabel htmlFor="email">E-mail Addresss</BasicFormLabel>
          <BasicFormInput type="text" id="email" />
        </BasicFormControlDiv>
      </BasicFormDiv>
      <BasicFormActionsDiv>
        <BasicFormButton>Submit</BasicFormButton>
      </BasicFormActionsDiv>
    </form>
  );
}

export default BasicForm;
