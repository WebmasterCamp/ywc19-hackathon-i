import "$styles/globals.css";
import { Metadata } from "next";
import { Layout } from "$components/Layout";
import { AppProvider } from "@/core/contexts/appProvider";


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
                
                <AppProvider>
                    <Layout>{children}</Layout>
                </AppProvider>
            </body>
        </html>
    );
}
