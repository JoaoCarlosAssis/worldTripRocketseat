import { Box, useBreakpointValue } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Carrossel } from "../components/Carrossel";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  const isWidVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <Box>
      <Header />
      <Banner showProfileData={isWidVersion} />
      <TravelTypes showProfileData={isWidVersion} />
      <Carrossel />
    </Box>
  )
}
