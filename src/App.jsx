import "./style/App.scss";
import "./style/reset.css";
import Offers from "./Components/Offers/Offers";

const tarrifs = [
  {
    title: "Безлимитный 300",
    price: 300,
    speed: 10,
    text: "Объем включенного трафика не ограничен",
    colorTitle: "blackTitle",
    colorPrice: "blackPrice",
  },
  {
    title: "Безлимитный 450",
    price: 450,
    speed: 50,
    text: "Объем включенного трафика не ограничен",
    colorTitle: "greenTitle",
    colorPrice: "greenPrice",
  },
  {
    title: "Безлимитный 550",
    price: 550,
    speed: 100,
    text: "Объем включенного трафика не ограничен",
    colorTitle: "orangeTitle",
    colorPrice: "orangePrice",
  },
  {
    title: "Безлимитный 1000",
    price: 1000,
    speed: 200,
    text: "Объем включенного трафика не ограничен",
    colorTitle: "blackTitle",
    colorPrice: "blackPrice",
  },
];

function App() {
  return (
    <div className="App">
      <div className="container">
        <Offers
          title={tarrifs[0].title}
          price={tarrifs[0].price}
          speed={tarrifs[0].speed}
          text={tarrifs[0].text}
          colorTitle={tarrifs[0].colorTitle}
          colorPrice={tarrifs[0].colorPrice}
        />
        <Offers
          title={tarrifs[1].title}
          price={tarrifs[1].price}
          speed={tarrifs[1].speed}
          text={tarrifs[1].text}
          colorTitle={tarrifs[1].colorTitle}
          colorPrice={tarrifs[1].colorPrice}
        />
        <Offers
          title={tarrifs[2].title}
          price={tarrifs[2].price}
          speed={tarrifs[2].speed}
          text={tarrifs[2].text}
          colorTitle={tarrifs[2].colorTitle}
          colorPrice={tarrifs[2].colorPrice}
        />
        <Offers
          title={tarrifs[3].title}
          price={tarrifs[3].price}
          speed={tarrifs[3].speed}
          text={tarrifs[3].text}
          colorTitle={tarrifs[3].colorTitle}
          colorPrice={tarrifs[3].colorPrice}
        />
      </div>
    </div>
  );
}

export default App;
