export interface Ingredient {
    id: number;
    name: string;
}

export interface Item {
    ingredientId: number;
    amount: number;
    price: number;
    unit: string;
    shopId: number;
}

export interface Shop {
    id: number;
    shopName: string;
    cat: string;
    rating: number;
}

export interface Supply {
    shopId: number;
    items: Item[];
}
