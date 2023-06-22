import cn from "@/app/_utils/cn";
import "./globals.css";
import { Bellefair, Barlow_Condensed } from "next/font/google";

const bellefair = Bellefair({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--bellefair-font",
});
const barlowCondensed = Barlow_Condensed({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--barlow-condensed-font",
});

export const metadata = {
  title: "Space tourism",
  description: "Space tourism multi-page application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(bellefair.variable,barlowCondensed.variable,'font-barlow_condensed bg-primary')}>{children}</body>
    </html>
  );
}
