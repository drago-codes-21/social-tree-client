import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  // padding: 0 35px 0 35px;
  font-size: 12px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  // display: flex;
  // justify-content: center;

  &:hover {
    background-color: #343434;
    background-color: #fff;
    color: black;
    border: 1px solid black;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  // background-color: #fd5c63;
  // background-color: #ee204d;
  // background-color: #00ff7f;
  // background-color: #808000;
  color: black;

  &:hover {
    background-color: #357ae8;
    // background-color: #ee204d;
    // background-color: #fff;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;
