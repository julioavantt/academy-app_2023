import React, { useEffect, useState } from "react";
import { getCursos, getCurso, deleteCurso } from "../helpers/rutaCursos";
import ModalCurso from "./ModalCurso";

const CursoTable = () => {
  const [cursos, setCursos] = useState({
    data: [],
    loading: true,
  });
  const [show, setShow] = useState(false);
  const [curso, setCurso] = useState({});

  //   const { data, loading } = cursos;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getCursos().then((datos) => {
      setCursos({
        data: datos,
        loading: false,
      });
    });
  }, [cursos.loading, show]);

  const actualizarTabla = () => {
    getCursos().then((datos) => {
      setCursos({
        data: datos,
        loading: false,
      });
    });
  };

  const modifiCurso = (id) => {
    console.log(id);
    getCurso(id).then((curso) => {
      setCurso(curso);
      handleShow();
    });
  };

  const handleDelete = (id) => {
    let curso = cursos.data.find((curso) => {
      return curso.id === id;
    });
    // console.log(curso);
    let validator = window.confirm(
      `Está seguro que quiere eliminar el curso ${curso.title}?`
    );
    if (validator) {
      deleteCurso(id);
      actualizarTabla();
    }
  };

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
            {cursos.loading && (
              <tr>
                <th>Cargando...</th>
              </tr>
            )}
            {cursos.data.map((curso) => {
              return (
                <tr key={curso.id}>
                  <th>{curso.title}</th>
                  <td>{curso.detalle}</td>
                  <td>{curso.mentor}</td>
                  <td>
                    <button
                      className="btn btn-danger mr-2 mb-2"
                      onClick={() => {
                        handleDelete(curso.id);
                      }}
                    >
                      <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </button>
                    <button
                      className="btn btn-warning mr-2 mb-2 "
                      onClick={() => {
                        modifiCurso(curso.id);
                      }}
                    >
                      <i
                        className="fa fa-pencil-square-o"
                        aria-hidden="true"
                      ></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <ModalCurso show={show} curso={curso} handleClose={handleClose} />
    </>
  );
};

export default CursoTable;
