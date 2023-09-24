import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Box, Grid, Typography } from "@mui/material";
import { useState, useEffect, useCallback } from "react";
import VButton from "@/components/buttons/VButton";
import VLinkButton from "@/components/buttons/VLinkButton";
import VDisplayImage from "@/components/displays/VDisplayImage";
import Ellipse from "@/components/miscellaneous/Ellipse";
import CustomSlider from "@/components/slider/CustemSliderItem";
import { staticItems } from "./SwiperComponentData";

interface staticItems {
  id: number;
  title: string;
  body: string;
  href: string;
  text: string;
}

const SwiperComponent: React.FC = () => {
  const [activeSlideId, setActiveSlideId] = useState<number>(1);
  const [swiper, setSwiper] = useState<any>(null);

  const changeSlide = useCallback(() => {
    if (swiper) {
      const nextIndex = (swiper.activeIndex + 1) % staticItems.length;
      swiper.slideTo(nextIndex);
    }
  }, [swiper]);

  useEffect(() => {
    const intervalId = setInterval(changeSlide, 5000);

    return () => clearInterval(intervalId);
  }, [swiper, changeSlide]);

  const handleSlideChange = (swiper: any) => {
    setActiveSlideId(staticItems[swiper.activeIndex].id);
  };

  const Next = () => {
    if (swiper) {
      const nextIndex = swiper.activeIndex + 1;
      if (nextIndex >= staticItems.length) {
        swiper.slideTo(0);
      } else {
        swiper.slideNext(0);
      }
    }
  };

  const Prev = () => {
    if (swiper) {
      const prevIndex = swiper.activeIndex - 1;
      if (prevIndex < 0) {
        swiper.slideTo(staticItems.length - 1);
      } else {
        swiper.slidePrev();
      }
    }
  };

  return (
    <Box mt={{ xs: 2, sm: 3, md: 5, xl: "11rem" }}>
      <Swiper
        slidesPerView={1}
        tag="article"
        loop={true}
        onSwiper={(s) => setSwiper(s)}
        onSlideChange={(s) => handleSlideChange(s)}
      >
        {staticItems.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Grid
              container
              pl={{ xs: 0, md: 6 }}
              pr={{ xs: 0, md: 6 }}
              mb={{ xs: 2, sm: 3, md: 5, xl: 10 }}
            >
              <Grid
                item
                xs={12}
                md={6}
                xl={6}
                display="flex"
                flexDirection="column"
                gap={{ xs: 2, md: 4, lg: 6 }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem", xl: "4rem" },
                    fontWeight: "800",
                    lineHeight: "normal",
                    textTransform: "uppercase",
                    color: "subtitle.light",
                  }}
                >
                  {slide.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontSize: { xs: "1rem", md: "1.5rem" },
                    fontWeight: "700",
                    lineHeight: "normal",
                    color: "subtitle.light",
                  }}
                >
                  {slide.body}
                </Typography>
                <Box>
                  <VLinkButton
                    sx={{
                      color: "white.main",
                      backgroundColor: "secondary.main",
                      borderRadius: "1rem",
                      padding: { xs: "0.85rem", md: "1.5rem 2rem" },
                      fontSize: { xs: "0.8rem", md: "1rem" },
                      lineHeight: "normal",
                      letterSpacing: "0.08rem",
                      fontWeight: "700",
                      "&:hover": {
                        backgroundColor: "secondary.main",
                      },
                    }}
                    href={slide.href}
                  >
                    {slide.text}
                  </VLinkButton>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                xl={6}
                sx={{
                  "@media (max-width: 899px)": {
                    display: "none",
                  },
                }}
              >
                <VDisplayImage
                  src="/images/cup.png"
                  alt="Cup Image"
                  width={765}
                  height={420}
                  layout="responsive"
                  sx={{
                    paddingTop: { xs: "2rem", md: "4rem" ,xl: "1rem" }
                  }}
                />
                <Ellipse top={0} right={0} width={457} height={457} />
              </Grid>
            </Grid>
          </SwiperSlide>
        ))}
      </Swiper>
      <VButton className="swiper-button-prev" onClick={Prev} sx={{
            padding: '0.2rem',
            borderRadius: '50%',
            backgroundColor: { xs: 'transparent.main', md: 'secondary.dark' },
            marginRight: '0.625rem',
          }}>
            <VDisplayImage
              src="/images/left.svg"
              alt="Left Arrow Icon"
              width={50}
              height={56}
            />
          </VButton>
          <VButton className="swiper-button-prev" onClick={Next} sx={{
            padding: '0.2rem',
            borderRadius: '50%',
            backgroundColor: { xs: 'transparent.main', md: 'secondary.dark' },
          }}>
            <VDisplayImage
              src="/images/right.svg"
              alt="Right Arrow Icon"
              width={50}
              height={56}
            />
          </VButton>
          <CustomSlider staticItems={staticItems} activeSlideId={activeSlideId} />

    </Box>
  );
};

export default SwiperComponent;