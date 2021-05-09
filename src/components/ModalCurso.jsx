import React from 'react'

import { Modal, Button } from 'react-bootstrap'

const ModalCurso = ({ show, idCurso, handleClose }) => {


    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Curso</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
                <Modal.Footer>

                    <Button variant="primary" onClick={handleClose}>
                        Guardar
          </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalCurso
