"use client";

import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import StyledComponentsRegistry from "@/../lib/registry";
import { ThemeProvider } from "styled-components";
import { Header } from "@/widgets/header/index";
import { Footer } from "@/widgets/footer/index";
import GlobalStyle from "@/shared/lib/styles/globalStyle";
import * as theme from "@/shared/lib/styles/theme";

const noto = Noto_Sans_KR({
  subsets: ["latin"], // 또는 preload: false
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <ThemeProvider theme={theme}>
          <GlobalStyle theme={theme} />
          <StyledComponentsRegistry>
            <Header />
            <main>{children}</main>
            <Footer />
          </StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
