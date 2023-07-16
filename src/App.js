import logo from "./logo.svg";
import "./App.css";

import { MapContainer, Marker, TileLayer, Popup, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon5 from "./icons/pig.png";
import icon3 from "./icons/tyrannosaurus.png";
import icon4 from "./icons/pig3.png";
import icon2 from "./icons/dinosaur.png";

function App() {
  const getIcon = (day) => {
    let icon;
    switch (day) {
      case 2:
        icon = icon2;
        break;
      case 3:
        icon = icon3;
        break;
      case 4:
        icon = icon4;
        break;
      case 5:
        icon = icon5;
        break;
    }

    return icon;
  };

  const sites = [
    { day: 2, position: [48.8606, 2.3376], desc: "Luwr" },
    { day: 2, position: [48.8719, 2.3314], desc: "Opera Garnier" },
    { day: 2, position: [48.8729, 2.7754], desc: "Sklep Disneya" },
    { day: 3, position: [48.8867, 2.3431], desc: "Sacre-Coeur" },
    { day: 3, position: [48.8738, 2.295], desc: "Łuk Triumfalny" },
    { day: 3, position: [48.8615, 2.3325], desc: "Le Cafe Marly" },
    { day: 3, position: [48.8843, 2.3323], desc: "Moulin Rouge" },
    {
      day: 4,
      position: [48.8656, 2.3052],
      desc: "Avenue Montaigne - shopping",
    },
    { day: 4, position: [48.8671, 2.3103], desc: "L’Avenue - lunch stop" },
    { day: 4, position: [48.8574, 2.3003], desc: "Avenue Rapp" },
    {
      day: 4,
      position: [48.8602, 2.297],
      desc:
        "Musée du Quai Branly - ładna ściana - 53 ziko za wystawę czasowa i stała Disney navette by Easieroad",
    },
    { day: 5, position: [48.8462, 2.3467], desc: "Panteon" },
    { day: 5, position: [48.8462, 2.3372], desc: "Luxembourg Gardens" },
    {
      day: 5,
      position: [48.8417, 2.3228],
      desc: "Montparnasse Tower - 13,50€",
    },
    {
      day: 5,
      position: [48.8566, 2.3129],
      desc: "Les Invalides and Tomb of Napoleon Bonaparte",
    },
    {
      day: 5,
      position: [48.8661, 2.3139],
      desc: "Petit Palais and Grand Palais",
    },
    { day: 5, position: [48.8738, 2.295], desc: "Łuk triumfalny" },
    { day: 5, position: [48.8635, 2.3278], desc: "Jardin des Tuileries" },
    {
      day: 5,
      position: [48.8637, 2.3225],
      desc: "Musée de l’Orangerie - Free of charge Reservation",
    },
    { day: 5, position: [48.8614, 2.3933], desc: "Pere Lachaise Cemetery" },
    { day: 5, position: [48.8574, 2.3589], desc: "Musée Carnavalet" },
    { day: 5, position: [48.8648, 2.3365], desc: "Palais Royal" },
    { day: 5, position: [48.8867, 2.3431], desc: "Place du Tertre" },
    { day: 5, position: [48.8465, 2.3447], desc: "Quartier Latin" },
    { day: 5, position: [48.8599, 2.3262], desc: "Musée d’Orsay" },
    { day: 5, position: [48.8572, 2.3546], desc: "Marais" },
    { day: 5, position: [48.8558, 2.3449], desc: "Katedra Sainte-Chapelle" },
    { day: 5, position: [48.8626, 2.287], desc: "Wzgórze Trocadéro" },
  ];

  return (
    <div className="App" style={{ display: "flex" }}>
      <div style={{ height: "100vh", width: "70%" }}>
        <MapContainer
          center={[48.856, 2.352]}
          zoom={13}
          style={{ height: "inherit" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors"
          />
          {sites.map(({ day, position, desc }) => {
            return (
              <Marker
                position={position}
                icon={L.icon({
                  iconUrl: getIcon(day),
                  iconSize: [40, 40], // Adjust the size of the icon based on your image
                  iconAnchor: [12, 41], // Adjust the anchor point of the icon based on your image
                })}
              >
                <Tooltip>
                  day: {day}, {desc}
                </Tooltip>
              </Marker>
            );
          })}
        </MapContainer>
      </div>

      <section>
        <h2>Plan wycieczki:</h2>
        <h3>Day 1: Arrival and Explore the Neighborhood</h3>
        <ul>
          <li>Arrive in Paris and check into your accommodation.</li>
          <li>
            Spend the afternoon exploring the neighborhood where you're staying.
            Take a walk, find a local café, and get acquainted with the
            surroundings.
          </li>
        </ul>
        <h3>Day 2: Historic Paris</h3>
        <ul>
          <li>Louvre Museum: [48.8606, 2.3376]</li>
          <li>Opera Garnier: [48.8719, 2.3314]</li>
          <li>Sacre-Coeur: [48.8867, 2.3431]</li>
          <li>Łuk Triumfalny: [48.8738, 2.2950]</li>
          <li>Le Cafe Marly: [48.8615, 2.3325]</li>
          <li>Moulin Rouge: [48.8843, 2.3323]</li>
        </ul>
        <h3>Day 3: Tour de France Finish and Eiffel Tower</h3>
        <ul>
          <li>
            Tour de France Finish (Location may vary depending on the race
            schedule)
          </li>
          <li>Eiffel Tower: [48.8584, 2.2945]</li>
          <li>Avenue Montaigne - shopping: [48.8656, 2.3052]</li>
          <li>L'Avenue - lunch stop: [48.8671, 2.3103]</li>
          <li>Avenue Rapp: [48.8574, 2.3003]</li>
          <li>Musée du Quai Branly: [48.8602, 2.2970]</li>
        </ul>
        <h3>Day 4: Landmarks and Museums</h3>
        <ul>
          <li>Panteon: [48.8462, 2.3467]</li>
          <li>Luxembourg Gardens: [48.8462, 2.3372]</li>
          <li>Montparnasse Tower: [48.8417, 2.3228]</li>
          <li>
            Les Invalides and Tomb of Napoleon Bonaparte: [48.8566, 2.3129]
          </li>
          <li>Petit Palais and Grand Palais: [48.8661, 2.3139]</li>
          <li>Łuk triumfalny: [48.8738, 2.2950]</li>
          <li>Jardin des Tuileries: [48.8635, 2.3278]</li>
          <li>Musée de l'Orangerie: [48.8637, 2.3225]</li>
          <li>Père Lachaise Cemetery: [48.8614, 2.3933]</li>
          <li>Musée Carnavalet: [48.8574, 2.3589]</li>
          <li>Palais Royal: [48.8648, 2.3365]</li>
          <li>Place du Tertre: [48.8867, 2.3431]</li>
          <li>Quartier Latin: [48.8465, 2.3447]</li>
          <li>Musée d'Orsay: [48.8599, 2.3262]</li>
          <li>Marais: [48.8572, 2.3546]</li>
          <li>Katedra Sainte-Chapelle: [48.8558, 2.3449]</li>
          <li>Wzgórze Trocadéro: [48.8626, 2.2870]</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
