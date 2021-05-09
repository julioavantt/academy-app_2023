import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route

} from "react-router-dom";

// import Layout from './components/Layout';
import Curso from './pages/Curso';
import Cursos from './pages/Cursos';
import Error404 from './pages/Error404';
import Home from './pages/Home'
import Login from './pages/Login';
import Registro from './pages/Registro';
import Admin from './pages/Admin'

const App = () => {
    return (
        <Router>


            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/registro" component={Registro} />
                <Route exact path="/cursos" component={Cursos} />
                <Route exact path="/curso/:id" component={Curso} />
                <Route exact path="/admin" component={Admin} />
                <Route component={Error404} />


            </Switch>



        </Router>
    )
}

export default App



