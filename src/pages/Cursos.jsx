import React, { useState, useEffect } from 'react'
import { getCursos } from '../helpers/rutaCursos';
import NavBar from '../components/NavBar'
import '../css/cursos.css'

import CursoItem from '../components/CursoItem';

const Cursos = () => {

    const [user, setUser] = useState([])

    const [cursos, setCursos] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('usuario')))
        getCursos().then(cursos => {
            setCursos({
                data: cursos,
                loading: false
            })

        })

    }, [])


    return (
        <>
            <NavBar />



            <div className="background-curso">
                <div className="container">
                    <div className="row">
                        <div className="col text-center my-5">
                            <h3>Conoce nuestros cursos</h3>
                        </div>
                    </div>
                    <div className="row">
                        {user.length > 0 ?

                            cursos.data.map(curso => {
                                return <CursoItem key={curso.id} curso={curso} />
                            })

                            :
                            <div className="alert alert-danger w-100 text-center" role="alert">
                                Para ver esta información debe iniciar sesión
                            </div>
                        }

                    </div>
                </div>
            </div>


        </>
    )
}

export default Cursos
