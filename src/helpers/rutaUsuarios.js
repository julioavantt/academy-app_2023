import axios from 'axios'

export const getUsuario = async (mail) => {

    const resp = await axios(`http://localhost:3004/usuarios?usuario=${mail}`)

    const { data } = resp
    console.log(resp)


    return data
}

export const postUsuario = async (data) => {

    const resp = await axios.post(`http://localhost:3004/usuarios`, data)
    console.log(resp)
}