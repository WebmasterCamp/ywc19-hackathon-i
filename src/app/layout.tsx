import "$styles/globals.css";
import { Metadata } from "next";
import { Layout } from "$components/Layout";
import { AppProvider } from "@/core/contexts/appProvider";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/core/contexts/theme";

export const metadata: Metadata = {
    title: "ShareKan",
    description: "ShareKan",
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body
                style={{
                    margin: 0,
                    overflowX: "hidden",
                }}
            >
                <ThemeProvider theme={theme}>
                    <AppProvider>
                        <Layout>{children}</Layout>
                    </AppProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
