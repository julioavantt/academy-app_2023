import React, { useState } from 'react'
import { postUsuario } from '../helpers/rutaUsuarios'
const RegistroForm = () => {

    const [formValues, setFormValues] = useState({
        usuario: '',
        password: '',
        rol: 'USER_ROLE'
    })

    const handleChange = (e) => {

        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        postUsuario(formValues)

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="text-muted" >Correo electrónico</label>
                <input
                    type="usuario"
                    className="form-control"
                    name="correo"
                    value={formValues.usuario}
                    onChange={handleChange}
                />

            </div>
            <div className="form-group">
                <label className="text-muted">Contraseña</label>
                <input
                    name="password"
                    type="password"
                    className="form-control"
                    value={formValues.password}
                    onChange={handleChange}

                />
            </div>
            <div className="form-group">
                <label className="text-muted">Repetir contraseña</label>
                <input
                    type="password"
                    className="form-control"
                />
            </div>

            <button type="submit" className="btn btn-info btn-block">Registrarse</button>
        </form>
    )
}

export default RegistroForm
