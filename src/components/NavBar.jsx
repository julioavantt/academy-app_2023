import React, { useEffect, useState } from 'react'
import { Navbar, Nav, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getCursos } from '../helpers/rutaCursos'
import '../css/navbar.css'
const NavBar = () => {

    const [data, setData] = useState([])


    useEffect(() => {
        getCursos().then(cursos => {
            setData(cursos)
        })
    }, [])


    return (
        <>

            <Navbar bg="light" expand="lg" className="nav-header">
                <div className="container">
                    <Navbar.Brand href="#home">CoffeCode</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="  mr-auto">
                            <Link to="/" className="items mr-3">Home</Link>
                            <Link to="/cursos" className="items mr-3">Cursos</Link>

                        </Nav>
                        <Dropdown>
                            <Dropdown.Toggle variant="info" id="dropdown-basic">
                                Buscar cursos
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {data.map(item => {

                                    return <Dropdown.Item> <Link to={`/curso/${item.id}`}>{item.title}</Link></Dropdown.Item>
                                })}
                                {/* <Dropdown.Item href="#/action-1">Javascript</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">CSS</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">HTML</Dropdown.Item> */}
                            </Dropdown.Menu>
                        </Dropdown>

                        {/* <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="info">Search</Button>
                        </Form> */}
                        <Link to="#" className="items ml-3">Inicio de sesión</Link>
                    </Navbar.Collapse>

                </div>
            </Navbar>
        </>
    )
}

export default NavBar