import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
  Heading,
  Hr,
} from "@react-email/components";

interface AdminNotificationEmailProps {
  customerEmail: string;
  joinedAt: string;
}

const AdminNotificationEmail = ({
  customerEmail,
  joinedAt,
}: AdminNotificationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New waitlist signup: {customerEmail}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>New Waitlist Signup</Heading>
          <Hr style={divider} />
          <Section>
            <Text style={label}>Email</Text>
            <Text style={value}>{customerEmail}</Text>
            <Text style={label}>Signed up at</Text>
            <Text style={value}>{joinedAt}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default AdminNotificationEmail;

const main = {
  backgroundColor: "#f4f4f5",
  padding: "20px",
  fontFamily: "Arial, sans-serif",
};

const container = {
  backgroundColor: "#ffffff",
  maxWidth: "500px",
  margin: "0 auto",
  padding: "32px",
  borderRadius: "8px",
};

const heading = {
  fontSize: "20px",
  color: "#111827",
  marginBottom: "8px",
};

const divider = {
  borderColor: "#e5e7eb",
  margin: "16px 0",
};

const label = {
  fontSize: "12px",
  color: "#6b7280",
  margin: "0 0 4px 0",
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
};

const value = {
  fontSize: "15px",
  color: "#111827",
  margin: "0 0 16px 0",
  fontWeight: "600",
};
