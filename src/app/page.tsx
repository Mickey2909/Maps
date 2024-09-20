"use client"
import dynamic from 'next/dynamic';

// Importar el mapa de manera dinámica para evitar problemas de SSR (Server-Side Rendering)
const MapPeru = dynamic(() => import('../components/MapComponent'), { ssr: false });

export default function Home() {

    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="h-[90vh] w-[90vw] m-4 border-4 border-gray-300 rounded-lg">
                <MapPeru/>
            </div>
        </div>
    );
}
