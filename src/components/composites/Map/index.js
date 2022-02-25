import { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import raceTracks from "../../../assets/data/test_data.json";
import MultiActionAreaCard from "../../muiCard";
import PlacePhoto from "../../utility/PlacePhoto";

const containerStyle = {
  width: "100vw",
  height: "88vh",
};

const mapCenterAnchor = {
  lat: 38.608662,
  lng: -77.338432,
};

export default function Map() {
  const [selectedTrack, setSelectedTrack] = useState(null);
  return (
    <>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={mapCenterAnchor}
          zoom={8}
        >
          {raceTracks.results.map((track) => (
            <Marker
              key={track.place_id}
              position={{
                lat: track.geometry.location.lat,
                lng: track.geometry.location.lng,
              }}
              onClick={() => {
                setSelectedTrack(track);
              }}
            />
          ))}

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
              <>
                <MultiActionAreaCard
                  mapTitle={selectedTrack.name}
                  mapDescription={selectedTrack.formatted_address}
                  mapImage={PlacePhoto(
                    selectedTrack.photos[0].photo_reference,
                    500
                  )}
                />
              </>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </>
  );
}
