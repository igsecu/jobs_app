import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = () => {
  return (
    <>
        <Hero title="Become a React Dev" subtitle="Find the React Job that fits your skill set"/>
        <HomeCards />
        <JobListings />
        <ViewAllJobs />
    </>
  )
}

export default HomePage