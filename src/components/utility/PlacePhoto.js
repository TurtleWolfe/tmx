export default function PlacePhoto(photo_reference, maxPicHeight) {
  const startUrl =
    "https://maps.googleapis.com/maps/api/place/photo?maxheight=" +
    maxPicHeight +
    "&photo_reference=";
  var endUrl = "&key=" + process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const finalUrl = startUrl + photo_reference + endUrl;

  return finalUrl;
}
