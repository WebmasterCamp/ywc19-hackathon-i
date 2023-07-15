'use client';

import { useAppContext } from '@/core/contexts';
import { Autocomplete, Box, Button, TextField } from '@mui';
import { FC } from 'react';

export const Form: FC = () => {
    const { supply } = useAppContext();
    const choices = supply?.map((row) => {
        return {
            label: row.ingredient.name,
            amount: row.amount,
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
                />
                <TextField
                    id="outlined-number"
                    label="Number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Box>
            <Button variant="contained">Order</Button>
        </>
    );
};
