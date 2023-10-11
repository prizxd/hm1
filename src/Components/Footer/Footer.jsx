import "../Footer/footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="left">
        <img src="./img/download_2.png" alt="download_2.png"></img>
        <div>
          <p>Bon Hotels Head Office</p>
          <p>+27 434 344 432</p>
          <p>info@bonhotels.com</p>
        </div>
      </div>
      <div className="center">
        <div className="links">
          <a href="#">Our Hotels</a>
          <a href="#">Our Conferencing</a>
          <a href="#">Our Company</a>
          <a href="#">Hotel Design</a>
          <a href="#">Careers</a>
        </div>
      </div>
      <div className="right">
        <p>Subscribe for Offers</p>
        <input type="text" placeholder="Email Address"></input>
        <button className="subscribe">Subscribe Now</button>
      </div>
    </footer>
  );
}
