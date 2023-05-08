import { BrowserRouter, Routes, Route } from "react-router-dom"

// import Layout from './elements/Layout';
import Curso from "./pages/Curso"
import Cursos from "./pages/Cursos"
import Error404 from "./pages/Error404"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Registro from "./pages/Registro"
import Admin from "./pages/Admin"

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/registro" element={<Registro />} />
				<Route path="/cursos" element={<Cursos />} />
				<Route path="/curso/:id" element={<Curso />} />
				<Route path="/admin" element={<Admin />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
