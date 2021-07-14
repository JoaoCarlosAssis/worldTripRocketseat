import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'

interface TravelTypesProps {
  showProfileData?: boolean;
}

export function TravelTypes({showProfileData = true}: TravelTypesProps) {
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
          <Image src="/images/cocktail.svg" alt="Coquetel" w="85px" h="85px"/>
          <Text mt="2" fontFamily="Poppins" color="gray.700" fontWeight="bold" fontSize="xl">Vida noturna</Text>
        </Flex>
        <Flex flexDirection="column" align="center" px="4">
          <Image src="/images/surf.svg" alt="Coquetel" w="85px" h="85px"/>
          <Text mt="2" fontFamily="Poppins" color="gray.700" fontWeight="bold" fontSize="xl">Praia</Text>
        </Flex>
        <Flex flexDirection="column" align="center" px="4">
          <Image src="/images/building.svg" alt="Coquetel" w="85px" h="85px"/>
          <Text mt="2" fontFamily="Poppins" color="gray.700" fontWeight="bold" fontSize="xl">Moderno</Text>
        </Flex>
        <Flex flexDirection="column" align="center" px="4">
          <Image src="/images/museum.svg" alt="Coquetel" w="85px" h="85px"/>
          <Text mt="2" fontFamily="Poppins" color="gray.700" fontWeight="bold" fontSize="xl">Clássico</Text>
        </Flex>
        <Flex flexDirection="column" align="center" px="4">
          <Image src="/images/earth.svg" alt="Coquetel" w="85px" h="85px"/>
          <Text mt="2" fontFamily="Poppins" color="gray.700" fontWeight="bold" fontSize="xl">e mais...</Text>
        </Flex>
      </Grid>
      )}
      {!showProfileData && (
        <Text>deu certo</Text>
      )}
      </Box>
    
  );
}