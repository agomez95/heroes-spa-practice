import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../../auth/context/AuthContext";

export const Navbar = () => {

    const {user, logout} = useContext(AuthContext)

    const navigate = useNavigate();

    const onLogOut = () => {
        // useNavigate es un hook de router que permite la navegacion a cualquier ruta que declaremos como la de abajo
        // con replace no permite que la persona regrese a la ruta que lo mandan, pero aun asi necesita ser protegida las rutas
        logout()

        navigate('/login',{
            replace: true
        })
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">            
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Asociaciones</Link>
                <div className="navbar-collapse">
                    <div className="navbar-nav">
                        <NavLink className="nav-item nav-link" to="/marvel">Marvel</NavLink>
                        <NavLink className="nav-item nav-link" to="/dc">DC</NavLink>
                        <NavLink className="nav-item nav-link" to="/search">Search</NavLink>
                    </div>
                </div>
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto">
                        <span className="nav-item nav-link text-primary">{user?.name}</span>
                        <button className="nav-item nav-link btn" onClick={() => onLogOut()}>Logout</button>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
