import React from 'react'
import NavBar from '../components/NavBar'
import home1 from '../images/home1.png'

import '../css/registro.css'
const Registro = () => {



    // usuario
    // password
    // rol
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="row mb-3">
                    <div className="col-6 offset-3">
                        <div className="card card-registro">
                            <img src={home1} className="card-img-top" alt="portada" />
                            <div className="card-body">
                                <h3 className="card-title text-center mb-3">Crea tu Cuenta gratis</h3>
                                <form>
                                    <div className="form-group">
                                        <label className="text-muted" >Correo electrónico</label>
                                        <input type="email" className="form-control" />

                                    </div>
                                    <div className="form-group">
                                        <label className="text-muted">Contraseña</label>
                                        <input type="password" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label className="text-muted">Repetir contraseña</label>
                                        <input type="password" className="form-control" />
                                    </div>

                                    <button type="submit" className="btn btn-info btn-block">Registrarse</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Registro
