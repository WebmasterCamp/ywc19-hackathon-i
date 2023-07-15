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

export type Supply = Item[] | null;
