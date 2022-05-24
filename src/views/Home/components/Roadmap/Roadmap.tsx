import classes from "./roadmap.module.scss";
import Image from "next/image";
import { useRef } from "react";
import { Controls } from "./components/Controls";

export const Roadmap = () => {
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

  return (
    <>
      <div className={classes.background}>
        <main className={classes.roadmap}>
          <div className={classes.roadmap__title}>
            <h1>Roadmap</h1>
            <div>
              <h3>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
                quod quo deleniti cumque cum, ab minima, rerum quisquam autem.
              </h3>
            </div>
          </div>
          <section className={classes.carousel}>
            <div className={classes.carousel__slideshow} ref={slideshow}>
              <div className={classes.carousel__slideshow__slide}>
                <article
                  className={classes.carousel__slideshow__slideCard}
                  data-aos="zoom-in-right"
                  data-aos-duration="3000"
                >
                  <div className={classes.carousel__slideshow__slideCard__sign}>
                    <Image
                      src="/img/home/roadmap/sign.png"
                      width={50}
                      height={30}
                      layout="responsive"
                    />
                    <div
                      className={
                        classes.carousel__slideshow__slideCard__signTitle
                      }
                    >
                      <h2>Inticoin Glimmer</h2>
                    </div>
                  </div>

                  <div className={classes.carousel__slideshow__slideCard__card}>
                    <Image
                      src="/img/home/roadmap/card.png"
                      width={500}
                      height={700}
                      layout="responsive"
                    />
                    <div
                      className={
                        classes.carousel__slideshow__slideCard__cardText
                      }
                    >
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat, sequi adipisci veritatis ipsam neque alias
                        nobis ex similique quam, soluta, reprehenderit voluptas
                        tenetur aliquam odit id ratione vel eligendi veniam.
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quas atque incidunt hic. Facere inventore
                        molestiae delectus voluptas totam itaque perferendis
                        assumenda aut? Voluptate veritatis dicta laboriosam
                        tempore sequi explicabo natus. Veniam eveniet ipsum
                        odio. Optio eligendi, provident ut sint aut, libero et
                        quas facere pariatur beatae vitae. Doloribus debitis
                        veniam ex iure error, quidem, velit, cupiditate optio
                        earum consequatur atque. Minima nulla a soluta provident
                        accusantium aliquid accusamus! Fugiat quasi expedita,
                        inventore consequuntur tenetur odit nesciunt atque
                        assumenda aliquid omnis optio laborum eligendi, at,
                        pariatur quia adipisci earum porro. Porro. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Numquam
                        cum consequuntur ut assumenda quasi temporibus quisquam
                        corporis ducimus. Nulla laudantium, aliquid velit
                        eligendi voluptatibus repellendus quam? Dolorum,
                        pariatur. Optio, ad.
                      </p>
                    </div>
                    <div
                      className={classes.carousel__slideshow__slideCard__cardQ}
                    >
                      <h1>Q1</h1>
                    </div>
                  </div>
                </article>
              </div>
              <div className={classes.carousel__slideshow__slide}>
                <article
                  className={classes.carousel__slideshow__slideCard}
                  data-aos="zoom-in-right"
                  data-aos-duration="3000"
                >
                  <div className={classes.carousel__slideshow__slideCard__sign}>
                    <Image
                      src="/img/home/roadmap/sign.png"
                      width={50}
                      height={30}
                      layout="responsive"
                    />
                    <div
                      className={
                        classes.carousel__slideshow__slideCard__signTitle
                      }
                    >
                      <h2>Inticoin Trade</h2>
                    </div>
                  </div>

                  <div className={classes.carousel__slideshow__slideCard__card}>
                    <Image
                      src="/img/home/roadmap/card.png"
                      width={500}
                      height={700}
                      layout="responsive"
                    />
                    <div
                      className={
                        classes.carousel__slideshow__slideCard__cardText
                      }
                    >
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat, sequi adipisci veritatis ipsam neque alias
                        nobis ex similique quam, soluta, reprehenderit voluptas
                        tenetur aliquam odit id ratione vel eligendi veniam.
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quas atque incidunt hic. Facere inventore
                        molestiae delectus voluptas totam itaque perferendis
                        assumenda aut? Voluptate veritatis dicta laboriosam
                        tempore sequi explicabo natus. Veniam eveniet ipsum
                        odio. Optio eligendi, provident ut sint aut, libero et
                        quas facere pariatur beatae vitae. Doloribus debitis
                        veniam ex iure error, quidem, velit, cupiditate optio
                        earum consequatur atque. Minima nulla a soluta provident
                        accusantium aliquid accusamus! Fugiat quasi expedita,
                        inventore consequuntur tenetur odit nesciunt atque
                        assumenda aliquid omnis optio laborum eligendi, at,
                        pariatur quia adipisci earum porro. Porro. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Numquam
                        cum consequuntur ut assumenda quasi temporibus quisquam
                        corporis ducimus. Nulla laudantium, aliquid velit
                        eligendi voluptatibus repellendus quam? Dolorum,
                        pariatur. Optio, ad.
                      </p>
                    </div>
                    <div
                      className={classes.carousel__slideshow__slideCard__cardQ}
                    >
                      <h1>Q2</h1>
                    </div>
                  </div>
                </article>
              </div>
              <div className={classes.carousel__slideshow__slide}>
                <article
                  className={classes.carousel__slideshow__slideCard}
                  data-aos="zoom-in-left"
                  data-aos-duration="3000"
                >
                  <div className={classes.carousel__slideshow__slideCard__sign}>
                    <Image
                      src="/img/home/roadmap/sign.png"
                      width={50}
                      height={30}
                      layout="responsive"
                    />
                    <div
                      className={
                        classes.carousel__slideshow__slideCard__signTitle
                      }
                    >
                      <h2>Inticoin Application</h2>
                    </div>
                  </div>

                  <div className={classes.carousel__slideshow__slideCard__card}>
                    <Image
                      src="/img/home/roadmap/card.png"
                      width={500}
                      height={700}
                      layout="responsive"
                    />
                    <div
                      className={
                        classes.carousel__slideshow__slideCard__cardText
                      }
                    >
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat, sequi adipisci veritatis ipsam neque alias
                        nobis ex similique quam, soluta, reprehenderit voluptas
                        tenetur aliquam odit id ratione vel eligendi veniam.
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quas atque incidunt hic. Facere inventore
                        molestiae delectus voluptas totam itaque perferendis
                        assumenda aut? Voluptate veritatis dicta laboriosam
                        tempore sequi explicabo natus. Veniam eveniet ipsum
                        odio. Optio eligendi, provident ut sint aut, libero et
                        quas facere pariatur beatae vitae. Doloribus debitis
                        veniam ex iure error, quidem, velit, cupiditate optio
                        earum consequatur atque. Minima nulla a soluta provident
                        accusantium aliquid accusamus! Fugiat quasi expedita,
                        inventore consequuntur tenetur odit nesciunt atque
                        assumenda aliquid omnis optio laborum eligendi, at,
                        pariatur quia adipisci earum porro. Porro. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Numquam
                        cum consequuntur ut assumenda quasi temporibus quisquam
                        corporis ducimus. Nulla laudantium, aliquid velit
                        eligendi voluptatibus repellendus quam? Dolorum,
                        pariatur. Optio, ad.
                      </p>
                    </div>
                    <div
                      className={classes.carousel__slideshow__slideCard__cardQ}
                    >
                      <h1>Q3</h1>
                    </div>
                  </div>
                </article>
              </div>
              <div className={classes.carousel__slideshow__slide}>
                <article
                  className={classes.carousel__slideshow__slideCard}
                  data-aos="zoom-in-left"
                  data-aos-duration="3000"
                >
                  <div className={classes.carousel__slideshow__slideCard__sign}>
                    <Image
                      src="/img/home/roadmap/sign.png"
                      width={50}
                      height={30}
                      layout="responsive"
                    />
                    <div
                      className={
                        classes.carousel__slideshow__slideCard__signTitle
                      }
                    >
                      <h2>Blockchain Inticoin</h2>
                    </div>
                  </div>

                  <div className={classes.carousel__slideshow__slideCard__card}>
                    <Image
                      src="/img/home/roadmap/card.png"
                      width={500}
                      height={700}
                      layout="responsive"
                    />
                    <div
                      className={
                        classes.carousel__slideshow__slideCard__cardText
                      }
                    >
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat, sequi adipisci veritatis ipsam neque alias
                        nobis ex similique quam, soluta, reprehenderit voluptas
                        tenetur aliquam odit id ratione vel eligendi veniam.
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quas atque incidunt hic. Facere inventore
                        molestiae delectus voluptas totam itaque perferendis
                        assumenda aut? Voluptate veritatis dicta laboriosam
                        tempore sequi explicabo natus. Veniam eveniet ipsum
                        odio. Optio eligendi, provident ut sint aut, libero et
                        quas facere pariatur beatae vitae. Doloribus debitis
                        veniam ex iure error, quidem, velit, cupiditate optio
                        earum consequatur atque. Minima nulla a soluta provident
                        accusantium aliquid accusamus! Fugiat quasi expedita,
                        inventore consequuntur tenetur odit nesciunt atque
                        assumenda aliquid omnis optio laborum eligendi, at,
                        pariatur quia adipisci earum porro. Porro. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Numquam
                        cum consequuntur ut assumenda quasi temporibus quisquam
                        corporis ducimus. Nulla laudantium, aliquid velit
                        eligendi voluptatibus repellendus quam? Dolorum,
                        pariatur. Optio, ad.
                      </p>
                    </div>
                    <div
                      className={classes.carousel__slideshow__slideCard__cardQ}
                    >
                      <h1>Q4</h1>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>
          <Controls before={before} after={after} />
        </main>
      </div>
    </>
  );
};
