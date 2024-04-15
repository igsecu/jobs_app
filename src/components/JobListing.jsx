import {useState} from "react";

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
            <p className="text-danger fw-bold">{job.location}</p>
            <a href={`/job/${job.id}`} className="btn btn-sm btn-primary text-white mb-3">Read More</a>
        </div>
    </div>
  )
}

export default JobListing