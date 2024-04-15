import Card from "./Card";

const HomeCards = () => {
  return (
    <section className="p-5 bg-light">
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-6">
                    <Card title="For Developers" subtitle="Browse our React Jobs and start your career today" button="Browse Jobs"/>
                </div>
                <div className="col-lg-6">
                    <Card title="For Employers" subtitle="List your job to find the perfect developer for the role" button="Add Job"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeCards