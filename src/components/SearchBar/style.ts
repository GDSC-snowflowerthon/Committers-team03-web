import { styled } from "styled-components";
import Search from "@/assets/Search/Search.png";
import theme from '@/theme';

export const Container = styled.div`
  margin-top: 5rem;
  position: relative; // Add this
  width:89%;
  outline: none;
  border: none;
`;

export const Label = styled.label`
  display: flex; 
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
`;

export const Input = styled.input`
  width: 380px;
  height: 45px;
  flex: 1;
  padding:8px;
  text-indent: 16px;
  border-radius: 12px;
  outline: none;
  border: none;
  color: ${theme.colors.textMain};
  font-weight: 600;
  font-size: 14px;
  
`;

export const SearchIcon = styled.div`
  position: absolute; // 겹치기 위해서 absolute로 설정
  top: 50%; 
  right:20px; 
  transform: translateY(-50%); 
  width: 25px;
  height: 25px;
  background-image: url(${Search});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;