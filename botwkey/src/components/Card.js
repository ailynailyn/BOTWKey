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
            <p>DESCRIPTION</p>
            <p>DROPS</p>
            <p>COMMON LOCATIONS</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
