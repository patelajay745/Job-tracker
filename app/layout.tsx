import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <Header />

          <main className="min-h-screen w-full">{children}</main>

          <Toaster richColors />
        </body>
      </html>
    </ClerkProvider>
  );
}
