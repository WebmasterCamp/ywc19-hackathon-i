'use client';

import { useAppContext } from '@/core/contexts';
import { Ingredients } from '@/core/contexts/data';
import { Autocomplete, Box, Button, TextField } from '@mui';
import { FC, useState } from 'react';

export const Form: FC = () => {
    const { items, orderItems } = useAppContext();
    const [itemId, setItemId] = useState<number>(0);
    const [amount, setAmount] = useState<number>(0);

    const choices = items.map((row) => {
        return {
            label:
                Ingredients.find((i) => i.id === row.ingredientId)?.name ?? '',
            amount: row.amount,
            itemId: row.ingredientId,
        };
    });
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    columnGap: 10,
                    rowGap: 4,
                    marginBottom: 5,
                }}
            >
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={choices ?? []}
                    sx={{ width: 300 }}
                    renderInput={(params) => (
                        <TextField {...params} label="Item" />
                    )}
                    onChange={(event, newValue) =>
                        setItemId(newValue?.itemId ?? 0)
                    }
                />
                <TextField
                    id="outlined-number"
                    label="Number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(event) =>
                        setAmount(parseInt(event.target.value))
                    }
                />
            </Box>
            <Button
                variant="contained"
                onClick={() => orderItems(1, itemId, amount)}
            >
                Order
            </Button>
        </>
    );
};
