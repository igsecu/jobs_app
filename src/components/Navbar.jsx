import logo from "../assets/images/react.png"

const Navbar = () => {
  return (
    <nav className="bg-primary navbar-dark py-3 border-bottom border-light">
        <div className="container d-flex flex-row justify-content-between align-items-center">
            <div className="d-flex align-items-center text-white">
                <a href="#">
                    <img src={logo} alt="React Logo" style={{ height: "30px"}}/>
                </a>
                <span className="fs-4 ms-2 d-none d-md-block">React Jobs</span>
            </div>
            <ul className="nav nav-pills">
                <li className="nav-item mx-1">
                    <a className="nav-link active" href="#">Home</a>
                </li>
                <li className="nav-item  mx-1">
                    <a className="nav-link" href="#">Jobs</a>
                </li>
                <li className="nav-item  mx-1">
                    <a className="nav-link" href="#">Add Job</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar