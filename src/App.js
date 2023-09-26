import './style/App.css';
import './style/reset.css';

function App() {
  return (
    <div className="App">
      <div className="header container">
        <img src="./img/download_1.png" />
        <div className="menu">
          <li>Our Hotel</li>
          <li>Rooms & Rates</li>
          <li>Facilities</li>
          <li>Contact Us</li>
        </div>
      </div>
      <div className='main'>
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
        </div>
      </div>
    </div>
  );
}

export default App;
