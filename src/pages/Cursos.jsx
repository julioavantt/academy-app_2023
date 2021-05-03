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

                        {/* <div className="col">
                            <div className="card">
                                <img src={html} className="card-img-top" alt="html" />
                                <div className="card-body">
                                    <h5 className="card-title">Curso CSS flex box y Grid</h5>
                                    <img className="avatar" src="http://1.gravatar.com/avatar/2bd6474c77fd501924adfa0aae631f57" alt="gravatar" />
                                    <span className="card-text ml-2">Pablo Marino</span>

                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cursos
