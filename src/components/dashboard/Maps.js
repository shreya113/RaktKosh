import React, { Component } from 'react';
//import { GoogleMap } from "react-google-maps";



const Maps = ({ placeName }) => {
    const googleMapRef = useRef();
    let googleMap;
    useEffect(() => {
      const googleMapScript = document.createElement("script");
      googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&libraries=places`;
      googleMapScript.async = true;
      window.document.body.appendChild(googleMapScript);
      googleMapScript.addEventListener("load", () => {
        getLatLng();
      });
    }, []);
  
    const createGoogleMap = (coordinates) => {
      googleMap = new window.google.maps.Map(googleMapRef.current, {
        zoom: 16,
        center: {
          lat: coordinates.lat(),
          lng: coordinates.lng(),
        },
        disableDefaultUI: true,
      });
    };
    const getLatLng = () => {
      let lat, lng, placeId;
      new window.google.maps.Geocoder().geocode(
        { address: `${placeName}` },
        function (results, status) {
          if (status === window.google.maps.GeocoderStatus.OK) {
            placeId = results[0].place_id;
            createGoogleMap(results[0].geometry.location);
            lat = results[0].geometry.location.lat();
            lng = results[0].geometry.location.lng();
            new window.google.maps.Marker({
              position: { lat, lng },
              map: googleMap,
              animation: window.google.maps.Animation.DROP,
              title: `${placeName}`,
            });
          } else {
            alert(
              "Geocode was not successful for the following reason: " + status
            );
          }
        }
      );
    };
    return (
      <div
        id="google-map"
        ref={googleMapRef}
        style={{ width: "400px", height: "300px" }}
      />
    );
  };
  