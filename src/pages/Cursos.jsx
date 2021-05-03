import React, { useState, useEffect } from 'react'
import { getCursos } from '../helpers/rutaCursos';

import '../css/cursos.css'

import CursoItem from '../components/CursoItem';

const Cursos = () => {

    const [cursos, setCursos] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getCursos().then(cursos => {
            setCursos({
                data: cursos,
                loading: false
            })
        })

    }, [])



    return (
        <>

            <div className="background-curso">
                <div className="container">
                    <div className="row">
                        <div className="col text-center my-5">
                            <h3>Conoce nuestros cursos</h3>
                        </div>
                    </div>
                    <div className="row">
                        {cursos.data.map(curso => {
                            return <CursoItem key={curso.id} curso={curso} />
                        })}


                    </div>
                </div>
            </div>

        </>
    )
}

export default Cursos
