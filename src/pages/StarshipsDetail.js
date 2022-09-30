import { useParams, Link } from "react-router-dom";

function StarshipsDetail({ ships }) {
  const { starshipName } = useParams();

  return (
    <div className="detail-main">
      <div className="detail-container">
        {ships
          .filter((ship) => ship.name.split(" ").join("") === starshipName)
          .map((ship, index) => (
            <div key={index}>
              <h1 className="h-element h-detail">{ship.name}</h1>
              <p>
                <span className="label-span"> Ship Model: </span> {ship.model}
              </p>
              <p>
                <span className="label-span">Ship Hyperdrive Rating:</span>
                <span>{ship.hyperdrive_rating}</span>
              </p>
              <p>
                <span className="label-span">Passenger: </span>
                {ship.passengers}
              </p>
              <p>
                <span className="label-span">Max Atmosphering Speed:</span>
                {ship.max_atmosphering_speed}
              </p>
              <p>
                <span className="label-span">Manufacturer: </span>
                {ship.manufacturer}
              </p>
              <p>
                <span className="label-span">Crew: </span> {ship.crew}
              </p>
              <p>
                <span className="label-span"> Cargo Capacity: </span>
                {ship.cargo_capacity}
              </p>
            </div>
          ))}
      </div>
      <button className="button-tag">
        <Link to={"/starships"}>Back to Starships</Link>
      </button>
    </div>
  );
}

export default StarshipsDetail;
