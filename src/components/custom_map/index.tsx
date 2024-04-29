// "use client";
// import React, { useEffect } from "react";
// import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
// import { useGlobalContext } from "@/providers/globalContext";
// import "leaflet/dist/leaflet.css";
// import { Skeleton } from "../ui/skeleton";

// type CurrentCityProps = {
//   cityCoords: [number, number];
// };

// export function NavigateToCurrentCity({
//   currentCityCoords,
// }: CurrentCityProps) {
//   const map = useMap();

//   useEffect(() => {
//     if (currentCityCoords?.lat && currentCityCoords?.lon) {
//       const zoomLevel = 13;
//       const flyToOptions = {
//         duration: 1.5,
//       };
//       map.flyTo(
//         [currentCityCoords.lat, currentCityCoords.lon],
//         zoomLevel,
//         flyToOptions
//       );
//     }
//   }, [currentCityCoords, map]);
//   return null;
// }

// export default function CustomMap() {
//   const { forecast } = useGlobalContext();
//   const currentCoordinate = forecast?.coord;
//   console.log(currentCoordinate);

//   if (!currentCoordinate) {
//     return <Skeleton className="h-[31rem] w-full"></Skeleton>;
//   }

//   return (
//     <div className="h-[31rem] rounded-md -z-[9999]">
//       <MapContainer
//         center={[currentCoordinate.lon, currentCoordinate.lat]}
//         zoom={13}
//         scrollWheelZoom={false}
//         style={{ height: "100%", width: "calc(100%+12rem)" }}
//         className="rounded-md"
//       >
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         {/* <Marker position={[currentCoordinate.lon, currentCoordinate.lat]}>
//           <Popup>
//             A pretty CSS3 popup. <br /> Easily customizable.
//           </Popup>
//         </Marker> */}
//         <NavigateToCurrentCity
//           currentCityCoords={currentCoordinate}
//           zoomLevel={13}
//           flyToOptions={{ duration: 1.5 }}
//         />
//       </MapContainer>
//     </div>
//   );
// }


"use client";
import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { useGlobalContext } from "@/providers/globalContext";
import "leaflet/dist/leaflet.css";
import { Skeleton } from "../ui/skeleton";
import { LatLngTuple } from "leaflet";

interface NavigateToCurrentCityProps {
  currentCityCoords: LatLngTuple | null;
}

const NavigateToCurrentCity: React.FC<NavigateToCurrentCityProps> = ({
  currentCityCoords,
}) => {
  const map = useMap();

  useEffect(() => {
    if (currentCityCoords) {
      const zoomLevel = 14;
      const flyToOptions = { duration: 1.5 };
      map.flyTo(currentCityCoords, zoomLevel, flyToOptions);
    }
  }, [currentCityCoords, map]);

  return null;
};

const CustomMap: React.FC = () => {
  const { forecast } = useGlobalContext();
  const currentCoordinate = forecast?.coord;

  if (!currentCoordinate) {
    return <Skeleton className="h-[31rem] w-full" />;
  }

  const { lat, lon } = currentCoordinate;
  const currentCityCoords: LatLngTuple = [lat, lon];

  return (
    <div className="h-[18rem] md:h-[31rem] rounded-md -z-[9999]">
      <MapContainer
        center={currentCityCoords}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "calc(100%+12rem)" }}
        className="rounded-md"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <NavigateToCurrentCity currentCityCoords={currentCityCoords} />
      </MapContainer>
    </div>
  );
};

export default CustomMap;
