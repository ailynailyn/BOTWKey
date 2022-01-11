const Card = ({ handlePointerEvent, name, image, cardStyle }) => {
  return (
    <article className={cardStyle}>
      <div
        className="card"
        onMouseDown={handlePointerEvent}
        onTouchStart={handlePointerEvent}
      >
        <img src={image} alt={name} />
        <h2>{name}</h2>
      </div>
    </article>
  );
};

export default Card;
