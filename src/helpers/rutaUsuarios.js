import axios from 'axios'

export const getUsuario = async (mail) => {

    const resp = await axios(`http://localhost:3004/usuarios?usuario=${mail}`)

    const { data } = resp
    console.log(resp)


    return data
}