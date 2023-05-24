import axios from "axios";

export const LoginApi = async (body) => {
  try {
    const reposta = await axios.post("http://localhost:3003/users/login", body);
    return await reposta;
  } catch (error) {
    console.log("erro ao receber os dados:", error);
  }
};

export const CreatePostApi = async (config, body) => {
  try {
    const reposta = await axios.post(
      "http://localhost:3003/posts/createpost",
      body,
      config
    );
    return reposta;
  } catch (error) {
    console.log("erro ao receber os dados:", error);
  }
};

export const getPostApi = async (config) => {
  try {
    const reposta = await axios.get(
      "http://localhost:3003/posts/getpost",
      config
    );
    return reposta;
  } catch (error) {
    console.log("erro ao receber os dados:", error);
  }
};

export const GetUsersApi = async (config) => {
  try {
    const reposta = await axios.get("http://localhost:3003/users", config);
    return reposta;
  } catch (error) {
    console.log("erro ao receber os dados:", error);
  }
};

export const CreateUserApi = async (body) => {
  try {
    const reposta = await axios.post(
      "http://localhost:3003/users/signup",
      body
    );
    return reposta;
  } catch (error) {
    console.log("erro ao receber os dados:", error);
  }
};

export const GetCommentsApi = async (config, body) => {
  try {
    const reposta = await axios.post(
      "http://localhost:3003/posts/:id/getpost/comments",
      body,
      config
    );
    return reposta;
  } catch (error) {
    console.log("erro ao receber os dados:", error);
  }
};
