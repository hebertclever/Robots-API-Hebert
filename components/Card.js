function Card({ robot }) {
  return (
    <div className="list">
        <div className="card">
        <div>
        <img
          src={`https://robohash.org/${robot.id}`}
          alt="robot-pic"
          style={{ width: "200px", height: "200px" }}
        />
      </div>
      <h3>{robot.name}</h3>
      <h4>{robot.email}</h4>
      <p>{robot.phone}</p>

        </div>
     
    </div>
  );
}

export default Card;
