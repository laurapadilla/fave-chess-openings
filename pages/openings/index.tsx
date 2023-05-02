import { Container } from "../../components";
import { OpeningCard } from "../../OpeningCard";
import { client } from "../../lib/contentful/client";

export default function Openings({ openings }) {
  return (
    <Container>
      {openings.map((opening, index) => (
        <OpeningCard key={opening.fields.slug} opening={opening} />
      ))}
    </Container>
  );
}

export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: "opening" });

  return {
    props: {
      openings: response.items,
      revalidate: 60,
    },
  };
};
