import React, { useState } from 'react'
import { postUsuario } from '../helpers/rutaUsuarios'
const RegistroFormApi = () => {

    const [formValues, setFormValues] = useState({
        nombre: '',
        email: '',
        password: '',
        img: '',

    })

    const [ok, setOk] = useState(false)

    const handleChange = (e) => {

        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        postUsuario(formValues)
        setFormValues({
            nombre: '',
            email: '',
            password: '',
            img: '',
        })
        registroOk()

    }

    const registroOk = () => {
        setOk(true);
        setTimeout(() => {
            setOk(false)
        }, 2000)
    }

    return (
        <>
            {ok &&
                <div className="alert alert-success" role="alert">
                    Usuario registrado correctamente!
                </div>
            }

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="text-muted" >Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        name="nombre"
                        value={formValues.nombre}
                        onChange={handleChange}
                    />

                </div>
                <div className="form-group">
                    <label className="text-muted" >Correo electrónico</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formValues.email}
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
                    <label className="text-muted">Imagen</label>
                    <input
                        name="img"
                        type="text"
                        className="form-control"
                        value={formValues.img}
                        onChange={handleChange}

                    />
                </div>


                <button type="submit" className="btn btn-info btn-block">Registrarse</button>
            </form>
        </>
    )
}

export default RegistroFormApi
