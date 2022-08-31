import './Card.scss';

function Card(props) {
  const { id, name, description, price, weight, img } = props.data;
  return (
    <div id={id} className="card">
      <div>
        <img className='card__img' src={`images/${img}`} alt="dish" />
        <h2 className="card__title">{name}</h2>
        <p className="card__desc">{description}</p>
      </div>

      <div className="card__info">
        <p className="card__dish-info">
          <span className='card__dish-price'>{`${price} ₽`}</span>
          <sub className="card__dish-weight">{` /${weight}`}</sub>
        </p>
        <button className='card__button' data-dish-id={id}></button>
      </div>
    </div>
  )
}

export default Card