import styled from 'styled-components';

export const BasicFormDiv = styled.div`
  display: flex;
  column-gap: 1rem;
  flex-wrap: wrap;
`;

interface BasicFormControlDivProps {
  className: string;
}

export const BasicFormControlDiv = styled.div<BasicFormControlDivProps>`
  margin-bottom: 1rem;
  min-width: 15rem;
  flex: 1;

  &.invalid input {
    border: 1px solid #b40e0e;
    background-color: #fddddd;
  }

  &.invalid input:focus {
    border-color: #ff8800;
    background-color: #fbe8d2;
  }
`;

export const BasicFormLabel = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const BasicFormInput = styled.input`
  display: block;
  font: inherit;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 20rem;
  max-width: 100%;

  &:focus {
    outline: none;
    border-color: #240370;
    background-color: #e0d4fd;
  }
`;

export const BasicFormErrorTextP = styled.p`
  color: #b40e0e;
`;

export const BasicFormActionsDiv = styled.div`
  text-align: right;
`;

export const BasicFormButton = styled.button`
  font: inherit;
  background-color: #240370;
  color: white;
  border: 1px solid #240370;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 1rem;

  &:hover,
  &:active {
    background-color: #33059e;
    border-color: #33059e;
  }

  &:disabled,
  &:disabled:hover,
  &:disabled:active {
    background-color: #ccc;
    color: #292929;
    border-color: #ccc;
    cursor: not-allowed;
  }
`;
