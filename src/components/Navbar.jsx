import logo from "../assets/images/react.png"
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-primary navbar-dark py-3 border-bottom border-light">
        <div className="container d-flex flex-row justify-content-between align-items-center">
            <div className="d-flex align-items-center text-white">
                <NavLink to="/">
                    <img src={logo} alt="React Logo" style={{ height: "30px"}}/>
                </NavLink>
                <span className="fs-4 ms-2 d-none d-md-block">React Jobs</span>
            </div>
            <ul className="nav nav-pills">
                <li className="nav-item mx-1">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item  mx-1">
                    <NavLink className="nav-link" to="/jobs">Jobs</NavLink>
                </li>
                <li className="nav-item  mx-1">
                    <NavLink className="nav-link" to="/add-job">Add Job</NavLink>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar