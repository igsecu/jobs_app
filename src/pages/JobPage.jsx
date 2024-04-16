import {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom"
import Spinner from "../components/Spinner";
import { FaArrowLeft, FaMapMarker} from "react-icons/fa";
import {Link} from "react-router-dom";

import {toast} from "react-toastify";

const JobPage = ({deleteJob}) => {

    const {id} = useParams();
    const navigate = useNavigate();

    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);

    const onDeleteClick = async (id) => {
        const confirm = window.confirm("Are you sure you want to delete this listing?");

        if(!confirm) return;

        await deleteJob(id);

        toast.success("Job deleted successfully!")

        navigate("/jobs");

    }

    useEffect(() => {
        const fetchJob = async() => {
            try{
                const res = await fetch(`http://localhost:8000/jobs/${id}`);
                const data = await res.json();
                setJob(data);
            }catch(error){
                console.log("Error fetching data", error);
            }finally{
                setLoading(false);
            }
        }
        fetchJob();
    }, [])

  return (
    loading ? <Spinner loading={loading} /> : (
        <section className="p-5">
            <div className="container">
                <Link to="/jobs" className="d-flex align-items-center text-decoration-none mb-3">
                    <FaArrowLeft className="me-1" /> <span>Back to Jobs Listings</span>
                </Link>
                <div className="row">
                    <div className="col-lg-9">
                        <div className="card bg-light text-start p-2 border shadow">
                            <small className="text-secondary">{job.type}</small>
                            <h5 className="card-title fw-bold">{job.title}</h5>
                            <div className="d-flex flex-row align-items-center mt-2">
                                <FaMapMarker className="text-danger me-1" /><span className="text-danger fw-bold">{job.location}</span>
                            </div>
                        </div>
                        <div className="card bg-light text-start p-2 border shadow mt-3">
                            <p className="fw-bold text-primary">Job Description</p>
                            <p className="fs-bold">{job.description}</p>
                            <p className="fw-bold text-primary">Salary</p>
                            <p className="fw-bold">{job.salary} / Year</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card bg-light text-start p-2 border shadow mt-3">
                            <p className="fw-bold">Company Info</p>
                            <h5 className="card-title fw-bold">{job.company.name}</h5>
                            <p className="fs-bold">{job.company.description}</p>
                            <h5 className="card-title">Contact Email:</h5>
                            <p className="fw-bold bg-primary px-2 py-1 bg-opacity-25">{job.company.contactEmail}</p>
                            <h5 className="card-title">Contact Phone:</h5>
                            <p className="fw-bold bg-primary px-2 py-1 bg-opacity-25">{job.company.contactPhone}</p>
                        </div>
                        <div className="card bg-light text-start p-2 border shadow mt-3">
                            <p className="fw-bold">Manage Job</p>
                            <Link to={`/jobs/edit/${job.id}`} className="btn btn-dark mb-3">Edit Job</Link>
                            <button onClick={() => onDeleteClick(job.id)} className="btn btn-danger mb-3">Delete Job</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
  )
}

export default JobPage