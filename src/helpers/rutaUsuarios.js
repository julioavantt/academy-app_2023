import axios from "axios";
// import qs from 'qs';

export const getUsuario = async (mail, password) => {
  // console.log(mail)
  const resp = await axios(`http://localhost:3004/usuarios?usuario=${mail}`);

  const { data } = resp;
  // console.log(data)

  if (data.length > 0) {
    let validar = data.find((user) => {
      return user.password === password;
    });

    if (validar) {
      return data;
    } else {
      return [];
    }
  }
};

export const postUsuario = async (datos) => {
  const resp = await axios.post(`http://localhost:3004/usuarios`, datos);

  // console.log(resp)
  const { data } = resp;
  return data;
};
