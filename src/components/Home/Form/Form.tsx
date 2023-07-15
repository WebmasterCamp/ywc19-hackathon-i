'use client';

import { useAppContext } from '@/core/contexts';
import { Autocomplete, Box, Button, TextField } from '@mui';
import { FC, useState } from 'react';

export const Form: FC = () => {
    const { supply, orderItems } = useAppContext();
    const [itemId, setItemId] = useState<number>(0);
    const [amount, setAmount] = useState<number>(0);

    const choices =
        supply &&
        supply[0].items.map((row) => {
            return {
                label: row.ingredient.name,
                amount: row.amount,
                itemId: row.ingredient.id,
            };
        });
    return (
        //future do forms with many items
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
                onClick={() => orderItems(0, itemId, amount)}
            >
                Order
            </Button>
        </>
    );
};
