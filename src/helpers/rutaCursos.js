import axios from "axios";

export const getCursos = async () => {
  const resp = await axios(`http://localhost:3004/cursos`);
  const { data } = resp;
  // console.log(data)

  return data;
};

export const getCurso = async (id) => {
  try {
    const resp = await axios(`http://localhost:3004/cursos/${id}`);
    const { data } = resp;
    // console.log(data)

    return data;
  } catch (error) {
    return error;
  }
};

export const postCurso = async (datos) => {
  const resp = await axios.post(`http://localhost:3004/cursos`, datos);

  const { data } = resp;

  return data;
};

export const deleteCurso = async (id) => {
  const resp = await axios.delete(`http://localhost:3004/cursos/${id}`);

  const { data } = resp;

  return data;
};

export const updateCurso = async (id, datos) => {
  const resp = await axios.put(`http://localhost:3004/cursos/${id}`, datos);
  const { data } = resp;
  return data;
};
