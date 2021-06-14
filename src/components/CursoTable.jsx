import React, { useEffect, useState } from 'react'
import { getCursos, deleteCurso } from '../helpers/rutaCursos'
import ModalCurso from './ModalCurso';

const CursoTable = () => {

    const [cursos, setCursos] = useState({
        data: [],
        loading: true
    })
    const [show, setShow] = useState(false);
    const [idCurso, setIdCurso] = useState(null)


    const { data, loading } = cursos


    const handleClose = () => setShow(false);
    const handleShow = (id) => {

        setIdCurso(id)
        setShow(true);
    }

    useEffect(() => {
        getCursos().then(datos => {
            setCursos({
                data: datos,
                loading: false
            })
        })
    }, [loading])

    const handleDelete = (id) => {

        deleteCurso(id)

    }




    return (
        <>
            <div className="col">
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Título</th>
                            <th scope="col">Detalle</th>
                            <th scope="col">Mentor</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading && 'Cargando...'}
                        {data.map(curso => {
                            return (
                                <tr key={curso.id}>
                                    <th>{curso.title}</th>
                                    <td>{curso.detalle}</td>
                                    <td>{curso.mentor}</td>
                                    <td>
                                        <button className="btn btn-danger mr-2 mb-2" onClick={() => { handleDelete(curso.id) }}><i className="fa fa-trash-o" aria-hidden="true"></i></button>
                                        <button className="btn btn-warning mr-2 mb-2 " onClick={() => { handleShow(curso.id) }}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                    </td>
                                </tr>
                            )
                        })}


                    </tbody>
                </table>


            </div>
            <ModalCurso show={show} idCurso={idCurso} handleClose={handleClose} />
        </>
    )
}

export default CursoTable
