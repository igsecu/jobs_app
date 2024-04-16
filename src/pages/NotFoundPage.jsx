import {Link} from "react-router-dom";
import {FaExclamationTriangle} from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="section p-5 text-center">
        <div className="container">
            <FaExclamationTriangle  className="text-warning fs-1 mb-1"/>
            <h1 style={{fontSize:"48px"}}>404 Not Found</h1>
            <p className="fw-bold">This page does not exist!</p>
            <Link to="/" className="btn btn-primary">Go Home</Link>
        </div>
    </div>
  )
}

export default NotFoundPage