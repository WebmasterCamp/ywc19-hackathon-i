export interface Ingredient {
    id: number;
    category: Category;
    name: string;
}

export enum Category {
    Meat = "meat",
    Vegatables = "vegetables",
    Fruits = "fruits",
    Grains = "grains",
    Dairy = "dairy",
    Spices = "spices",
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
    rating: number;
}

export interface Order {
    ingredientId: number;
    amount: number;
    price: number;
}
