export interface Ingredient {
    id: number;
    name: string;
}

export interface Item {
    ingredient: Ingredient;
    amount: number;
    price: number;
    unit: string;
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
    amount: number;
    price: number;
    unit: string;
}
