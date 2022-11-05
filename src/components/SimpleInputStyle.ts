import styled from 'styled-components';

export const SimpleInputControlDiv = styled.div`
  margin-bottom: 1rem;
`;

export const SimpleInputLabel = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const SimpleInputInput = styled.input`
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

export const SimpleInputActionsDiv = styled.div`
  text-align: right;
`;

export const SimpleInputButton = styled.button`
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
`;
