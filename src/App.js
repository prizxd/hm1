import './style/App.css';
import './style/reset.css';

function App() {
  return (
    <div className="App">
      <header className="container">
        <img src="./img/download_1.png" />
        <div className="menu">
          <li>Our Hotel</li>
          <li>Rooms & Rates</li>
          <li>Facilities</li>
          <li>Contact Us</li>
        </div>
      </header>
      <main>
        <div className='f-block container'>
          <select>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
          </select>
          <input type='date' />
          <input type='date' />
          <button className='check-a'>Check Availability</button>
        </div>
        <div className='s-block'>
          <div className='welcome'>
            <h1>WELCOME TO BON HOTEL</h1>
            <p>Good people. Good thinking. Good feeling.</p>
            <button className='explore'>EXPLORE</button>
          </div>
          <div className='facilities'>
            <h1>Facilities</h1>
            <ul>
              <li>Kitchen</li>
              <li>Pool</li>
              <li>Wifi</li>
              <li>Gym</li>
              <li>Taxi</li>
            </ul>
          </div>
        </div>
        <div className='th-block'>
          <h1 className='rooms-rates'>Rooms & Rates</h1>
          <ul className='flex-rooms'>
            <li>
              <p></p>
              <button>Check Rates</button>
            </li>
            <li>
              <p></p>
              <button>Check Rates</button>
            </li>
            <li>
              <p></p>
              <button>Check Rates</button>
            </li>
            <li>
              <p></p>
              <button>Check Rates</button>
            </li>
          </ul>
          <p className='get-room'>Get a room already!</p>
          <button className='book-now'>Book Now</button>
        </div>
      </main>
      <footer>
        <div className='left'>
          <img src='./img/download_2.png'></img>
          <div>
            <p>Bon Hotels Head Office</p>
            <p>+27 434 344 432</p>
            <p>info@bonhotels.com</p>
          </div>
        </div>
        <div className='center'>
          <ul className='links'>
            <li><a href='#'>Our Hotels</a></li>
            <li><a href='#'>Our Conferencing</a></li>
            <li><a href='#'>Our Company</a></li>
            <li><a href='#'>Hotel Design</a></li>
            <li><a href='#'>Careers</a></li>
          </ul>
        </div>
        <div className='right'>
          <p>Subscribe for Offers</p>
          <input type='text' placeholder='Email Address'></input>
          <button className='subscribe'>Subscribe  Now</button>
        </div>
      </footer>
    </div>

  );
}

export default App;
