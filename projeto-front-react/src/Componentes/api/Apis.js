import axios from "axios";

export const Signup = async (body) => {
  try {
    const reposta = await axios.post("http://localhost:3003/users/login", body);
    return await reposta;
  } catch (error) {
    console.log("erro ao receber os dados:", error);
  }
};
