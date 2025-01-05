import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { Suspense } from "react";
import StoreProvider from "@/state/redux";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Upskill",
  description: "Learning Management Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          unsafe_disableDevelopmentModeWarnings: true,
        },
      }}
    >
      <html lang="en">
        <body className={`${dmSans.className}`}>
          <StoreProvider>
            <Suspense fallback={null}>
              <div className="root-layout">{children}</div>
            </Suspense>
            <Toaster richColors closeButton />
          </StoreProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
