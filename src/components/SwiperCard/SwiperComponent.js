import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";

import "swiper/css";
import "swiper/css/pagination";

export default function SwiperComponent() {
  const headLines = useSelector(state => state.headLines);
  return (
    <div>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {headLines
          .filter(i => i.urlToImage)
          .slice(0, 6)
          .map(item => {
            return (
              <SwiperSlide
                style={{
                  height: "300px",
                  width: "200px",
                  backgroundColor: "blue",
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${item.urlToImage})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                  borderRadius: "10px",
                }}
              >
                <Grid
                  container
                  rowSpacing={1}
                  direction={"column"}
                  sx={{
                    color: "white",
                    marginTop: "150px",
                    alignContent: "flex-start",
                    textAlign: "left",
                  }}
                >
                  <Grid item xs={6}>
                    <item>
                      {item.author} : {item.source.name}
                    </item>
                  </Grid>
                  <Grid item xs={6}>
                    <item>{item.title}</item>
                  </Grid>
                  <Grid item xs={6}>
                    <item>{item.description}</item>
                  </Grid>
                </Grid>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
