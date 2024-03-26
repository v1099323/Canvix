import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";


mapboxgl.accessToken =
  "pk.eyJ1IjoidmlvbGV0dGxpcyIsImEiOiJjbHRudG0yYTgwODJhMnFyeXU2bHJxYmx6In0.ifqZRpOT9q_Vd3bawjU69w"; // Замените на ваш Mapbox access token

const idMap = document.getElementById("map");

const coordinates = [82.933952, 55.018803] // Longitude and Latitude

if (idMap) {
  const map = new mapboxgl.Map({
    container: "map", // id элемента HTML, в котором будет отображаться карта
    style: "mapbox://styles/mapbox/streets-v11", // стиль карты
    center: coordinates, // начальные координаты центра карты: долгота, широта
    zoom: 12, // начальный уровень масштабирования
    cooperativeGestures: true,
  });

  map.on("load", function () {
    const popup = new mapboxgl.Popup({ offset: 25 }).setText(
      "Information about this location"
    ); // текст попапа
  
    const markerWithPopup = new mapboxgl.Marker()
      .setLngLat(coordinates)
      .setPopup(popup) // связываем попап с маркером
      .addTo(map);
  });

  // const popup = new mapboxgl.Popup({ offset: 25 }).setText(
  //   "Information about this location"
  // ); // текст попапа

  // const markerWithPopup = new mapboxgl.Marker()
  //   .setLngLat([-74.5, 40])
  //   .setPopup(popup) // связываем попап с маркером
  //   .addTo(map);
}
