import React, { useState } from 'react'

const LoginForm = ({ setUser }) => {

    const [formValues, setFormValues] = useState({
        correo: '',
        password: ''
    })


    const handleChange = (e) => {

        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setUser(formValues)
        setFormValues({
            correo: '',
            password: ''
        })

    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="text-muted">Correo electrónico</label>
                <input
                    type="email"
                    className="form-control"
                    name="correo"
                    value={formValues.correo}
                    onChange={handleChange}
                />

            </div>
            <div className="form-group">
                <label className="text-muted">Contraseña</label>
                <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                />
            </div>

            <button type="submit" className="btn btn-info btn-block">Entrar</button>
        </form>
    )
}

export default LoginForm
