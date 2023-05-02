import Container from "../Container";

export function Footer() {
  return (
    <Container
      as="footer"
      css={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        background: "BlanchedAlmond",
        padding: 16,
      }}
    >
      Foooter info!
    </Container>
  );
}
