import { Box, Image } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <Box>
      <Header />
      <Banner />
      <TravelTypes />
    </Box>
  )
}
