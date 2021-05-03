import axios from 'axios'

export const getCursos = async () => {

    const resp = await axios(`http://localhost:3004/cursos`)
    const { data } = resp
    console.log(data)


    return data;
}

export const getCurso = async (id) => {
    try {
        const resp = await axios(`http://localhost:3004/cursos/${id}`)
        const { data } = resp
        console.log(data)


        return data;

    } catch (error) {
        return []
    }


}