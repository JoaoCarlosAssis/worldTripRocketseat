import { Flex, Image, Link } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/dist/client/router';
export function Header() {
  useRouter()
  const { route } = useRouter()
  
  return (
    <Flex as="header" w="100%" alignItems="center" justifyContent="center" position="relative" p="4">
      {route != '/' && (
        <Link href="/" color="gray.200" position="absolute" top='' left='0' >
          <ChevronLeftIcon w={['30px', '40px']} height={['30px', '40px']} ml={['20px', '40px']} />
        </Link>
      )}
      <Image src="/images/logo.svg" w={["120px", "240px"]} alt="WorldTrip" />
    </Flex>
  )
}