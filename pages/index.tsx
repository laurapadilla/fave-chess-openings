import Head from "next/head";
import { Inter } from "next/font/google";
import { Container } from "../components";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Fave Chess Openings</title>
        <meta name="description" content="Next JS + Contentful" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container as="section" className={inter.className}>
        Test
      </Container>
    </>
  );
}
