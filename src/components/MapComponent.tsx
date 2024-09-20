import { MapContainer, TileLayer, Polygon, FeatureGroup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import { EditControl } from "react-leaflet-draw";
import { useState } from "react";
import { SketchPicker } from "react-color";
import { LatLngExpression } from "leaflet";

// Coordenadas iniciales de Perú
const position: LatLngExpression = [-9.19, -75.0152];

const MapPeru = () => {
    const [currentColor, setCurrentColor] = useState("#FF0000"); // Color inicial del polígono
    const [coords, setCoords] = useState({ lat: '', lng: '' });

    // Función para cambiar el color usando react-color
    const handleColorChange = (color: any) => {
        setCurrentColor(color.hex);
    };

    return (
        <div className="relative h-full w-full">
            <MapContainer
                center={position}
                zoom={6}
                zoomControl={true}
                className="h-full w-full"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <FeatureGroup>
                    <EditControl
                        position="topright"
                        draw={{
                            rectangle: false,
                            circle: false,
                            circlemarker: false,
                            polyline: false,
                            marker: false,
                            polygon: {
                                allowIntersection: true, // Permitir superposición
                                shapeOptions: {
                                    color: currentColor, // Usar el color actual para el dibujo
                                    fillOpacity: 0.7,
                                },
                            },
                        }}
                    />
                </FeatureGroup>
            </MapContainer>

            <div className="absolute bottom-4 left-4 z-[1000] space-y-4">
                <SketchPicker color={currentColor} onChangeComplete={handleColorChange} />
            </div>
        </div>
    );
};

export default MapPeru;
