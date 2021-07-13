import { Flex, Image} from '@chakra-ui/react';
export function Header(){
  return(
    <Flex as="header" w="100%" justifyContent="center" p="4">
      <Image src="/images/logo.svg" alt="WorldTrip"/>
    </Flex>
  )
}