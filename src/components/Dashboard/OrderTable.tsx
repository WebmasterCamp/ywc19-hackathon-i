"use client";

import { useAppContext } from "@/core/contexts";
import { Ingredients } from "@/core/contexts/data";
import {
    Paper,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from "@mui";
import { FC } from "react";

export const OrderTable: FC = () => {
    const { orders } = useAppContext();

    return (
        <TableContainer component={Paper}>
            <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
            >
                <TableHead>
                    <TableRow>
                        <TableCell>Ingredient Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Amount</TableCell>
                        <TableCell align="right">Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                {row.ingredientId}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {
                                    Ingredients.find(
                                        (i) => i.id === row.ingredientId
                                    )?.name
                                }
                            </TableCell>
                            <TableCell align="right">{row.amount}</TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
