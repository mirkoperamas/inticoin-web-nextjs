import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import classes from "./carousel.module.css";
import Autoplay from 'embla-carousel-autoplay';
import Image from "next/image";

export const EmblaCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

    useEffect(() => {
        if (emblaApi) {
          // Embla API is ready
        }
      }, [emblaApi])

  return (
    <>
    <div style={{width: '100%', height:'100vh', backgroundColor: 'black', position: 'absolute', zIndex: '9', opacity: '.6'}}></div>
      <div className={classes.embla} ref={emblaRef}>
        {/* <div className={classes.embla__container} style={{height: 'calc(100vh - 10rem)'}}> */}
        <div className={classes.embla__container} style={{height: 'calc(100vh)'}}>
          <div className={classes.embla__slide}><Image src={"/img/home/carousel/image1.png"} layout="fill" objectFit="cover" /></div>
          <div className={classes.embla__slide}><Image src={"/img/home/carousel/image2.png"} layout="fill" objectFit="cover" /></div>
          <div className={classes.embla__slide}><Image src={"/img/home/carousel/image3.png"} layout="fill" objectFit="cover" /></div>
          <div className={classes.embla__slide}><Image src={"/img/home/carousel/image4.png"} layout="fill" objectFit="cover" /></div>
        </div>
      </div>
    </>
 )
}