import { useEffect, useRef } from "react";

export default function LocationMap() {
  const mapRef = useRef(null);

  useEffect(() => {
    const address = "Unit 2/175 Taren Point Rd, Caringbah NSW 2229";

    const interval = setInterval(async () => {
      if (!window.MAPS_JS_LOADED) {
        return;
      }

      clearInterval(interval);

      const { Map } = await google.maps.importLibrary("maps");
      const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
      const geocoder = new google.maps.Geocoder();

      // 💛 Geocode — converte endereço → coordenadas perfeitas
      geocoder.geocode({ address }, (results, status) => {
        if (status === "OK" && results[0]) {
          const location = results[0].geometry.location;

          const map = new Map(mapRef.current, {
            center: location,
            zoom: 16,
            mapId: "DEMO_MAP_ID",
            disableDefaultUI: true,
          });

          new AdvancedMarkerElement({
            map,
            position: location,
          });
        } else {
          console.error("Erro ao geocodificar endereço:", status);
        }
      });

    }, 200);

    return () => clearInterval(interval);
  }, []);

  return <div ref={mapRef} className="google-map"></div>;
}

