import logo from "../assets/images/react.png"

const Navbar = () => {
  return (
    <nav className="bg-primary navbar-dark py-3 border-bottom border-light">
        <div className="container d-flex flex-row justify-content-between align-items-center">
            <a href="#">
                <img src={logo} alt="React Logo" style={{ height: "30px"}}/>
            </a>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Jobs</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Add Job</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar