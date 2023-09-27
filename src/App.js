import './style/App.css';
import './style/reset.css';

function App() {
  return (
    <div className="App">
      <header className="container">
        <img src="./img/download_1.png" alt='download_1.png' />
        <div className="menu">
          <a href='#'>Our Hotel</a>
          <a href='#'>Rooms & Rates</a>
          <a href='#'>Facilities</a>
          <a href='#'>Contact Us</a>
        </div>
      </header>
      <main>
        <div className='f-block container'>
          <form>
            <select id='city'>
              <option hidden>Select a City</option>
              <option>City</option>
              <option>City</option>
              <option>City</option>
            </select>

            <input type='date' />

            <input type='date' placeholder='Check Out' />
            <button className='check-a'>Check Availability</button>
          </form>
        </div>
        <div className='s-block'>
          <div className='welcome'>
            <div>
              <h1>WELCOME TO BON HOTEL</h1>
              <p>Good people. Good thinking. Good feeling.</p>
            </div>
            <button className='explore'>EXPLORE</button>
          </div>
          <div className='facilities'>
            <h1>Facilities</h1>
            <ul>
              <li>
                <img src='./img/kitchen.svg' />
                <p>Kitchen</p>
              </li>
              <li>
                <img src='./img/pool.svg' />
                <p>Pool</p>
              </li>
              <li>
                <img src='./img/wifi.svg' />
                <p>Wifi</p>
              </li>
              <li>
                <img src='./img/gym.svg' />
                <p>Gym</p>
              </li>
              <li>
                <img src='./img/taxi.svg' />
                <p>Taxi</p>
              </li>
            </ul>
          </div>
        </div>
        <div className='th-block'>
          <h1 className='rooms-rates'>Rooms & Rates</h1>
          <div className='flex-rooms'>
            <a href='#'>
              <p>Standard Twin Room</p>
              <button>Check Rates</button>
            </a>
            <a href='#'>
              <p>Standard Room</p>
              <button>Check Rates</button>
            </a>
            <a href='#'>
              <p>Standard View Room</p>
              <button>Check Rates</button>
            </a>
            <a href='#'>
              <p>Deluxe Room</p>
              <button>Check Rates</button>
            </a>
          </div>
        </div>
        <div className='fr-block'>
          <p className='get-room'>Get a room already!</p>
          <button className='book-now'>Book Now</button>
        </div>
      </main>
      <footer>
        <div className='left'>
          <img src='./img/download_2.png' alt='download_2.png'></img>
          <div>
            <p>Bon Hotels Head Office</p>
            <p>+27 434 344 432</p>
            <p>info@bonhotels.com</p>
          </div>
        </div>
        <div className='center'>
          <div className='links'>
            <a href='#'>Our Hotels</a>
            <a href='#'>Our Conferencing</a>
            <a href='#'>Our Company</a>
            <a href='#'>Hotel Design</a>
            <a href='#'>Careers</a>
          </div>
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
