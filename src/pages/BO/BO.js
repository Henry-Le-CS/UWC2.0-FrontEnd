
import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import "./Bo.css"

const containerStyle = {
  width: '100%',
  height: '100vh'
};

const center = {
  lat: 10.772792707928192,
  lng: 106.6577516415506
};

//10.772792707928192, 106.6577516415506

function BO() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAn7zRwQZC0MNs2kQIf8ATBBSW2ZzLXCtw"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <div>
      <h1>BO Site</h1>
      <div className="map">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={16}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <Marker
            position={center}
          />
          <></>
        </GoogleMap>
      </div>
    </div>
  ) : <></>
}

export default BO
