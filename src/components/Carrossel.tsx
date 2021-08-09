import { Box, Flex, Image, Link, Text } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { useEffect, useState } from 'react';
import { api } from '../services/api'
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Navigation, Pagination, A11y]);

type CitiesProps = {
  name: string;
}
type ContinentsProps = {
  id: string;
  continent: string;
  bannerUrl: string;
  description: string;
  cities: CitiesProps[];
}

export function Carrossel() {
  const [continents, setContinents] = useState<ContinentsProps[]>([])
  useEffect(() => {
    async function loadContinents() {
     const response = await api.get<ContinentsProps[]>('/continents')
     const data = response.data.map(continent => ({
      ...continent,
      
    }))
     setContinents(data);
    }

    loadContinents();
  }, []);


  return (
    <Box maxW="1240px" mx="auto" mt="64px" marginBottom="100px">
      <Swiper
        centeredSlides={true}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {continents.map(continent => {
          return (
            <SwiperSlide key={continent.id}>
              <Link href={`/continents/${continent.id}`}>
              <Flex
                flexDirection="column"
                align="center"
                position="absolute"
                width="100%"
                top="40%"
              >
                <Text fontFamily="Poppins" fontSize={["18", "36"]} fontWeight="bold">{continent.continent}</Text>
                <Text fontFamily="Poppins" fontWeight="bold" fontSize={["12", "18"]}>{
                  continent.description
                }</Text>
              </Flex>
              <Box bgColor="gray.800" position="absolute" width="100%" h="100%" zIndex="-2" opacity="0.4">
              </Box>
              <Image
                zIndex="-3"
                position="relative"
                w="100%"
                maxHeight={["150px", "250px", "350", "450px"]}
                objectFit="cover"
                src={continent.bannerUrl}
                alt={continent.continent}
              />
            </Link>
            </SwiperSlide>
          )
        })}


      </Swiper> 
    </Box>
  );
};
