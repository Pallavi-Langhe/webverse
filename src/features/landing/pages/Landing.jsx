import { Wrapper, Section, Header, Para, Button } from "./landingComponents";

import { Logo } from "assets/icons/Logo";
import { useDocumentTitle } from "utils/hooks/useDocumentTitle";
export const Landing = () => {
  useDocumentTitle("Landing");
  return (
    <Wrapper>
      <Section>
        <Section logo>
          <Logo width="5rem" height="5rem" />
        </Section>
        <Header>WEBVERSE</Header>
        <Para>Empower your web development journey with us.</Para>
        <Button to="/login">Get Started</Button>
      </Section>
    </Wrapper>
  );
};
