import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";

import HomePage  from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import JobPage from "./pages/JobPage.jsx";
import AddJobPage from "./pages/AddJobPage.jsx";
import EditJobPage from "./pages/EditJobPage.jsx";

function App() {
  const addJob = async (newJob) => {
    const res = await fetch("http://localhost:8000/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newJob)
    })

    return;
  }

  const deleteJob = async(id) => {
    const res = await fetch(`http://localhost:8000/jobs/${id}`, {
      method: "DELETE"
    })

    return;
  }

  const updateJob = async (updateJob) => {
    const res = await fetch(`http://localhost:8000/jobs/${updateJob.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateJob)
    })

    return;
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />}/>
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />}/>
        <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob}/>}/>
        <Route path="/jobs/edit/:id" element={<EditJobPage updateJobSubmit={updateJob} /> }/>
        <Route path="*" element={<NotFoundPage />}/>
      </Route>
    )
  );

  return (
    <RouterProvider router={router}/>
 
  );
}

export default App;
