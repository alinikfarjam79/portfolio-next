import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "../components/CustomCursor";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Portfolio",
  description: "My personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
