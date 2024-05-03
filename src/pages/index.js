
import Layout from '../components/Layout';
import { Typography, Container, Box } from '@mui/material';
import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";

export default function Home() {

  const images = [
    { url: "https://picsum.photos/seed/a/1600/900" },
    { url: "https://picsum.photos/seed/b/1920/1080" },
    { url: "https://picsum.photos/seed/c/1366/768" },
  ];

  return (
    <Layout>
      <Container maxWidth="md">
        <div>
          <Typography variant="h6" style={{ fontSize: '2rem', color: '#817abc', textAlign: 'center' }}>
            Tour natrure and wildlife
          </Typography>
          <Typography variant="h6" style={{ fontSize: '1rem', color: '#808080', textAlign: 'center' }}>
            Tour natrure and wildlifeTour natrure and wildlifeTour natrure and wildlifeTour natrure and wildlifeTour natrure and wildlife
          </Typography>
        </div>
        <Box mt={3} mb={3} p={1} sx={{ backgroundColor: "#fff" }}>
          {/* <img src="/landingImage.jpeg" alt="Placeholder Image" style={{ height: "465px", width: "830px" }} /> */}
          <Slider imageList={images} width={1000} height={400} />
        </Box>
      </Container>
    </Layout>
  );
}
