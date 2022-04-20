import React, { useEffect, useRef } from "react";
import classes from "./carousel.module.css";
import Image from "next/image";
import { Controls } from "./components/Controls/Controls";
import { FirstSlide } from "./components/slides/FirstSlide/FirstSlide";
import { SecondSlide } from "./components/slides/SecondSlide/SecondSlide";
import { ThirdSlide } from "./components/slides/ThirdSlide/ThirdSlide";
import { FourthSlide } from "./components/slides/FourthSlide/FourthSlide";
import { UtilityUse } from "./components/UtilityUse/UtilityUse";

export const Carousel = () => {
  const slideshow = useRef(null);

  const before = () => {
    if (
      slideshow.current !== null &&
      slideshow.current !== "" &&
      slideshow.current !== undefined
    ) {
      // @ts-ignore: Object is possibly 'null'.
      if (slideshow.current.children.length > 0) {
        // @ts-ignore: Object is possibly 'null'.
        const index = slideshow.current.children.length - 1;
        // @ts-ignore: Object is possibly 'null'.
        const lastElement = slideshow.current.children[index];
        // @ts-ignore: Object is possibly 'null'.
        slideshow.current.insertBefore(
          lastElement,
          // @ts-ignore: Object is possibly 'null'.
          slideshow.current.firstChild
        );
        // @ts-ignore: Object is possibly 'null'.
        slideshow.current.style.transition = "none";
        // @ts-ignore: Object is possibly 'null'.
        const size = slideshow.current.children[0].offsetWidth;
        // @ts-ignore: Object is possibly 'null'.
        slideshow.current.style.transform = `translateX(-${size}px)`;
        setTimeout(() => {
          // @ts-ignore: Object is possibly 'null'.
          slideshow.current.style.transition = `1000ms ease-out all`;
          // @ts-ignore: Object is possibly 'null'.
          slideshow.current.style.transform = `translateX(0)`;
        }, 30);
      }
    }
  };

  const after = () => {
    if (
      slideshow.current !== null &&
      slideshow.current !== "" &&
      slideshow.current !== undefined
    ) {
      // @ts-ignore: Object is possibly 'null'.
      if (slideshow.current.children.length > 0) {
        // @ts-ignore: Object is possibly 'null'.
        const firstElement = slideshow.current.children[0];
        // @ts-ignore: Object is possibly 'null'.
        slideshow.current.style.transition = `1000ms ease-out all`;
        // @ts-ignore: Object is possibly 'null'.
        const size = slideshow.current.children[0].offsetWidth;
        // @ts-ignore: Object is possibly 'null'.
        slideshow.current.style.transform = `translateX(-${size}px)`;

        const isTransition = () => {
          // @ts-ignore: Object is possibly 'null'.
          slideshow.current.style.transition = "none";
          // @ts-ignore: Object is possibly 'null'.
          slideshow.current.style.transform = `translateX(0)`;
          // @ts-ignore: Object is possibly 'null'.
          slideshow.current.appendChild(firstElement);
          // @ts-ignore: Object is possibly 'null'.
          slideshow.current.removeEventListener("transitionend", isTransition);
        };
        // @ts-ignore: Object is possibly 'null'.
        slideshow.current.addEventListener("transitionend", isTransition);
      }
    }
  };

  useEffect(() => {
    if (
      slideshow.current !== null &&
      slideshow.current !== "" &&
      slideshow.current !== undefined
    ) {
      setInterval(() => {
        after();
      }, 15000);
    }
  }, []);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.slideshow} ref={slideshow}>
          <div className={classes.slide}>
            <FirstSlide />
          </div>
          <div className={classes.slide}>
            <SecondSlide />
          </div>
          <div className={classes.slide}>
            <ThirdSlide />
          </div>
          <div className={classes.slide}>
            <FourthSlide />
          </div>
        </div>
        <div className={classes.utility__container}>
          <UtilityUse />
        </div>
      </div>
      <Controls before={before} after={after} />
    </>
  );
};
