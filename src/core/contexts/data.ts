import { beef } from "../../../public/images";
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
    { id: 1, image: beef, category: Category.Meat, name: "beef" },
    { id: 2, image: beef, category: Category.Meat, name: "chicken" },
    { id: 3, image: beef, category: Category.Meat, name: "pork" },
    { id: 4, image: beef, category: Category.Meat, name: "lamb" },
    { id: 5, image: beef, category: Category.Meat, name: "fish" },
    { id: 6, image: beef, category: Category.Meat, name: "shrimp" },
    { id: 7, image: beef, category: Category.Meat, name: "crab" },

    { id: 11, image: beef, category: Category.Fruits, name: "apple" },
    { id: 12, image: beef, category: Category.Fruits, name: "orange" },
    { id: 13, image: beef, category: Category.Fruits, name: "watermelon" },
    { id: 14, image: beef, category: Category.Fruits, name: "mango" },

    { id: 21, image: beef, category: Category.Vegatables, name: "carrot" },
    { id: 22, image: beef, category: Category.Vegatables, name: "potato" },
    { id: 23, image: beef, category: Category.Vegatables, name: "tomato" },
    {
        id: 24,
        image: beef,
        category: Category.Vegatables,
        name: "morning glory",
    },

    { id: 31, image: beef, category: Category.Dairy, name: "milk" },
    { id: 32, image: beef, category: Category.Dairy, name: "cheese" },
    { id: 33, image: beef, category: Category.Dairy, name: "cream" },

    { id: 41, image: beef, category: Category.Grains, name: "rice" },
    { id: 42, image: beef, category: Category.Grains, name: "wheat" },
    { id: 43, image: beef, category: Category.Grains, name: "corn" },
    { id: 44, image: beef, category: Category.Grains, name: "flour" },

    { id: 51, image: beef, category: Category.Spices, name: "pepper" },
    { id: 52, image: beef, category: Category.Spices, name: "salt" },
    { id: 53, image: beef, category: Category.Spices, name: "paprika" },
];
