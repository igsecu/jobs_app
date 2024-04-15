const Card = ({title, subtitle, button}) => {
  return (
    <div className="card bg-transparent">
        <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-text fw-bold">{subtitle}</p>
            <button className="btn btn-dark text-white">{button}</button>
        </div>
    </div>
  )
}

export default Card