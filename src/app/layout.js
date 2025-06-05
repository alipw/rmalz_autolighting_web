import { Plus_Jakarta_Sans, Public_Sans, Red_Hat_Text } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans", 
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const redHatText = Red_Hat_Text({
  variable: "--font-red-hat-text",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "RMALZ Auto Lighting - One Stop Light Solution",
  description: "At our workshop, we guarantee customer satisfaction with top-quality motorcycle lighting products that deliver superior performance and reliability every time.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} ${publicSans.variable} ${redHatText.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
