import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import HomeCards from "./components/HomeCards.jsx";
import JobListings from "./components/JobListings.jsx";
import ViewAllJobs from "./components/ViewAllJobs.jsx";

function App() {
  return (
   <>
    <Navbar />
    <Hero title="Become a React Dev" subtitle="Find the React job that fits your skills and needs" />
    <HomeCards />
    <JobListings />
    <ViewAllJobs />
   </>
  );
}

export default App;
