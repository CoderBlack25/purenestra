import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

type WaitlistEmailProps = {
  email: string;
};

const WaitlistEmail = ({ email }: WaitlistEmailProps) => {
  return (
    <Html>
      <Head />

      <Preview>New waitlist signup</Preview>

      <Body
        style={{
          backgroundColor: "#f6f6f6",
          fontFamily: "Arial, sans-serif",
          padding: "40px 0",
        }}
      >
        <Container
          style={{
            backgroundColor: "#ffffff",
            padding: "32px",
            borderRadius: "12px",
          }}
        >
          <Section>
            <Heading
              style={{
                fontSize: "24px",
                marginBottom: "20px",
              }}
            >
              New Waitlist Signup
            </Heading>

            <Text
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              A new user joined the waitlist.
            </Text>

            <Text
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginTop: "20px",
              }}
            >
              {email}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default WaitlistEmail;
