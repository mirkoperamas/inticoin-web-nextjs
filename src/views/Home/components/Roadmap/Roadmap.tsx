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

      {/* <div className={classes.background}>
        <div className={classes.backgroundImage}>
          <div>
            <Image
              src="/img/home/roadmap/background.png"
              layout="fill"
              objectFit="cover"
              priority
              alt="background"
            />
          </div>
        </div>
        <main className={classes.ajust}>
          <div className={classes.content}>
            <h1>Roadmap</h1>

            <div className={classes.contentCards}>
              <div
                className={classes.contentCards__card}
                id={classes.firstCard}
              >
                <div className={classes.ave} id={classes.firstAve}>
                  <Image
                    src="/img/home/roadmap/ave.png"
                    layout="responsive"
                    width={20}
                    height={10}
                  />
                </div>
                <div className={classes.contentCards__cardTitle}>
                  <div className={classes.contentCards__cardTitle__image}>
                    <Image
                      src="/img/home/roadmap/sign.png"
                      layout="responsive"
                      width={25}
                      height={20}
                    />
                  </div>
                  <div className={classes.contentCards__cardTitle__text}>
                    <h4>Inticoin Glimmer</h4>
                    <h3>Q1</h3>
                  </div>
                </div>

                <div className={classes.contentCards__cardImage}>
                  <Image
                    src="/img/home/roadmap/card.png"
                    layout="responsive"
                    width={40}
                    height={55}
                  />
                  <div className={classes.contentCards__cardImage__text}>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perferendis iste consectetur culpa deleniti quaerat
                      asperiores magnam ipsa eveniet? Laboriosam distinctio
                      dignissimos laudantium eaque rerum quod beatae consequatur
                      autem atque corrupti!
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={classes.contentCards__card}
                id={classes.secondCard}
              >
                <div className={classes.ave} id={classes.secondAve}>
                  <Image
                    src="/img/home/roadmap/ave.png"
                    layout="responsive"
                    width={20}
                    height={10}
                  />
                </div>
                <div className={classes.contentCards__cardTitle}>
                  <div className={classes.contentCards__cardTitle__image}>
                    <Image
                      src="/img/home/roadmap/sign.png"
                      layout="responsive"
                      width={25}
                      height={20}
                    />
                  </div>
                  <div className={classes.contentCards__cardTitle__text}>
                    <h4>Inticoin Trade</h4>
                    <h3>Q2</h3>
                  </div>
                </div>

                <div className={classes.contentCards__cardImage}>
                  <Image
                    src="/img/home/roadmap/card.png"
                    layout="responsive"
                    width={40}
                    height={55}
                  />
                  <div className={classes.contentCards__cardImage__text}>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perferendis iste consectetur culpa deleniti quaerat
                      asperiores magnam ipsa eveniet? Laboriosam distinctio
                      dignissimos laudantium eaque rerum quod beatae consequatur
                      autem atque corrupti!
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={classes.contentCards__card}
                id={classes.thirdCard}
              >
                <div className={classes.ave} id={classes.thirdAve}>
                  <Image
                    src="/img/home/roadmap/ave.png"
                    layout="responsive"
                    width={20}
                    height={10}
                  />
                </div>
                <div className={classes.contentCards__cardTitle}>
                  <div className={classes.contentCards__cardTitle__image}>
                    <Image
                      src="/img/home/roadmap/sign.png"
                      layout="responsive"
                      width={25}
                      height={20}
                    />
                  </div>
                  <div className={classes.contentCards__cardTitle__text}>
                    <h4>Inticoin Application</h4>
                    <h3>Q3</h3>
                  </div>
                </div>

                <div className={classes.contentCards__cardImage}>
                  <Image
                    src="/img/home/roadmap/card.png"
                    layout="responsive"
                    width={40}
                    height={55}
                  />
                  <div className={classes.contentCards__cardImage__text}>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perferendis iste consectetur culpa deleniti quaerat
                      asperiores magnam ipsa eveniet? Laboriosam distinctio
                      dignissimos laudantium eaque rerum quod beatae consequatur
                      autem atque corrupti!
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={classes.contentCards__card}
                id={classes.fourthCard}
              >
                <div className={classes.ave} id={classes.fourthAve}>
                  <Image
                    src="/img/home/roadmap/ave.png"
                    layout="responsive"
                    width={20}
                    height={10}
                  />
                </div>
                <div className={classes.contentCards__cardTitle}>
                  <div className={classes.contentCards__cardTitle__image}>
                    <Image
                      src="/img/home/roadmap/sign.png"
                      layout="responsive"
                      width={25}
                      height={20}
                    />
                  </div>
                  <div className={classes.contentCards__cardTitle__text}>
                    <h4>Blockchain Inticoin</h4>
                    <h3>Q4</h3>
                  </div>
                </div>

                <div className={classes.contentCards__cardImage}>
                  <Image
                    src="/img/home/roadmap/card.png"
                    layout="responsive"
                    width={40}
                    height={55}
                  />
                  <div className={classes.contentCards__cardImage__text}>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perferendis iste consectetur culpa deleniti quaerat
                      asperiores magnam ipsa eveniet? Laboriosam distinctio
                      dignissimos laudantium eaque rerum quod beatae consequatur
                      autem atque corrupti!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div> */}
    </>
  );
};
