import { Box, Grid } from '@chakra-ui/react'
export function TravelTypes() {
  return (
    

      <Grid templateColumns="repeat(6, 1fr)" gap={2} mt='20' mx='auto'  >
        <Box w="100%" h="10" bg="blue.500" />
        <Box w="100%" h="10" bg="blue.500" />
        <Box w="100%" h="10" bg="blue.500" />
        <Box w="100%" h="10" bg="blue.500" />
        <Box w="100%" h="10" bg="blue.500" />
      </Grid>
    
  );
}