"use client";

import { useAppContext } from "@/core/contexts";
import { TextField } from "@mui";
import { FC } from "react";

export const SearchBar: FC = () => {
    const { setSearchText } = useAppContext();
    return (
        <TextField
            sx={{ width: "95%", marginBottom: 2 }}
            id="outlined-basic"
            variant="outlined"
            placeholder="Search"
            onChange={(e) => setSearchText(e.target.value)}
        />
    );
};
