import { Supply, Shop } from '../types';

export const Shops: Shop[] = [
    { id: 1, shopName: 'Cow Grade A', cat: 'meat', rating: 4.5 },
    { id: 2, shopName: 'Veggies', cat: 'vegettable', rating: 4.2 },
];

export const initialSupply: Supply[] = [
    {
        shopId: 1,
        ingredient: { id: 1, name: 'Flour' },
        amount: 1000,
        price: 12,
        unit: 'g',
    },
    {
        shopId: 2,
        ingredient: { id: 2, name: 'Spring Onion' },
        amount: 1000,
        price: 10,
        unit: 'g',
    },
];
