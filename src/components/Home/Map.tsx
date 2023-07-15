'use client';

import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { useMemo } from 'react';
import './Map.css';

export const Map = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey:
            process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_API_KEY ?? '',
    });
    const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

    return (
        <div className="w-[40vw] h-[40vh]">
            {!isLoaded ? (
                <h1>Loading...</h1>
            ) : (
                <GoogleMap
                    mapContainerClassName="map-container"
                    center={center}
                    zoom={10}
                >
                    <Marker
                        position={{ lat: 18.52043, lng: 73.856743 }}
                        icon={
                            'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
                        }
                    />
                </GoogleMap>
            )}
        </div>
    );
};
