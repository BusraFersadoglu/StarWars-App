function Card({title, model, passengers, hyperdrive_rating, max_atmosphering_speed,manufacturer, crew, cargo_capacity }) {
  return (
    <div className='card'>
        <h1>{title}</h1>
        <h3>{model}</h3>
        <h3>{hyperdrive_rating}</h3>
        <h3>{passengers}</h3>
        <h3>{max_atmosphering_speed}</h3>
        <h3>{manufacturer}</h3>
        <h3>{crew}</h3>
        <h3>{cargo_capacity}</h3>
    </div>
  )
}

export default Card