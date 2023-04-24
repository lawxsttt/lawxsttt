import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styled from "styled-components";
import 'leaflet/dist/leaflet.css'


const MapContent = styled(MapContainer)`
    
    height: 30rem;
`


const MapComponent = () => {
    const position = [41.272141, 69.232073 ]
    return(
  <MapContent center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContent>
)
}

export default MapComponent