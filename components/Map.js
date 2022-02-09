// import { useState } from 'react';
// import ReactMapGL,{Marker,Popup} from 'react-map-gl';
// import  getCenter  from 'geolib/es/getCenter';


// function Map({ searchResults }) {
   
//     const coordinates = searchResults.map((result)=>({
//         longitude:result.long,
//         latitude:result.lat,
//     }));
//     const center = getCenter(coordinates);
//     const [viewport,setViewport] = useState({
//         width:"100%",
//         height:"100%",
//         latitude:center.latitude,
//         longitude:center.longitude,
//         zoom:11
//     });
    
//   return <ReactMapGL mapStyle='mapbox://styles/saifur8285/ckzfev5vz009l14qeejmpky9c'  mapboxAccessToken={process.env.mapbox_key} 
//   {...viewport}
//   onViewportChange={(nextViewport) => setViewport(nextViewport)}
  
  

      
//   ></ReactMapGL>;
// }

// export default Map;
