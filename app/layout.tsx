import { ReactNode } from "react";
import "./globals.css";
import { geist } from "@/src/fonts";
import StyledComponentsRegistry from "./lib/registry";

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={geist.variable}>
      <head>
        <title>Matchmaking</title>
      </head>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
