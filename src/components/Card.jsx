function Card({ title, link, thumbnail, large }) {
  return (
    <a
      href={link}
      className={`card${large ? " card-large" : ""}`}
      style={{ backgroundImage: `url(${thumbnail})` }}
    >
      <div className="card-title">{title}</div>
    </a>
  );
}

export default Card;