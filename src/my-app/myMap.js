import React from 'react';
import { useState, useEffect } from 'react';
// import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
// import 'leaflet-control-geocoder/dist/Control.Geocoder.js';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './myMap.css';
import { Icon } from 'leaflet';
import L from 'leaflet';
import marker1 from './maps-and-flags.png';

const MapComponent = () => {
  const center = [22.715742395115086, 75.87450494485782];

  const markers = [
    { position: [22.715742395115086, 75.87450494485782], content: 'Marker 1' },
    { position: [21.715742395115086, 75.87450494485782], content: 'Marker 2' },
    { position: [23.715742395115086, 75.87450494485782], content: 'Marker 3' },
  ];

  const customIcon = new Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/684/684908.png',
    iconSize: [40, 45], // size of the icon
    iconAnchor: [22, 45], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -30],
  });
  return (
    <div style={{}} className="map-container">
      <MapContainer
        center={center}
        zoom={8}
        zoomControl={false}
        style={{ height: '100%', width: '100%' }}
        icon={customIcon}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <ZoomControl position="bottomright" />
        {markers.map((marker) => (
          <Marker position={marker.position} icon={customIcon}>
            <Popup>{marker.content}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

// L.Marker.prototype.options.icon = defaultIcon;
export default MapComponent;
