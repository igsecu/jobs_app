import {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";

import {toast} from "react-toastify";

import Spinner from "../components/Spinner";

const EditJobPage = ({updateJobSubmit}) => {

    const {id} = useParams();

    const [loading, setLoading] = useState(true);

    const [title, setTitle] = useState("");
    const [type, setType] = useState("Full Time");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [salary, setSalary] = useState("Under $50K");
    const [companyName, setCompanyName] = useState("");
    const [companyDescription, setCompanyDescription] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [contactPhone, setContactPhone] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const fetchJob = async() => {
            try{
                const res = await fetch(`http://localhost:8000/jobs/${id}`);
                const data = await res.json();
    
                setTitle(data.title)
                setType(data.type);
                setLocation(data.location);
                setDescription(data.description);
                setSalary(data.salary);
                setCompanyName(data.company.name);
                setCompanyDescription(data.company.description);
                setContactEmail(data.company.contactEmail);
                setContactPhone(data.company.contactPhone);

            }catch(error){
                console.log("Error fetching data", error);
            }finally{
                setLoading(false);
            }
        }
        fetchJob();
    }, [])

    const submitForm = async (e) => {
        e.preventDefault();

        const updatedJob = {
            id,
            title,
            type,
            location,
            description,
            salary,
            company: {
                name: companyName,
                description: companyDescription,
                contactEmail,
                contactPhone
            }
        }

        updateJobSubmit(updatedJob)

        toast.success("Job updated successfully!")

        return navigate(`/jobs/${id}`);
    }

  return (
    loading ? <Spinner loading={loading} /> : (<section className="py-5">
        <div className="container">
            <h2 className="text-center">Edit Job</h2>
            <form className="col col-lg-6 mx-auto border shadow px-3" onSubmit={submitForm}>
                <div className="mt-3">
                    <label htmlFor="job-type" className="form-label fw-bold">Job Type</label>
                    <select id="type" className="form-select" required value={type}  onChange={(e) => setType(e.target.value)}>
                        <option value="Full Time">Full Time</option>
                        <option value="Part Time">Part Time</option>
                    </select>
                </div>
                <div className="mt-3">
                    <label htmlFor="job-name" className="form-label fw-bold">Job Listing Name</label>
                    <input className="form-control" type="text" placeholder="eg. Beautiful Apartment in Miami" value={title}  onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="mt-3">
                    <label htmlFor="job-description" className="form-label fw-bold">Description</label>
                    <textarea className="form-control" id="description" rows="3" placeholder="Add any job duties, expectations, requirements, etc" value={description}  onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div className="mt-3">
                    <label htmlFor="job-salary" className="form-label fw-bold">Salary</label>
                    <select className="form-select" value={salary}  onChange={(e) => setSalary(e.target.value)}>
                        <option value="Under $50K">Under $50K</option>
                        <option value="$50 - $100K">Under $100K</option>
                        <option value="$100 - $150K">Under $150K</option>
                        <option value="$150 - $200K">Under $200K</option>
                    </select>
                </div>
                <div className="mt-3">
                    <label htmlFor="job-location" className="form-label fw-bold">Location</label>
                    <input className="form-control" type="text" placeholder="Company Location" value={location}  onChange={(e) => setLocation(e.target.value)} />
                </div>
                <h3 className="mt-4">Company Info</h3>
                <div className="mt-3">
                    <label htmlFor="company-name" className="form-label fw-bold">Company Name</label>
                    <input className="form-control" type="text" placeholder="Company Name" value={companyName}  onChange={(e) => setCompanyName(e.target.value)}/>
                </div>
                <div className="mt-3">
                    <label htmlFor="company-description" className="form-label fw-bold">Company Description</label>
                    <textarea className="form-control" id="description" rows="3" placeholder="What does your company do?" value={companyDescription}  onChange={(e) => setCompanyDescription(e.target.value)}></textarea>
                </div>
                <div className="mt-3">
                    <label htmlFor="company-email" className="form-label fw-bold">Contact Email</label>
                    <input className="form-control" type="text" placeholder="Email address for applicants" value={contactEmail}  onChange={(e) => setContactEmail(e.target.value)}/>
                </div>
                <div className="mt-3">
                    <label htmlFor="company-phone" className="form-label fw-bold">Contact Phone</label>
                    <input className="form-control" type="text" placeholder="Optional phone for applicants" value={contactPhone}  onChange={(e) => setContactPhone(e.target.value)}/>
                </div>
                <div className="mt-3 d-grid">
                    <button type="submit" className="btn btn-primary mb-3">Edit Job</button>
                </div>
            </form>
        </div>
    </section>)
  )
}

export default EditJobPage