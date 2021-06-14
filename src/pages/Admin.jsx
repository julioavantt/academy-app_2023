import React from 'react'
import CursoTable from '../components/CursoTable'

const Admin = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Admin</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h3>Administrador de cursos</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <CursoTable />
            </div>

        </div>
    )
}

export default Admin
