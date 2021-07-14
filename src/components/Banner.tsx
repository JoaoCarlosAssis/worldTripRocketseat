import { Box, Center, Flex, Grid, Heading, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface BannerProps {
  showProfileData?: boolean;
}


export function Banner({ showProfileData = true }: BannerProps) {

  return (
    <Box
      bgImage="url('/images/background.svg')"
      bgRepeat="no-repeat"
      bgSize="cover"
      w="100%"
      h="335px"
    >
      {showProfileData &&
        (
          <Grid gap="4" gridTemplateColumns={['1fr 1fr']} ml="8" alignItems="center">

            <Flex flexDirection="column" p="8">
              <Heading as="h1" size="lg" fontFamily="Poppins">
                5 Continentes,<br />
                infinitas possibilidades.
              </Heading>
              <Text fontFamily="Poppins" mt="16px">
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.
              </Text>
            </Flex>

            <Center mt="70px">
              <Image src="images/airplane.svg" alt="airplane" />
            </Center>
          </Grid>
        )
      }
      {!showProfileData && (
          <Flex flexDirection="column" p="8">
          <Heading as="h1" size="lg" fontFamily="Poppins" mt="60px">
            5 Continentes,<br />
            infinitas possibilidades.
          </Heading>
          <Text fontFamily="Poppins" mt="16px">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>
        )
      }

    </Box>
  );
}