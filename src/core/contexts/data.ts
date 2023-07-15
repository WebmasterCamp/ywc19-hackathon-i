import { Supply, Shop } from '../types';

export const Shops: Shop[] = [
    { id: 1, shopName: 'Cow Grade A', cat: 'meat', rating: 4.5 },
    { id: 2, shopName: 'Veggies', cat: 'vegettable', rating: 4.2 },
];

export const initialSupply: Supply[] = [
    {
        shopId: 1,
        items: [
            {
                ingredient: { id: 1, name: 'shop 1 veg' },
                amount: 200,
                price: 2,
                unit: 'as',
            },
        ],
    },
    {
        shopId: 2,
        items: [
            {
                ingredient: { id: 1, name: 'shop 2 veg' },
                amount: 200,
                price: 2,
                unit: 'as',
            },
        ],
    },
];
