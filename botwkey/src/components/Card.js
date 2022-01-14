import "./Card.css";

const Card = ({ handlePointerEvent, name, image, cardStyle }) => {
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
            <h5>DESCRIPTION</h5>
            <p>
              Here goes description. This will be a couple of sentences
              probably. The creatures and the monsters are one category. The
              others are treasure, materials, and equipment.
            </p>
            <h5>DROPS</h5>
            <p>Drops some watermelon. Also drops some sugar and ice.</p>
            <h5>COMMON LOCATIONS</h5>
            <p>Southern Lands, Gerudo Islands, Hyrule Castle</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
