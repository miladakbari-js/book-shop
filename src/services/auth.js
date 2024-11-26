import api from "../configs/api";

const sendLogin =async (username, password) => {
  try {
    const response =await api.post("/auth/login", { username, password });
    return { response };
  } catch (error) {
    return error;
  }
};

const sendRegister =async (username, password) => {
  try {
    const response =await api.post("/auth/register", { username, password });
    return { response };
  } catch (error) {
    return error;
  }
};

export { sendLogin , sendRegister};
