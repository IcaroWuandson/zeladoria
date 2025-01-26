"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Container from "@/components/Container";
import { HeaderWelcome } from "@/components/HeaderWelcome";
import L from "leaflet";

const customIcon = L.icon({
  iconUrl: "/assets/map-pin.png",
  iconSize: [20, 20],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

export default function Mapa() {
  const userLocations = [
    { id: 1, name: "Buraco na estrada", lat: -5.092045, lng: -42.803759 },
    { id: 2, name: "Árvore caída", lat: -5.093368, lng: -42.800564 },
    { id: 3, name: "Poste inclinado", lat: -5.094121, lng: -42.811785 },
    { id: 4, name: "Vazamento de água", lat: -5.091768, lng: -42.815632 },
    { id: 5, name: "Sinalização danificada", lat: -5.089223, lng: -42.806987 },
    { id: 6, name: "Buraco na estrada", lat: -5.088472, lng: -42.800243 },
    { id: 7, name: "Árvore caída", lat: -5.087789, lng: -42.809612 },
    { id: 8, name: "Poste inclinado", lat: -5.096158, lng: -42.805643 },
    { id: 9, name: "Vazamento de água", lat: -5.095436, lng: -42.810453 },
    { id: 10, name: "Sinalização danificada", lat: -5.090854, lng: -42.804231 },
    { id: 11, name: "Buraco na estrada", lat: -5.0805, lng: -42.8201 },
    { id: 12, name: "Árvore caída", lat: -5.1008, lng: -42.8302 },
    { id: 13, name: "Poste inclinado", lat: -5.1107, lng: -42.8104 },
    { id: 14, name: "Vazamento de água", lat: -5.1206, lng: -42.8038 },
    { id: 15, name: "Sinalização danificada", lat: -5.1309, lng: -42.815 },
    { id: 16, name: "Buraco na estrada", lat: -5.0859, lng: -42.799 },
    { id: 17, name: "Árvore caída", lat: -5.0958, lng: -42.8231 },
    { id: 18, name: "Poste inclinado", lat: -5.1054, lng: -42.8093 },
    { id: 19, name: "Vazamento de água", lat: -5.0895, lng: -42.8022 },
    { id: 20, name: "Sinalização danificada", lat: -5.0923, lng: -42.8256 },
    { id: 21, name: "Buraco na estrada", lat: -5.0901, lng: -42.8107 },
    { id: 22, name: "Árvore caída", lat: -5.0944, lng: -42.8011 },
    { id: 23, name: "Poste inclinado", lat: -5.0833, lng: -42.8199 },
    { id: 24, name: "Vazamento de água", lat: -5.0978, lng: -42.8048 },
    { id: 25, name: "Sinalização danificada", lat: -5.0864, lng: -42.8123 },
    { id: 26, name: "Buraco na estrada", lat: -5.0887, lng: -42.808 },
    { id: 27, name: "Árvore caída", lat: -5.0912, lng: -42.8077 },
    { id: 28, name: "Poste inclinado", lat: -5.0955, lng: -42.8173 },
    { id: 29, name: "Vazamento de água", lat: -5.0982, lng: -42.8025 },
    { id: 30, name: "Sinalização danificada", lat: -5.0876, lng: -42.8149 },
  ];

  return (
    <Container>
      <HeaderWelcome />
      <div className="w-full h-[88vh]">
        <MapContainer
          center={[-5.091768, -42.803759]}
          zoom={15}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {userLocations.map((user) => (
            <Marker
              key={user.id}
              position={[user.lat, user.lng]}
              icon={customIcon}
            >
              <Popup>{user.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </Container>
  );
}
