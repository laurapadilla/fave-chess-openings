import Link from "next/link";
import Container from "../Container";

type OpeningCardProps = {
  openingName: string;
  openingType: string;
  slug: string;
};

export function OpeningCard({ opening }) {
  const { openingName, openingType, slug } = opening.fields;

  return (
    <Container>
      <Link href={`/pages/openings/${slug}`}>
        <h3>{openingName}</h3>
        <p>{openingType}</p>
      </Link>
    </Container>
  );
}
