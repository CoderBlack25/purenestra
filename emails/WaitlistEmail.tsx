import {
  Body,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Row,
  Column,
} from "@react-email/components";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://www.purenestra.com"
    : "http://localhost:3000";

const WaitlistEmail = () => {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Fraunces"
          fallbackFontFamily="Georgia"
          webFont={{
            url: "https://fonts.gstatic.com/s/fraunces/v37/6NUU8FyLNQOQZAnv9bYEE9Fxfg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />

        <Font
          fontFamily="Plus Jakarta Sans"
          fallbackFontFamily="Arial"
          webFont={{
            url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko20yyghfvaZ-E.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>

      <Preview>Welcome to PureNestra 💚</Preview>

      <Body style={main}>
        <Container style={container}>
          <Section style={logoSection}>
            <Img
              src={`${baseUrl}/email-logo.png`}
              width="180"
              alt="PureNestra"
              style={logo}
            />
          </Section>

          <Section>
            <Img
              src={`${baseUrl}/email-baby.png`}
              width="100%"
              alt="Baby wipes"
              style={heroImage}
            />
          </Section>

          <Section style={contentSection}>
            <Heading style={heading}>
              Welcome to Pure<span style={span}>Nestra</span>
            </Heading>

            <Text style={paragraph}>We’re so happy you’re here.</Text>

            <Text style={paragraph}>
              You’ve officially joined the waitlist to be among the very first
              parents to experience our thoughtfully crafted baby wipes.
            </Text>
          </Section>

          <Section style={benefitsSection}>
            <Heading style={benefitsHeading}>
              As a founding member, here’s what <span style={span}>you’ll</span>{" "}
              get:
            </Heading>

            <Row style={benefitItem}>
              <Column width="68" style={iconColumn}>
                <Img
                  src={`${baseUrl}/gift-icon.png`}
                  width="48"
                  height="48"
                  alt="Gift"
                  style={icon}
                />
              </Column>

              <Column style={benefitTextWrapper}>
                <Text style={benefitTitle}>
                  Early access before public launch
                </Text>

                <Text style={benefitDescription}>
                  Be the first to try PureNestra
                </Text>
              </Column>
            </Row>

            <Row style={benefitItem}>
              <Column width="68" style={iconColumn}>
                <Img
                  src={`${baseUrl}/sample-icon.png`}
                  width="48"
                  height="48"
                  alt="Sample"
                  style={icon}
                />
              </Column>

              <Column style={benefitTextWrapper}>
                <Text style={benefitTitle}>A complimentary sample pack</Text>

                <Text style={benefitDescription}>Our gentle care, on us.</Text>
              </Column>
            </Row>

            <Row style={benefitItem}>
              <Column width="68" style={iconColumn}>
                <Img
                  src={`${baseUrl}/discount-icon.png`}
                  width="48"
                  height="48"
                  alt="Discount"
                  style={icon}
                />
              </Column>

              <Column style={benefitTextWrapper}>
                <Text style={benefitTitle}>
                  Exclusive 20% off your first order
                </Text>

                <Text style={benefitDescription}>Our thank you to you</Text>
              </Column>
            </Row>

            <Row style={benefitItem}>
              <Column width="68" style={iconColumn}>
                <Img
                  src={`${baseUrl}/bell-icon.png`}
                  width="48"
                  height="48"
                  alt="Updates"
                  style={icon}
                />
              </Column>

              <Column style={benefitTextWrapper}>
                <Text style={benefitTitle}>
                  First updates on new releases & surprises
                </Text>

                <Text style={benefitDescription}>Stay in the know</Text>
              </Column>
            </Row>
          </Section>

          <Hr style={divider} />

          <Row style={footer}>
            <Column>
              <Text style={footerText}>2025, PureNestra Inc</Text>
            </Column>

            <Column align="right">
              <Link href="https://linkedin.com/company/purenestra">
                <Img
                  src={`${baseUrl}/linkedin.png`}
                  width="32"
                  height="32"
                  alt="LinkedIn"
                  style={socialIcon}
                />
              </Link>

              <Link href="https://x.com/purenestra">
                <Img
                  src={`${baseUrl}/twitter.png`}
                  width="32"
                  height="32"
                  alt="Twitter"
                  style={socialIcon}
                />
              </Link>

              <Link href="https://facebook.com/purenestra">
                <Img
                  src={`${baseUrl}/facebook.png`}
                  width="32"
                  height="32"
                  alt="Facebook"
                  style={socialIcon}
                />
              </Link>
            </Column>
          </Row>
        </Container>
      </Body>
    </Html>
  );
};

export default WaitlistEmail;

const main = {
  backgroundColor: "#EBEBEE",
  padding: "10px",
  fontFamily: "'Plus Jakarta Sans', Arial, sans-serif",
};

const container = {
  backgroundColor: "#ffffff",
  maxWidth: "700px",
  margin: "0 auto",
  padding: "20px",
};

const logoSection = {
  textAlign: "center" as const,
  marginBottom: "20px",
};

const logo = {
  margin: "0 auto",
  width: "115px",
  height: "15px",
};

const heroImage = {
  borderRadius: "16px",
  marginBottom: "10px",
};

const contentSection = {
  textAlign: "center" as const,
};

const heading = {
  fontSize: "36px",
  lineHeight: "1.2",
  color: "#574238",
  marginBottom: "20px",
  fontFamily: "'Fraunces', Georgia, serif",
  fontWeight: "500",
};

const paragraph = {
  fontSize: "14px",
  lineHeight: "1.6",
  color: "#423027",
};

const span = {
  color: "#808C70",
  fontFamily: "'Fraunces', Georgia, serif",
};

const benefitsSection = {
  //marginTop: "10px",
};

const benefitsHeading = {
  fontSize: "24px",
  lineHeight: "1.4",
  color: "#574238",
  textAlign: "center" as const,
  marginBottom: "30px",
  fontWeight: "400",
  fontFamily: "'Fraunces', Georgia, serif",
};

const benefitItem = {
  marginBottom: "10px",
};

const iconColumn = {
  verticalAlign: "top" as const,
};

const icon = {
  display: "block",
};

const benefitTextWrapper = {
  verticalAlign: "middle" as const,
};

const benefitTitle = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#423027",
  margin: "0 0 4px 0",
};

const benefitDescription = {
  fontSize: "12px",
  color: "#423027",
  fontWeight: "400",
  margin: "0",
};

const divider = {
  margin: "20px 0",
  borderColor: "#D1D2CC",
};

const footer = {
  width: "100%",
};

const footerText = {
  fontSize: "12px",
  fontWeight: "400",
  color: "#423027",
  margin: "0",
};

const socialIcon = {
  display: "inline-block",
  marginLeft: "12px",
};
