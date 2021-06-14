import axios from 'axios'

export const getPrograma = async (id) => {
    try {

        const resp = await axios(`http://localhost:3004/programas?id_curso=${id}`)
        const { data } = resp
        // console.log(data)

        return data
    } catch (error) {
        console.error(error)
    }

}


