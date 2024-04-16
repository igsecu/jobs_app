import jobs from "../jobs.json";
import JobListing from "../components/JobListing";

const JobsPage = () => {
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

export default JobsPage