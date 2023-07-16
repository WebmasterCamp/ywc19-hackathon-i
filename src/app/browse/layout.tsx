import "$styles/globals.css";
import { Metadata } from "next";
import { Box } from "@mui";
import { SearchBar } from "@/components/Browse";

export const metadata: Metadata = {
    title: "Browse items",
    description: "dksnd",
};

interface BrowseLayoutProps {
    children: React.ReactNode;
}

export default function BrowseLayout({ children }: BrowseLayoutProps) {
    return (
        <>
            <Box
                sx={{
                    width: "100vw",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 1,
                }}
            >
                <SearchBar />
                {children}
            </Box>
        </>
    );
}
