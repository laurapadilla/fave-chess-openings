import { PropsWithChildren } from "react";
import Container from "../Container";
import { Footer } from "./Footer";
import { Inter } from "next/font/google";
import Link from "next/link";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

type LayoutProps = PropsWithChildren;

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Container
        as="header"
        className={inter.className}
        css={{
          background: "black",
          color: "white",
          padding: 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1>Fave Chess Openings</h1>
        <Container css={{ display: "flex", gap: "1rem" }}>
          <Link href="/openings">Openings</Link>
          <Link href="/about">About</Link>
        </Container>
      </Container>
      <Container
        as="main"
        css={{
          background: "#f6f6f6",
          padding: "1rem",
        }}
      >
        {children}
      </Container>
      <Footer />
    </>
  );
}
