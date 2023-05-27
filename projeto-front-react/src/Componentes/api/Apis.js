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
    return error;
  }
};

export const getCommentsApi = async (config, id) => {
  try {
    const reposta = await axios.get(
      `http://localhost:3003/posts/${id}/getpost/comments`,
      config
    );
    return reposta;
  } catch (error) {
    console.log("erro ao receber os dados:", error);
  }
};

export const createCommentApi = async (config, body) => {
  try {
    const reposta = await axios.post(
      `http://localhost:3003/posts/getpost/createcomment`,
      body,
      config
    );
    return reposta;
  } catch (error) {
    console.log("erro ao receber os dados:", error);
  }
};

export const likeApi = async (config, body, id) => {
  try {
    const reposta = await axios.put(
      `http://localhost:3003/posts/${id}/like`,
      body,
      config
    );
    return reposta;
  } catch (error) {
    console.log("erro ao receber os dados:", error);
  }
};

export const likeApiComment = async (config, body, id) => {
  try {
    const reposta = await axios.put(
      `http://localhost:3003/posts/${id}/like/comment`,
      body,
      config
    );
    return reposta;
  } catch (error) {
    console.log("erro ao receber os dados:", error);
  }
};

export const getPostByIdApi = async (config, id) => {
  try {
    const reposta = await axios.get(
      `http://localhost:3003/posts/getpost?q=${id}`,
      config
    );
    return reposta;
  } catch (error) {
    console.log("erro ao receber os dados:", error);
  }
};
