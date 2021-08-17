
import * as React from 'react';
import { useState } from 'react';
import ReactMapGL, {GeolocateControl, Marker, Popup} from 'react-map-gl';
import RoomIcon from '@material-ui/icons/Room';
import { red } from '@material-ui/core/colors';
import InfoFile from './InfoFile';

const geolocateControlStyle= {
  right: 10,
  top: 10
};

function Map() {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: 400,
    latitude:32.0584,
    longitude: 34.7793,
    zoom:16
  });
  const [showPopup, togglePopup] = React.useState(false);
  const latClick=(e)=>{
    console.log(e)
  }
  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken="pk.eyJ1Ijoia29uZS0xMiIsImEiOiJja3IwYjFiYzUxYmNsMnRwbGpsZGIwazdqIn0.XBzZTbzNnD1BwwMiDRwlFg"
      mapStyle="mapbox://styles/kone-12/ckrnxm9vz3nxg17mo7njjyatn"
      

      onViewportChange={nextViewport => setViewport(nextViewport)
      }
      onClick={latClick}
      
    >
    
  <Marker latitude={32.05731492215807} longitude={34.780587354714925} offsetLeft={-20} offsetTop={-10}>
        <RoomIcon style={{color: 'red'}} onClick= {()=>
        togglePopup(true)}>
         </RoomIcon>

         {/* The long and the lat for Naveshana  */}
         {/* 34.780587354714925, 32.05731492215807 */}
      </Marker>
       {showPopup && <Popup
          latitude={32.0584}
          longitude={34.7793}
          closeButton={true}
          closeOnClick={false}
          onClose={() => togglePopup(false)}
          anchor="top" >
          <div>
            <InfoFile/>
          </div>
        </Popup>}

      
      {/* <GeolocateControl
        style={geolocateControlStyle}
        positionOptions={{enableHighAccuracy: true}}
        trackUserLocation={true}
        auto
      /> */}

    </ReactMapGL>

    
  );
}
export default Map
