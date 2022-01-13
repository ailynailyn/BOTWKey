import "./Card.css";

const Card = ({ handlePointerEvent, name, image, cardStyle }) => {
  return (
    <article className={cardStyle}>
      <div
        className="card"
        onMouseDown={handlePointerEvent}
        onTouchStart={handlePointerEvent}
      >
        <div className="card-header">
          <p>{name}</p>
          <img src={image} alt={name} />
        </div>
        <div className="card-middle">
          <div className="card-hearts">
            <img src={image} alt={name} />
          </div>
          <div className="card-image">
            <img src={image} alt={name} />
          </div>
          <div className="card-stats">
            <img src={image} alt={name} />
          </div>
        </div>
        <div className="card-footer">
          <div className="footer-title">
            <h5>DESCRIPTION</h5>
            <h5>DROPS</h5>
            <h5>COMMON LOCATIONS</h5>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
