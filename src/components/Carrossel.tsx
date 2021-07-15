import { Box, Image } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Navigation, Pagination, A11y]);



export function Carrossel() {
  
  return (
    <Box maxW="1240px" mx="auto" mt="64px"  marginBottom="100px">
      <Swiper
        centeredSlides={true}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <Image 
            w="100%"
            maxHeight="450px"
            objectFit="cover"
            src="https://images.unsplash.com/photo-1528732719667-0058acb84755?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
            alt="Europa"
          />
        </SwiperSlide>
       
      </Swiper>
    </Box>
  );
};