import { styled } from "styled-components";

export const Modelspageoflogin = styled.body`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const BodyofpageCreate = styled.body`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 5vh 95vh;
  /* justify-items: center; */
  /* font-family: "IBM Plex Sans"; */
`;

export const HeaderofpagCreate = styled.header`
  display: flex;
  height: 16px;
  flex-direction: row;
  grid-row: 1/2;
  background-color: gray;
  grid-template-columns: 1fr 3fr 1fr;
`;

export const ButtonlogarCreate = styled.button`
  display: grid;
  grid-column: 2/3;
`;

export const Divofimageslogin = styled.image`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 83px;
`;
