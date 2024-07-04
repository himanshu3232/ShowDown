import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "../redux/ReduxProvider";
import DashBoard from "@/components/DashBoard";
import ProvideTheme from "../components/ProvideTheme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Showdown",
  description: "Battle against foes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <ProvideTheme>
            <DashBoard />
            {children}
          </ProvideTheme>
        </ReduxProvider>
      </body>
    </html>
  );
}
