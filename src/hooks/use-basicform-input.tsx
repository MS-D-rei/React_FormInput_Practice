import React, { useReducer, useState } from 'react';

enum ReducerBasicFormActionTypes {
  USER_INPUT = 'USER_INPUT',
  INPUT_BLUR = 'INPUT_BLUR',
}

interface ReducerBasicFormInputState {
  value: string;
  isTouched: boolean;
}

interface ReducerBasicFormAction {
  type: ReducerBasicFormActionTypes;
  payload: string | boolean;
}

const emailRegExp =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const ReducerBasicForm = (
  state: ReducerBasicFormInputState,
  action: ReducerBasicFormAction
): ReducerBasicFormInputState => {
  switch (action.type) {
    case ReducerBasicFormActionTypes.USER_INPUT:
      if (typeof action.payload === 'string') {
        return {
          value: action.payload,
          isTouched: state.isTouched,
        };
      }
    case ReducerBasicFormActionTypes.INPUT_BLUR:
      if (typeof action.payload === 'boolean') {
        return {
          value: state.value,
          isTouched: action.payload,
        };
      }
    default:
      return {
        value: '',
        isTouched: false,
      };
  }
};

const ReducerInitialState: ReducerBasicFormInputState = {
  value: '',
  isTouched: false,
};

interface UseBasicFormInputProps {
  type: 'name' | 'email';
}

export function useBasicFormInput({ type }: UseBasicFormInputProps) {
  // const [enteredValue, setEnteredValue] = useState('');
  // const [isTouched, setIsTouched] = useState(false);
  // let isValidValue = false;

  // if (type === 'name') {
  //   isValidValue = enteredValue.trim().length !== 0;
  // }
  // const emailRegExp =
  //   /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  // if (type === 'email') {
  //   isValidValue = !!enteredValue.trim().match(emailRegExp);
  // }

  // const valueInputChangeHandler = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   setEnteredValue(event.target.value);
  // };

  // const valueInputBlurHandler = () => {
  //   setIsTouched(true);
  // };

  // return {
  //   enteredValue,
  //   isTouched,
  //   isValidValue,
  //   valueInputChangeHandler,
  //   valueInputBlurHandler,
  // };

  const [valueState, dispatch] = useReducer(
    ReducerBasicForm,
    ReducerInitialState
  );
  let isValidValue = false;

  if (type === 'name') {
    isValidValue = valueState.value.trim().length !== 0;
  }
  if (type === 'email') {
    isValidValue = !!valueState.value.trim().match(emailRegExp);
  }

  const valueInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch({
      type: ReducerBasicFormActionTypes.USER_INPUT,
      payload: event.target.value,
    });
  };

  const valueInputBlurHandler = () => {
    dispatch({ type: ReducerBasicFormActionTypes.INPUT_BLUR, payload: true });
  };

  return {
    enteredValue: valueState.value,
    isTouched: valueState.isTouched,
    isValidValue,
    valueInputChangeHandler,
    valueInputBlurHandler,
  };
}
