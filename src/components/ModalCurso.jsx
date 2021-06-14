import React from "react";
import { useEffect } from "react";

import { useState } from "react";

import { updateCurso } from "../helpers/rutaCursos";

import { Modal, Button } from "react-bootstrap";

const ModalCurso = ({ show, curso, handleClose }) => {
  const [datos, setDatos] = useState({});

  useEffect(() => {
    setDatos(curso);
  }, [curso]);

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCurso(datos.id, datos).then((respuesta) => {
      handleClose();
    });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{curso.title}</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <div className="form-group">
              <label>imagen</label>
              <input
                type="text"
                className="form-control"
                value={datos.imagen}
                name="imagen"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Detalle</label>
              <textarea
                className="form-control"
                rows="3"
                value={datos.detalle}
                name="detalle"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-group">
              <label>Video</label>
              <input
                type="text"
                className="form-control"
                value={datos.video}
                name="video"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Mentor</label>
              <input
                type="text"
                className="form-control"
                value={datos.mentor}
                name="mentor"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Avatar</label>
              <input
                type="text"
                className="form-control"
                value={datos.img_mentor}
                name="img_mentor"
                onChange={handleChange}
              />
            </div>
            <button className="btn btn-info" type="submit">
              Actualizar
            </button>
          </Modal.Body>
        </form>
      </Modal>
    </>
  );
};

export default ModalCurso;
