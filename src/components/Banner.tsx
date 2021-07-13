import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Box
      bgImage="url('/images/background.svg')"
      bgRepeat="no-repeat"
      bgSize="cover"
      w="100%"
      h={320}
    >
      <Grid gap="4" gridTemplateColumns={['1fr', '1fr 1fr']} p="2rem">
        <Box p={["6", "8"]} display='flex' flexDirection='column' justifyContent="center">
          <Text fontSize={["3xl", "4xl"]} fontWeight="bold" fontFamily="Poppins">
            5 Continentes,<br/>
            infinitas possibilidades.
          </Text>
          <Text  mt='2rem' fontSize={["1xl"]} fontWeight="thin" fontFamily="Poppins">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou. </Text>

        </Box>
        <Box display={['none', 'none', 'none', 'hidden']} p="8" position='relative'>
          <Image src="images/airplane.svg" alt="airplane"/>
        </Box>
      </Grid>

    </Box>
  );
}