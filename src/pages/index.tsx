import { Box, Image, useBreakpointValue } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
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
      <Banner showProfileData={isWidVersion}  />
      <TravelTypes showProfileData={isWidVersion}/>
    </Box>
  )
}
