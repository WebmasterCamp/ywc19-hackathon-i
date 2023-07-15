import { Shop, Item, Ingredient } from "../types";
import { Category } from "../types";

export const Shops: Shop[] = [
    { id: 1, shopName: "Cow Grade A", rating: 4.5 },
    { id: 2, shopName: "Veggies", rating: 4.2 },
];

export const initialItems: Item[] = [
    {
        ingredientId: 1,
        amount: 200,
        price: 2,
        unit: "kg",
        shopId: 1,
    },
    {
        ingredientId: 2,
        amount: 200,
        price: 2,
        unit: "kg",
        shopId: 1,
    },
];

export const Ingredients: Ingredient[] = [
    { id: 1, category: Category.Meat, name: "beef" },
    { id: 2, category: Category.Meat, name: "chicken" },
    { id: 3, category: Category.Meat, name: "pork" },
    { id: 4, category: Category.Meat, name: "lamb" },
    { id: 5, category: Category.Meat, name: "fish" },
    { id: 6, category: Category.Meat, name: "shrimp" },
    { id: 7, category: Category.Meat, name: "crab" },

    { id: 11, category: Category.Fruits, name: "apple" },
    { id: 12, category: Category.Fruits, name: "orange" },
    { id: 13, category: Category.Fruits, name: "watermelon" },
    { id: 14, category: Category.Fruits, name: "mango" },

    { id: 21, category: Category.Vegatables, name: "carrot" },
    { id: 22, category: Category.Vegatables, name: "potato" },
    { id: 23, category: Category.Vegatables, name: "tomato" },
    { id: 24, category: Category.Vegatables, name: "morning glory" },

    { id: 31, category: Category.Dairy, name: "milk" },
    { id: 32, category: Category.Dairy, name: "cheese" },
    { id: 33, category: Category.Dairy, name: "cream" },

    { id: 41, category: Category.Grains, name: "rice" },
    { id: 42, category: Category.Grains, name: "wheat" },
    { id: 43, category: Category.Grains, name: "corn" },
    { id: 44, category: Category.Grains, name: "flour" },

    { id: 51, category: Category.Spices, name: "pepper" },
    { id: 52, category: Category.Spices, name: "salt" },
    { id: 53, category: Category.Spices, name: "paprika" },
];
