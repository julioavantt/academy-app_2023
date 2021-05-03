import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCurso } from '../helpers/rutaCursos'

import CursoDetail from '../components/CursoDetail'
import ProgramDetail from '../components/ProgramDetail'
import '../css/curso.css'

const Curso = () => {
    const [curso, setCurso] = useState({
        data: [],
        loading: true
    })



    let { id } = useParams();

    useEffect(() => {

        getCurso(id).then(datos => {
            setCurso({
                data: datos,
                loading: false
            })
        })



    }, [id])

    return (

        <>
            {/* {curso.loading && 'Cragando...'} */}


            <CursoDetail curso={curso} />


            <ProgramDetail curso={curso} />






            {/* <ProgramDetail programa={programa} /> */}

        </>

    )
}

export default Curso
