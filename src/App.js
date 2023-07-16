import logo from './logo.svg';
import './App.css';

import {MapContainer, Marker, TileLayer, Popup, Tooltip} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon5 from './icons/pig.png';
import icon3 from './icons/tyrannosaurus.png';
import icon4 from './icons/pig3.png';
import icon2 from './icons/dinosaur.png';

function App() {

    const getIcon = (day)=>{
        let icon;
        switch(day){
            case 2:
                icon= icon2;
                break;
            case 3:
                icon= icon3;
                break;
            case 4:
                icon= icon4;
                break;
            case 5:
                icon= icon5;
                break;
        }

        return icon
    }


    const sites = [
        {day:2,position:[48.8606, 2.3376],desc:'Louvre Museum'},
        {day:2,position:[48.8529, 2.3499],desc:'Notre-Dame Cathedral'},
        {day:2,position:[48.8550, 2.3471],desc:'Île de la Cité'},
        {day:2,position:[48.8495, 2.3476],desc:'Latin Quarter'},
        {day:3,position:[48.869611, 2.308003],desc:'Tour de France Finish'},
        {day:3,position:[48.8584, 2.2945],desc:'Eiffel Tower'},
        {day:4,position:[48.8720, 2.2977],desc:'Champs-Élysées'},
        {day:4,position:[48.8738, 2.2946],desc:'Arc de Triomphe'},
        {day:4,position:[48.8867, 2.3431],desc:'Montmartre'},
        {day:4,position:[48.8865, 2.3430],desc:'Sacré-Cœur Basilica'},
        {day:5,position:[48.8048, 2.1204],desc:'Palace of Versailles'},
    ]

  return (
    <div className="App" style={{display:"flex"}}>
        <div style={{ height: '100vh',width:'70%' }}>
      <MapContainer center={[48.856, 2.352]} zoom={13} style={{ height: 'inherit' }}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors"
        />
          {sites.map(({day,position,desc})=>{
              return (<Marker position={position} icon={L.icon({
                  iconUrl: getIcon(day),
                  iconSize: [40, 40], // Adjust the size of the icon based on your image
                  iconAnchor: [12, 41], // Adjust the anchor point of the icon based on your image
              })}>
                  <Tooltip>day: {day}, {desc}</Tooltip>
              </Marker>)

          })}

      </MapContainer>
        </div>
        <section>
            <h2>Plan wycieczki:</h2>
            <h3>Day 1: Arrival and Explore the Neighborhood</h3>
            <ul>
                 <li>  Arrive in Paris and check into your accommodation.</li>
                 <li>Spend the afternoon exploring the neighborhood where you're staying. Take a walk, find a local café, and get acquainted with the surroundings.
                 </li>
             </ul>
            <h3>Day 2: Historic Paris</h3>
            <ul>
                <li>Louvre Museum: [48.8606, 2.3376]</li>
                <li>Notre-Dame Cathedral: [48.8529, 2.3499]</li>
                <li> Île de la Cité: [48.8550, 2.3471]</li>
                <li>  Latin Quarter: [48.8495, 2.3476]</li>
            </ul>
            <h3>  Day 3: Tour de France Finish and Eiffel Tower</h3>
            <ul>
                <li>Tour de France Finish (Location may vary depending on the race schedule)</li>
                <li>Eiffel Tower: [48.8584, 2.2945]</li>
            </ul>
            <h3>Day 4: Champs-Élysées and Montmartre</h3>
            <ul>
                <li>Champs-Élysées: [48.8720, 2.2977]</li>
                <li>Arc de Triomphe: [48.8738, 2.2946]</li>
                <li>Montmartre: [48.8867, 2.3431]</li>
                <li>Sacré-Cœur Basilica: [48.8865, 2.3430]</li>
            </ul>
            <h3>Day 5: Versailles Palace</h3>
            <ul>
                <li>Palace of Versailles: [48.8048, 2.1204]</li>
            </ul>
            <h3>Day 6: Departure</h3>
            <ul>
                <li> Departure from your accommodation.</li>
            </ul>
        </section>
    </div>
  );
}

export default App;
