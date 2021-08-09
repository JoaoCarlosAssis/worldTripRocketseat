import { Box, Flex, Grid, Heading, Image, List, ListIcon, ListItem, OrderedList, Text } from '@chakra-ui/react'
import { GiPlainCircle } from 'react-icons/gi'
interface TravelTypesProps {
  showProfileData?: boolean;
}

export function TravelTypes({ showProfileData = true }: TravelTypesProps) {
  return (

    <Box>
      {showProfileData && (
        <Grid
          templateColumns="repeat(5, 1fr)"
          gap={2}
          mt="120px"
          mx='auto'
          maxW="1120px"
        >
          <Flex flexDirection="column" align="center" px="4">
            <Image src="/images/cocktail.svg" alt="Coquetel" w="85px" h="85px" />
            <Text mt="2" fontFamily="Poppins" color="gray.700" fontWeight="bold" fontSize="xl">Vida noturna</Text>
          </Flex>
          <Flex flexDirection="column" align="center" px="4">
            <Image src="/images/surf.svg" alt="Coquetel" w="85px" h="85px" />
            <Text mt="2" fontFamily="Poppins" color="gray.700" fontWeight="bold" fontSize="xl">Praia</Text>
          </Flex>
          <Flex flexDirection="column" align="center" px="4">
            <Image src="/images/building.svg" alt="Coquetel" w="85px" h="85px" />
            <Text mt="2" fontFamily="Poppins" color="gray.700" fontWeight="bold" fontSize="xl">Moderno</Text>
          </Flex>
          <Flex flexDirection="column" align="center" px="4">
            <Image src="/images/museum.svg" alt="Coquetel" w="85px" h="85px" />
            <Text mt="2" fontFamily="Poppins" color="gray.700" fontWeight="bold" fontSize="xl">Clássico</Text>
          </Flex>
          <Flex flexDirection="column" align="center" px="4">
            <Image src="/images/earth.svg" alt="Coquetel" w="85px" h="85px" />
            <Text mt="2" fontFamily="Poppins" color="gray.700" fontWeight="bold" fontSize="xl">e mais...</Text>
          </Flex>
        </Grid>
      )}
      {!showProfileData && (

        <List color="gray.800" mt="8" textAlign="center" fontFamily="Poppins" fontSize="1xl" fontWeight="bold">
          <Grid templateColumns="repeat(2, 1fr)" textAlign="center" gap="4">
          <ListItem >
            <ListIcon as={GiPlainCircle} color="yellow.900" />
            Vida noturna
          </ListItem>
          <ListItem>
            <ListIcon as={GiPlainCircle} color="yellow.900" />
            Praia
          </ListItem>
          <ListItem>
            <ListIcon as={GiPlainCircle} color="yellow.900" />
            Moderno
          </ListItem>
          <ListItem>
            <ListIcon as={GiPlainCircle} color="yellow.900" />
            Clássico
          </ListItem>
          </Grid>
          <ListItem mt="4">
            <ListIcon as={GiPlainCircle} color="yellow.900" />
            e mais...
          </ListItem>
        </List>

      )}
      <Box maxW="90px" h="2px" mt="10" borderRadius="1" mx="auto" bg="gray.800">

      </Box>
      <Heading as="h2"
        textAlign="center"
        fontSize="36px"
        fontWeight="medium"
        fontFamily="Poppins"
        color="gray.700"
        mt="8"
      >
        Vamos nessa?<br />
        Então escolha seu continente
      </Heading>
    </Box>

  );
}