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

export const GetPostApi = async (config) => {
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
