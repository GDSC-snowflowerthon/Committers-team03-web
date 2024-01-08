
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #ffffff;
  margin-right: 8px;
  width: 380px;
  height: 45px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 10px;
  outline: none;
  margin-top: 2rem;
`;

export const Text = styled.div`
  font-size: 14px;
  color: #4F5861;

`;

export const RegisterButton = styled.button<{ clicked: boolean }>`
  width: 60px;
  height: 35px;
  color: #ffffff;
  font-size: 12px;
  border-radius: 4px;
  background-color: ${props => props.clicked ? '#7E9ECC' : '#3181F4'};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  cursor: pointer;
`;