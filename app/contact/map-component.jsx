"use client";

import { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useDeviceSize } from "@/utils/useDeviceDimensions";
import { PuffLoader } from "react-spinners";
import { useTheme } from "next-themes";

const MapComponent = ({ location }) => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [error, setError] = useState(null);
  const { theme } = useTheme();

  const [width] = useDeviceSize();

  const mapContainerStyle = {
    width: "100%",
    height: width < 768 ? "250px" : "400px",
  };

  const center = {
    lat: location.lat,
    lng: location.lng,
  };

  const placeName = encodeURIComponent("KM Market");
  const zoomLevel = 11;

  const openGoogleMaps = () => {
    window.open(`https://www.google.com/maps?q=${placeName}&z=${zoomLevel}`);
  };

  const mapOptions = {
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
    styles: [
      {
        elementType: "geometry",
        stylers: [
          {
            color: theme == "dark" ? "#242f3e" : "#f5f5f5",
          },
        ],
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: theme == "dark" ? "#242f3e" : "#f5f5f5",
          },
        ],
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: theme == "dark" ? "#746855" : "#616161",
          },
        ],
      },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: theme == "dark" ? "#d59563" : "#616161",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: theme == "dark" ? "#d59563" : "#757575",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
          {
            color: theme == "dark" ? "#263c3f" : "#e5e5e5",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: theme == "dark" ? "#6b9a76" : "#9e9e9e",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            color: theme == "dark" ? "#38414e" : "#ffffff",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: theme == "dark" ? "#212a37" : "#ffffff",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: theme == "dark" ? "#9ca5b3" : "#757575",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: theme == "dark" ? "#746855" : "#dadada",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: theme == "dark" ? "#1f2835" : "#dadada",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: theme == "dark" ? "#f3d19c" : "#616161",
          },
        ],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [
          {
            color: theme == "dark" ? "#2f3948" : "#90caf9",
          },
        ],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: theme == "dark" ? "#d59563" : "#757575",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: theme == "dark" ? "#17263c" : "#c9c9c9",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: theme == "dark" ? "#515c6d" : "#989898",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: theme == "dark" ? "#17263c" : "#9e9e9e",
          },
        ],
      },
    ],
    zoomControlOptions: {
      // Change the color of the zoom controls here
      backgroundColor: theme === "dark" ? "#000000" : "#ffffff", // Orange color
      borderRadius: "5px", // Border radius
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)", // Box shadow
    },
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      onLoad={() => setMapLoaded(true)}
      onError={() => setError(new Error("Failed to load Google Maps API."))}
      loadingElement={
        <div
          className={`${width < 768 ? "h-[250px]" : "h-[400px]"
            } w-full flex justify-center items-center flex-col`}
        >
          <p className="tracking-widest uppercase text-lg">
            Loading google maps
          </p>
          <PuffLoader color="#ff6700" loading={true} size={24} />
        </div>
      }
    >
      <div
        className={`${width < 768 ? "h-[250px]" : "h-[400px]"
          } w-full relative border`}
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={16}
          options={mapOptions}
        >
          {!error && mapLoaded && <Marker position={center} />}
        </GoogleMap>
        {mapLoaded && (
          <div className="absolute top-2 left-2 dark:bg-[#1d1d1d] bg-[#f5f5fd] border z-[6] py-4 px-5">
            <div className="flex justify-between gap-x-4">
              <div className="flex flex-col">
                <span className="text-lg tracking-wide">Ekoebrand</span>
                <span className="mb-2 md:mb-8 block text-xs md:text-sm">
                  KM Market, Kenyatta University
                </span>
                <span
                  className="text-xs hover:underline cursor-pointer"
                  onClick={openGoogleMaps}
                >
                  view on a larger map
                </span>
              </div>
              <div className="hidden group sm:flex flex-col items-center">
                <span
                  className="text-xs group-hover:underline cursor-pointer"
                  onClick={openGoogleMaps}
                >
                  directions
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </LoadScript>
  );
};

export default MapComponent;
