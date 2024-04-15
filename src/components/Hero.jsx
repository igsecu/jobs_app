const Hero = ({title, subtitle}) => {
  return (
    <section className="bg-primary text-light p-5 text-center">
        <div className="container">
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    </section>
  )
}

export default Hero