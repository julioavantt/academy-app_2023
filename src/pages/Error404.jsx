import React from 'react'
import NavBar from '../components/NavBar'
import error from '../images/page404.png'

const Error404 = () => {
    return (
        <>
            <NavBar />
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <img className="error404" src={error} alt="Error 404" />

                    </div>
                </div>

            </div>
        </>
    )
}

export default Error404
