import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';


import Image from "next/image";
import { 
   SearchIcon,
   GlobeAltIcon,
   UserCircleIcon,
   UsersIcon,
   MenuIcon,
 } from "@heroicons/react/solid";
 import {useState} from "react";
import { useRouter } from 'next/router';

function Header({placeholder}) {
  const [searchInput, setsearchInput] = useState("");
  const [startDate, setstartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();
  const handleSelect = (ranges)=>{
    setstartDate(ranges.selection.startDate);
    setendDate(ranges.selection.endDate);
  }
  const resetInput=()=>{
    setsearchInput("");
  }
  const search = ()=>{
    router.push({
      pathname:"/search",
      query:{
        location:searchInput,
        startDate:startDate.toISOString(),
        endDate:endDate.toISOString(),
        noOfGuests,
      },
    });
  };

  const selectionRange={
    startDate:startDate,
    endDate:endDate,
    key:'selection'

  }
  // bg white is changed
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white  shadow-md py-5 px-5 md:px-10">
      {/* left */}
      <div onClick={()=>router.push("/")} className="relative flex items-center h-10 cursor-pointer my-auto active:animate-ping">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
     
        <input
          value={searchInput}
          onChange={(e)=> setsearchInput(e.target.value)}
          className="flex-grow  pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder={placeholder || " Where are you going ?" }
         
        />
       
         <SearchIcon className=" overflow-visible inline-flex h-8 bg-red-400 text-white rounded-full sm:p-2 cursor-pointer md:mx-2 " /> 
      </div>
      {/* right */}
      <div className="hidden md:flex  items-center space-x-4 justify-end text-gray-500 " >
         <p className="hidden md:inline cursor-pointer">Saifur Rahman&apos;s Build</p>
          <GlobeAltIcon className="h-6 cursor-pointer hover:animate-spin"/>

          <div className=" hidden md:flex items-center space-x-2 border-2 p-2 rounded-full">
             <MenuIcon className="h-6" />
             <UserCircleIcon className="h-6" />
          </div>
      </div>
      {/* block w-full   sm:w-100 sm:mx-auto */}
      {/*flex flex-col col-span-3 one change in style sm:mxauto  and overflow and m-0 scrollbar-hide....  overflow-scroll m-0  scrollbar-hide*/}
      {searchInput && 
      <div
      className="flex flex-col col-span-3 mx-auto  ">
       <div className='hidden sm:flex'>
        <DateRangePicker  
           ranges={[selectionRange]}
           minDate={new Date()}
           rangeColors={["#FD5B61"]}
           onChange={handleSelect}
           

         
           />
           </div>
  

       
          
           <div className='flex items-center border-b mb-4'>
             <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>
             <UsersIcon className='h-5 pl-5'/>
             <input
             value={noOfGuests}
             onChange={(e)=>{ 
               setNoOfGuests(e.target.value)
             }
             }
             type="number" min={1} className='w-12 pl-2 text-lg outline-none text-red-400'/>           
           
           </div>
           <div className='flex'>
             <button onClick={resetInput} className='flex-grow text-gray-500'>Cancel</button>
             <button onClick={search} className='flex-grow text-red-400'>Search</button>
           </div>
        
        </div>}
    </header>
  );
}

export default Header;





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