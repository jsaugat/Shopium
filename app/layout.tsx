import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Toasterr } from "react-hot-toast";
import { ReduxProvider } from "@/store/provider";
import { CreateNewStoreModal } from "@/components/modals/CreateNewStoreModal";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Shopium",
  description: "Capstone Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-geist`}
      >
        <Toaster />
        <Toasterr />
        <ReduxProvider>
          {/* 'Create New Store' modal */}
          {/* <CreateNewStoreModal /> */}
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
