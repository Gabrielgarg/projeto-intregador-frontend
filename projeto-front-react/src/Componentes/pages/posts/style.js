import { styled } from "styled-components";

export const TextofPost = styled.textarea`
  border-radius: 10px;
  background-color: #ededed;
  height: 131px;
  width: 320px;
  margin-top: 30px;
  justify-self: center;
  /* margin-bottom: -00px; */
`;
export const Buttonlogin3 = styled.button`
  font-family: "IBM Plex Sans";
  background: linear-gradient(#ff6489, #f9b24e);
  width: 320px;
  border-radius: 40px;
  border-color: white;
  height: 50px;
  color: white;
  /* align-self: center; */
  justify-self: center;
  margin-top: -150px;
  /* margin-bottom: 550px; */
`;
export const Linelogin2 = styled.div`
  margin-top: -250px;
  width: 363px;
  height: 1px;
  border: 1px solid #ff6489;
`;

export const Styleofcard = styled.div`
  margin-top: -350px;
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

  .btn_primary {
    border: none;
    outline: none;
    background: linear-gradient(90deg, #ff9966, #ff5e62);
    padding: 1px 1px;
    border-radius: 50px;
    color: white;
    font-size: 20px;
    box-shadow: 10px 10px 10px rgba(255, 94, 98, 0.5);
    transition: all 0.2s ease-in;
    text-decoration: none;
  }

  .btn_primary:hover {
    box-shadow: 0px 1px 10px rgba(255, 94, 98, 0.5);
  }
`;
