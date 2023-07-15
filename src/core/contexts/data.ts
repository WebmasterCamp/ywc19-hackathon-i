import { Supply, Shop, Item, Ingredient } from '../types';

export const Shops: Shop[] = [
    { id: 1, shopName: 'Cow Grade A', cat: 'meat', rating: 4.5 },
    { id: 2, shopName: 'Veggies', cat: 'vegettable', rating: 4.2 },
];

export const Items: Item[] = [
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

export const initialSupply: Supply[] = [
    // {
    //     shopId: 1,
    //     items: [
    //         {
    //             ingredient: { id: 1, name: 'shop 1 veg' },
    //             amount: 200,
    //             price: 2,
    //             unit: 'as',
    //         },
    //     ],
    // },
    // {
    //     shopId: 2,
    //     items: [
    //         {
    //             ingredient: { id: 1, name: 'shop 2 veg' },
    //             amount: 200,
    //             price: 2,
    //             unit: 'as',
    //         },
    //     ],
    // },
];
