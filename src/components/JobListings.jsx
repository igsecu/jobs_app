import JobListing from "./JobListing";

import {useState, useEffect} from "react";

const JobListings = () => {

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async() => {
        try{

            const res = await fetch("http://localhost:8000/jobs");
            const data = await res.json();
            setJobs(data.slice(0,3));
            
        }catch(error){
            console.log("Error fetching data", error);
        }finally{
            setLoading(false);
        }
        }

        fetchJobs();
    }, [])

  return (
    <section className="p-5 text-center">
        <h2 className="text-primary mb-4">Browse Jobs</h2>
        <div className="container">
            <div className="row g-4">
                {jobs.map(job => (
                    <JobListing key={job.id} job={job} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default JobListings