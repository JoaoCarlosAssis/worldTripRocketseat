import { GetStaticProps } from "next";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { InfoOutlineIcon } from "@chakra-ui/icons"
import { Box, Flex, Grid, Heading, Image, Text, HStack, useBreakpointValue, SimpleGrid, Tooltip } from '@chakra-ui/react';

type CitiesProps = {
  name: string;
}
type ContinentsProps = {
  id: string;
  continent: string;
  bannerUrl: string;
  description: string;
  about: string;
  countries: string;
  languages: string;
  numberCities: string;
  cities: CitiesProps[];
}

export default function Continents({ data }) {
  const isWidVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <>
      <Header />
      <Box position="relative">
        <Box position="absolute" top="0" h="100%" w="100%" bgColor="gray.800" opacity="0.4">
        </Box>

        <Image
          w="100%"
          maxHeight="500px"
          objectFit="cover"
          src={data.bannerUrl}
          alt={data.continent}
        />
        <Heading
          fontFamily="Poppins"
          fontSize={["2xl", "4xl"]}
          position="absolute"
          top="70%"
          zIndex="8"
          pl={["8", "30"]}
        >
          {data.continent}
        </Heading>
      </Box>
      {!isWidVersion && (
        <Box as="section" marginTop="6" width="80%" marginX="auto">
          <Flex flexDirection="column" align="center">
            <Box>
              <Text fontFamily="Poppins" color="gray.800" textAlign="justify">{data.about}</Text>
            </Box>
            <Flex marginX="auto" marginTop="6">
              <HStack spacing="12px">
                <Box textAlign="left">
                  <Text fontSize="3xl" color="yellow.900" fontWeight="bold">{data.countries}</Text>
                  <Text color="gray.800">Países</Text>
                </Box>
                <Box textAlign="left">
                  <Text fontSize="3xl" color="yellow.900" fontWeight="bold">{data.languages}</Text>
                  <Text color="gray.800">Línguas</Text>
                </Box>
                <Box textAlign="left">
                  <Text fontSize="3xl" color="yellow.900" fontWeight="bold">{data.numberCities}</Text>
                  <Text color="gray.800" >Cidades +100
                    <Tooltip
                      hasArrow label="Uma seleção de cidades para suas próximas férias"
                      bg="yellow.900"
                      color="black"
                      border="1px solid"
                      borderColor="yellow.900"
                    >
                      <InfoOutlineIcon ml="4px" w={4} h={4} color="gray.100" />
                    </Tooltip>
                  </Text>
                </Box>
              </HStack>
            </Flex>
          </Flex>
        </Box>
      )}
      {isWidVersion && (
        <Box as="section" p="2">
          <Grid gridTemplateColumns="repeat(2, 1fr)" maxW="80%" marginX="auto" p="10" gap="12">
            <Box>
              <Text fontFamily="Poppins" color="gray.800" textAlign="justify">{data.about}</Text>
            </Box>
            <Flex marginX="auto">
              <HStack spacing="50px">
                <Box textAlign="center">
                  <Text fontSize="5xl" color="yellow.900" fontWeight="bold">{data.countries}</Text>
                  <Text color="gray.800" fontWeight="bold">Países</Text>
                </Box>
                <Box textAlign="center">
                  <Text fontSize="5xl" color="yellow.900" fontWeight="bold">{data.languages}</Text>
                  <Text color="gray.800" fontWeight="bold">Línguas</Text>
                </Box>
                <Box textAlign="center">
                  <Text fontSize="5xl" color="yellow.900" fontWeight="bold">{data.numberCities}</Text>
                  <Text color="gray.800" fontWeight="bold">Cidades + 100
                    <Tooltip
                      hasArrow label="Uma seleção de cidades para suas próximas férias"
                      bg="yellow.900"
                      color="black"
                      border="1px solid"
                      borderColor="yellow.900"
                    >
                      <InfoOutlineIcon ml="4px" w={4} h={4} color="gray.100" />
                    </Tooltip>
                  </Text>
                </Box>
              </HStack>
            </Flex>
          </Grid>
        </Box>
      )}
      <Heading marginX="auto" marginTop="4" width="80%" fontFamily="Poppins" color="gray.800">Cidades +100</Heading>
      <SimpleGrid
        maxW="80%"
        marginX="auto"
        marginTop="8"
        marginBottom="8"
        minChildWidth="220px"
        spacing="30px"
      >
        {data.cities.map(city => {
          return (
            <Box
              key={city.name}
              bgColor="white.900"
              marginX="auto"
              h="297px" w="240px"
              border="1px solid"
              borderColor="yellow.900"
              borderRadius="6"
            >
              <Image
                borderTopRadius="6"
                w="100%"
                maxHeight="160px"
                minHeight="160px"
                objectFit="cover"
                src={city.imageCity}
                alt={city.name}
              />
              <Grid gridTemplateColumns="3fr 1fr" mt="4">
                <Flex p="4" flexDirection="column">
                  <Heading as="h3" size="sm" fontFamily="Poppins" color="gray.700" >
                    {city.name}
                  </Heading>
                  <Text size="small" fontFamily="Poppins" color="gray.500" marginTop="15px">{city.state}</Text>
                </Flex>
                <Flex alignItems="center" marginX="auto">
                  <Image
                    w="30px"
                    h="30px"
                    border="1px solid"
                    borderColor="gray.50"
                    borderRadius="50%"
                    objectFit="cover"
                    src={city.flag}
                    alt={city.name}
                  />
                </Flex>
              </Grid>
            </Box>
          )
        })}
      </SimpleGrid>
    </>


  );
}
export async function getStaticPaths() {
  const response = await api.get<ContinentsProps[]>(`/continents`)
  const data = response.data.map(continent => ({
    ...continent,
  }))
  const paths = data.map(continent => {
    return {
      params: {
        id: continent.id
      }
    }
  })
  return {
    paths,
    fallback: false
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;
  const response = await api.get<ContinentsProps[]>(`/continents/${id}`)
  const data = response.data
  return {
    props: {
      data
    }
  }
}