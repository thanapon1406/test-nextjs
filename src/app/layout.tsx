import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import Header from "./layout/navbar";
import Footer from "./layout/footer";

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  subsets: ["latin", "thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FarmEyes",
  description: "Axons FarmEyes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ibmPlexSansThai.className}>
        <Header />
        <div className="flex flex-col">
          <div className="content min-h-screen">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
