import { styled } from "styled-components";

export const Modelspageoflogin = styled.body`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const BodyofpageCreate = styled.body`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 4vh 96vh;
  /* font-family: "IBM Plex Sans"; */
`;

export const HeaderofpagCreate = styled.header`
  display: flex;
  /* grid-row: 2/3; */
  /* display: flex; */
  background-color: #ededed;
  /* justify-content: center; */
`;

export const ButtonlogarCreate = styled.button`
  display: flex;
  grid-row: 1/2;
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
  height: 25px;
  width: 55px;
  border: none;
  background: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  color: #4088cb;
`;

export const Divofimagescreate = styled.img`
  grid-row: 1/2;
  height: 28px;
  width: 28px;
`;

export const Divofinputcreate = styled.div`
  width: 363px;
  display: grid;
  /* flex-direction: row; */
  /* align-items: center; */
  /* align-content: center; */
  /* justify-content: center; */
  justify-items: center;
`;
