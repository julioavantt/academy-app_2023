import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCurso } from '../helpers/rutaCursos'
import NavBar from '../components/NavBar'
import CursoDetail from '../components/CursoDetail'
import ProgramDetail from '../components/ProgramDetail'
import '../css/curso.css'

const Curso = () => {
    const [curso, setCurso] = useState({
        data: [],
        loading: true
    })
    const [user, setUser] = useState([])


    let { id } = useParams();

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('usuario')))
        getCurso(id).then(datos => {
            setCurso({
                data: datos,
                loading: false
            })
        })



    }, [id])

    return (

        <div className="mb-4">
            <NavBar />
            {/* {curso.loading && 'Cragando...'} */}

            {user.length > 0 ?
                <>
                    <CursoDetail curso={curso} />


                    <ProgramDetail curso={curso} />
                </>
                :

                <div className="alert alert-danger w-100 text-center" role="alert">
                    Para ver esta información debe iniciar sesión
</div>
            }







            {/* <ProgramDetail programa={programa} /> */}

        </div>

    )
}

export default Curso
