import React, { useEffect, useState } from "react";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getCursos } from "../helpers/rutaCursos";
import "../css/navbar.css";
const NavBar = () => {
  const [usuario, setUsuario] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    getCursos().then((cursos) => {
      setData(cursos);
      setUsuario(JSON.parse(localStorage.getItem("usuario")));
    });
  }, []);

  return (
    <>
      <Navbar bg="light" expand="lg" className="nav-header">
        <div className="container">
          <Navbar.Brand href="#home">Academy App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="  mr-auto">
              <Link to="/" className="items mr-3">
                Home
              </Link>
              {usuario.length > 0 && (
                <Link to="/cursos" className="items mr-3">
                  Cursos
                </Link>
              )}
            </Nav>

            {usuario.length > 0 && (
              <>
                <Link to="/admin" className="nav-link">
                  Administrar
                </Link>
                <Dropdown>
                  <Dropdown.Toggle variant="info" id="dropdown-basic">
                    Buscar cursos
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {data.map((item) => {
                      return (
                        <Dropdown.Item key={item.id}>
                          <Link to={`/curso/${item.id}`} className="nav-link">
                            {item.title}
                          </Link>
                        </Dropdown.Item>
                      );
                    })}
                  </Dropdown.Menu>
                </Dropdown>
              </>
            )}

            {usuario.length > 0 ? (
              <Link
                to="/login"
                className="items ml-3 btn btn-outline-secondary"
              >
                Cerrar Sesión
              </Link>
            ) : (
              <Link to="/login" className="items ml-3">
                Inicio de sesión
              </Link>
            )}
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default NavBar;
