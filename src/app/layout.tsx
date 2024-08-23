import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Motion from "@/components/ui/Motion";

import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "./default.css";
import "./main.css";
import "./responsive.css";


export const metadata: Metadata = {
  title: "Create Next App",
  description: 'Generated by npm create next-app --typescript Developed by 3rudit3',  // Website description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Motion>
          {children}
        </Motion>
        <Footer />
      </body>
    </html>
  );
}
