import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Box, Theme, useMediaQuery } from "@mui/material";
import { useState, useEffect, useCallback, useMemo } from "react";

import { customerData } from './CustomerData';
import CustomerCard from "@/components/card/CustomerCard";
import CustomTypography from "@/components/halper/CustomTypo";
import Ellipse from "@/components/miscellaneous/Ellipse";

const SwiperComponent = () => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const swiperSlideCount = isMobile ? 1 : 2.5;
  const [swiper, setSwiper] = useState<any>(null);

  const duplicateData = useMemo(() => [...customerData, ...customerData], []);

  const changeSlide = useCallback(() => {
    if (swiper) {
      const nextIndex = (swiper.activeIndex + 2.5) % duplicateData.length;
      swiper.slideTo(nextIndex);
    }
  }, [swiper, duplicateData]);

  useEffect(() => {
    const intervalId = setInterval(changeSlide, 3000);

    return () => clearInterval(intervalId);
  }, [changeSlide]);

  return (
    <Box mt={isMobile ? '2rem' : '7.75rem'} mb={isMobile ? '2rem' : '6.25rem'} p="0 3rem 0 3rem" position="relative">
      <CustomTypography>Customer feedback</CustomTypography>
      <Ellipse top={-30} left={-100} width={350} height={350} />
      <Swiper
        slidesPerView={swiperSlideCount}
        spaceBetween={16}
        tag="article"
        loop={true}
        onSwiper={(s) => setSwiper(s)}
        style={{ marginTop: isMobile ? '1rem' : '3.125rem' }}
      >
        {duplicateData.map((slide, index) => (
          <SwiperSlide key={index}>
            <CustomerCard
              imageSrc={slide.imageSrc}
              imageAlt={slide.imageAlt}
              title={slide.title}
              date={slide.date}
              review={slide.review}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default SwiperComponent;
