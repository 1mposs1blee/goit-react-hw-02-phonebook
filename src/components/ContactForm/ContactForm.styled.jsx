import styled from '@emotion/styled';

export const Form = styled.form`
  padding: 10px;
  margin-bottom: 10px;

  width: 400px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  border: 2px solid black;
  border-radius: 5px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Input = styled.input`
  width: 300px;
`;

export const Button = styled.button`
  padding: 2px;

  width: 90px;

  border: 1px solid black;
  border-radius: 5px;

  background-color: silver;

  &:hover,
  &:focus {
    cursor: pointer;
  }

  &:active {
    transform: translateY(2px);
  }
`;
