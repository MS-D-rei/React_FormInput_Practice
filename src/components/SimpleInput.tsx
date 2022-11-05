import {
  SimpleInputActionsDiv,
  SimpleInputButton,
  SimpleInputControlDiv,
  SimpleInputInput,
  SimpleInputLabel,
} from '@/components/SimpleInputStyle';

function SimpleInput() {
  return (
    <form>
      <SimpleInputControlDiv>
        <SimpleInputLabel htmlFor="name">Your name</SimpleInputLabel>
        <SimpleInputInput type="text" id="name" />
      </SimpleInputControlDiv>
      <SimpleInputActionsDiv>
        <SimpleInputButton>Submit</SimpleInputButton>
      </SimpleInputActionsDiv>
    </form>
  );
}

export default SimpleInput;
