import "../Header/header.scss";

export default function Header() {
  return (
    <header className="container">
      <img src="./img/download_1.png" alt="download_1.png" />
      <div className="menu">
        <a href="#">Our Hotel</a>
        <a href="#">Rooms & Rates</a>
        <a href="#">Facilities</a>
        <a href="#">Contact Us</a>
      </div>
    </header>
  );
}
