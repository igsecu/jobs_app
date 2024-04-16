import {useState} from "react";
import {FaMapMarker} from "react-icons/fa";
import {Link} from "react-router-dom";

const JobListing = ({job}) => {

  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description;

  if(!showFullDescription) {
    description = `${description.substring(0, 90)}...`;
  }

  return (
    <div className="col-md-6 col-lg-4">
        <div className="card bg-light text-start p-2 border shadow">
            <small className="text-secondary">{job.type}</small>
            <h5 className="card-title fw-bold">{job.title}</h5>
            <p className="fs-6 mb-0">{description}</p>
            <p className="fw-bold text-end me-3" style={{cursor:"pointer"}}onClick={() => setShowFullDescription(!showFullDescription)}>{showFullDescription ? 'Less' : 'More'}</p>
            <p className="text-success">{job.salary} / Year</p>
            <div className="d-flex flex-row align-items-center mb-3">
              <FaMapMarker className="text-danger me-1" /><span className="text-danger fw-bold">{job.location}</span>
            </div>
         
            <Link to={`/job/${job.id}`} className="btn btn-sm btn-primary text-white mb-3">Read More</Link>
        </div>
    </div>
  )
}

export default JobListing