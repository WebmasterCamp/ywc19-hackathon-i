import { Shop, Item, Ingredient } from '../types';

export const Shops: Shop[] = [
    { id: 1, shopName: 'Cow Grade A', cat: 'meat', rating: 4.5 },
    { id: 2, shopName: 'Veggies', cat: 'vegettable', rating: 4.2 },
];

export const initialItems: Item[] = [
    {
        ingredientId: 1,
        amount: 200,
        price: 2,
        unit: 'kg',
        shopId: 1,
    },
    {
        ingredientId: 2,
        amount: 200,
        price: 2,
        unit: 'kg',
        shopId: 1,
    },
];

export const Ingredients: Ingredient[] = [
    { id: 1, name: 'beef' },
    { id: 2, name: 'chicken' },
    { id: 3, name: 'pork' },
    { id: 4, name: 'lamb' },
    { id: 5, name: 'fish' },
    { id: 6, name: 'shrimp' },
    { id: 7, name: 'crab' },
    { id: 8, name: 'lobster' },
];
