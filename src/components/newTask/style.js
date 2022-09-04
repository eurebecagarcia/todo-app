import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 450px;
  border: ${({ isError }) => (isError ? "2px solid red" : "1px solid #cecece")};
  border-radius: 5px;
  margin-top: 45px;
`;

export const Input = styled.input`
  border: none;
  background-color: transparent;
  padding: 0.5rem;
  width: 100%;
  color: #fff;
`;

export const SubmitButton = styled.button`
  padding: 0 8px;
  height: 35px;
  border: none;
  cursor: pointer;
  transition: 0.5s all;

  :hover {
    filter: brightness(90%);
  }
`;
