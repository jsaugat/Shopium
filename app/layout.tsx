import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Toasterr } from "react-hot-toast";
import { ReduxProvider } from "@/store/provider";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-geist`}
      >
        <SessionProvider session={session}>
          <ReduxProvider>
            <Toaster />
            <Toasterr />
            {/* <CreateNewStoreModal /> */}
            {children}
          </ReduxProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
