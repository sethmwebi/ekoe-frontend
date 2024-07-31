"use client";
import MapComponent from "./map-component";
import ReactUs from "./reach-us";

const Contact = () => {
  const location = {
    lat: -1.173602,
    lng: 36.928314
  };

  return (
    <div className="container mt-14">
      <MapComponent location={location} />
      <ReactUs />
    </div>
  );
};

export default Contact;
