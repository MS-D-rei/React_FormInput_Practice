## Custom hook state management

```
// SimpleInput.tsx
const [enteredName, setEnteredName] = useState('');
const [isTouchedName, setIsTouchedName] = useState(false);
const [enteredEmail, setEnteredEmail] = useState('');
const [isTouchedEmail, setIsTouchedEmail] = useState(false);
const isValidName = enteredName.trim().length !== 0;
const isValidEmail = !!enteredEmail.trim().match(emailRegEx);
const nameInputChangeHander = () => {};
const nameInputBlurHandler = () => {};
const emailInputChangeHandler = () => {};
const emailInputBlurHandler = () => {};
```

Use custom hook (use-input.tsx)

```
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
```
