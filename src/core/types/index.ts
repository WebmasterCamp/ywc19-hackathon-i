export interface Shop {
    id: number;
    name: string;
    food: Food[];
}

export interface Food {
    name: string;
    amount: number;
}

export interface Marker {
    lat: number;
    lng: number;
    shodId: number;
}
