import {Link} from "react-router-dom";

const ViewAllJobs = () => {
  return (
    <section className="text-center pb-5">
        <Link to="/jobs" className="btn btn-dark text-white">View All Jobs</Link>
    </section>
  )
}

export default ViewAllJobs