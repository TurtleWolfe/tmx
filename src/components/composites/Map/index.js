import { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import raceTracks from "../../../assets/data/test_data.json";
import MultiActionAreaCard from "../../muiCard";

const containerStyle = {
  width: "100%",
  innerHeight: "85vh",
};

const center = {
  lat: 38.608662,
  lng: -77.338432,
};

export default function Map() {
  const [selectedTrack, setSelectedTrack] = useState(null);

  return (
    <div>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={8}>
          {raceTracks.results.map((track) => {
            <Marker
              key={track.place_id}
              position={{
                lat: track.geometry.location.lat,
                lng: track.geometry.location.lng,
              }}
              onClick={() => {
                selectedTrack(track);
              }}
            />;
          })}

          {selectedTrack && (
            <InfoWindow
              position={{
                lat: selectedTrack.geometry.location.lat,
                lng: selectedTrack.geometry.location.lng,
              }}
              onCloseClick={() => {
                setSelectedTrack(null);
              }}
            >
              <div>
                {/* <MultiActionAreaCard /> */}
                <h4>selectedTrack.name</h4>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
