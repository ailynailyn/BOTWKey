import "./Card.css";

const Card = ({
  handlePointerEvent,
  name,
  image,
  description,
  common_locations,
  drops,
  cardStyle,
}) => {
  function dropsContainer() {
    if (drops) {
      return (
        <div>
          <div className="footer-title">DROPS</div>
          <div className="footer-drops">
            Drops some watermelon. Also drops some sugar and ice.
          </div>
        </div>
      );
    }
    return;
  }

  function commonLocationsContainer() {
    if (common_locations) {
      return (
        <div>
          <div className="footer-title">COMMON LOCATIONS</div>
          <div className="footer-locations">{common_locations.join(", ")}</div>
        </div>
      );
    }
    return;
  }

  return (
    <article className={cardStyle}>
      <div
        className="botw-card"
        onMouseDown={handlePointerEvent}
        onTouchStart={handlePointerEvent}
      >
        <div className="botw-card-header">
          <p>{name}</p>
          <img src={image} alt={name} />
        </div>
        <div className="botw-card-middle">
          <div className="botw-card-hearts">
            <img src={image} alt={name} />
          </div>
          <div className="botw-card-image">
            <img src={image} alt={name} />
          </div>
          <div className="botw-card-stats">
            <img src={image} alt={name} />
          </div>
        </div>
        <div className="botw-card-footer">
          <div className="footer-text">
            <div className="footer-title">DESCRIPTION</div>
            <div className="footer-description">{description}</div>
            {dropsContainer}
            {commonLocationsContainer}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
