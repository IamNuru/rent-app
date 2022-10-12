import { Container, Typography } from "@mui/material";
import Page from "../components/Page";


export default function ContactUs() {
  return (
    <Page title="Rentgh | Contact Us">
      <Container>
        <Typography variant="h2" sx={{fontWeight:600, my:6, textAlign:'center'}}>Contact Us</Typography>
        <Typography variant="h6" sx={{my:2}}>
          In case of any inquiries or questions you can fill out the form below
          and one of our representatives will contact you soon.
        </Typography>
      </Container>
    </Page>
  );
}
