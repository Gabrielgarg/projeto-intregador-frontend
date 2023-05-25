import { styled } from "styled-components";

export const TextofPost = styled.textarea`
  border-radius: 10px;
  background-color: #ededed;
  border: none;
  height: 131px;
  width: 22rem;
  margin-top: 30px;
  justify-self: center;
  padding: 10px;
  /* margin-bottom: -00px; */
`;
export const TextofComment = styled.textarea`
  border-radius: 10px;
  background-color: #ededed;
  border: none;
  height: 131px;
  width: 22rem;
  margin-top: 5px;
  justify-self: center;
  padding: 10px;
  /* margin-bottom: -00px; */
`;
export const TextofPost2 = styled.textarea`
  border-radius: 10px;
  background-color: #ededed;
  height: 131px;
  width: 22rem;
  margin-top: -90px;
  /* margin-top: 30px; */
  justify-self: center;
  /* margin-bottom: -00px; */
`;

export const BodyofpagePost = styled.body`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 4vh 27vh 69vh;
  /* font-family: "IBM Plex Sans"; */
`;
export const BodyofpageComments = styled.body`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 4vh 45vh 51vh;
  /* font-family: "IBM Plex Sans"; */
`;
export const Buttonlogin3 = styled.button`
  font-family: "IBM Plex Sans";
  background: linear-gradient(#ff6489, #f9b24e);
  width: 22rem;
  border-radius: 40px;
  border-color: white;
  height: 50px;
  color: white;
  /* align-self: center; */
  justify-self: center;
  /* margin-top: -10px; */
  /* margin-bottom: 550px; */
  /* margin-top: -90px; */
`;
export const Buttonlogin4 = styled.button`
  background: linear-gradient(#ff6489, #f9b24e);
  width: 22rem;
  border-radius: 40px;
  border-color: white;
  height: 50px;
  color: white;
  /* align-self: center; */
  justify-self: center;
  /* margin-top: -10px; */
  /* margin-bottom: 550px; */
  /* margin-top: -160px; */
`;
export const Linelogin2 = styled.div`
  /* margin-top: -220px; */
  width: 363px;
  height: 1px;
  border: 1px solid #ff6489;
`;
export const Linelogin3 = styled.div`
  /* margin-top: -270px; */
  width: 363px;
  height: 1px;
  border: 1px solid #ff6489;
`;

export const Styleofarrows = styled.div`
  width: 130px;
`;
export const Cardsofbuttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 98px;
  height: 27px;
  box-sizing: border-box;
  border: solid #e0e0e0 1px;
  border-radius: 10px;
`;

export const Cardsofbutton2 = styled.button`
  display: flex;
  background-color: white;
  margin-left: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 27px;
  box-sizing: border-box;
  border: solid #e0e0e0 1px;
  border-radius: 10px;
`;

export const Imageofbalao = styled.img`
  width: 14;
  height: 14.9;
`;

export const Alinhandoitens = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Styleofcard = styled.div`
  /* margin-top: -350px; */
  justify-self: center;
  border-color: black;
  font-family: "Roboto", sans-serif;
  /* font-size: 8px; */
  /* gap: 10px; */
  /* * {
    padding: 0;
    margin: 0;
  } */

  /* html {
    font-family: "Roboto", sans-serif;
    font-size: 8px;
  } */

  .wrapper {
    width: 345px;
    height: 200px;
    /* margin-top: -250px; */
  }

  .blog_post {
    position: relative;
    /* padding: 6rem 3rem 6rem 6rem; */
    background: #fff;
    /* max-width: 400px; */
    border-radius: 10px;
    /* top: 50%; */
    left: 50%;
    transform: translate(-50%);
    box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3);
  }

  /* .img_pod {
    height: 50px;
    width: 50px;
    background: linear-gradient(90deg, #ff9966, #ff5e62);
    z-index: -1;
    box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3);
    border-radius: 100%;
    position: absolute;
    left: -30px;
    top: -18px;
    /* transform: translateY(-50%); 
  } */

  /* img {
    height: 40px;
    width: 40px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100%;
    box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3);
  } */
`;

export const Divofclosebutton = styled.button`
  display: grid;
  grid-column: 1/2;
  height: 25px;
  width: 25px;
  align-self: center;
  align-content: center;
  border: none;
  color: red;
`;

export const Styleofcard2 = styled.div`
  /* margin-top: -350px; */
  justify-self: center;
  /* * {
    padding: 0;
    margin: 0;
  } */

  /* html {
    font-family: "Roboto", sans-serif;
    font-size: 8px;
  } */

  .wrapper {
    width: 340px;
    height: 10px;
    /* margin-top: -250px; */
  }

  .blog_post {
    position: relative;
    /* padding: 6rem 3rem 6rem 6rem; */
    background: #fff;
    max-width: 400px;
    border-radius: 10px;
    /* top: 50%; */
    left: 55%;
    transform: translate(-50%, -50%);
    box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3);
  }

  .img_pod {
    height: 50px;
    width: 50px;
    background: linear-gradient(90deg, #ff9966, #ff5e62);
    z-index: -1;
    box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3);
    border-radius: 100%;
    position: absolute;
    left: -50px;
    top: 10px;
    transform: translateY(-50%);
  }

  img {
    height: 40px;
    width: 40px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100%;
    box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3);
  }
`;

export const Styledofcomment = styled.div`
  margin-top: 40px;
  justify-self: center;
`;

export const Styleofcard3 = styled.div`
  margin-top: -180px;
  justify-self: center;
  /* * {
    padding: 0;
    margin: 0;
  } */

  /* html {
    font-family: "Roboto", sans-serif;
    font-size: 8px;
  } */

  .wrapper {
    width: 340px;
    height: 10px;
    /* margin-top: -250px; */
  }

  .blog_post {
    position: relative;
    /* padding: 6rem 3rem 6rem 6rem; */
    background: #fff;
    max-width: 400px;
    border-radius: 10px;
    /* top: 50%; */
    left: 55%;
    transform: translate(-50%, -50%);
    box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3);
  }

  .img_pod {
    height: 50px;
    width: 50px;
    background: linear-gradient(90deg, #ff9966, #ff5e62);
    z-index: -1;
    box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3);
    border-radius: 100%;
    position: absolute;
    left: -50px;
    top: 10px;
    transform: translateY(-50%);
  }

  img {
    height: 40px;
    width: 40px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100%;
    box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3);
  }
`;

export const ArrumandoosCards = styled.div`
  max-width: 23rem;
  max-height: 20rem;
`;
