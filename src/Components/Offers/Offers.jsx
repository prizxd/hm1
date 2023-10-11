import "../Offers/offers.scss";

export default function Offers(props) {
  const colorTitle = props.colorTitle;
  const colorPrice = props.colorPrice;

  return (
    <div className="offer-block">
      {/* <h1 className="title">Безлимитный 300</h1>
      <p className="price">300 руб/мес</p>
      <p className="speed">до 10 Мбит/сек</p>
      <p className="text">Объем включенного трафика не ограничен</p> */}
      <h1 id={colorTitle} className="title">
        {props.title}
      </h1>
      <p id={colorPrice} className="price">
        {props.price} руб/мес
      </p>
      <p className="speed">до {props.speed} Мбит/сек</p>
      <p className="text">{props.text}</p>
    </div>
  );
}
