import classes from "./roadmap.module.css";
import Image from "next/image";

export const Roadmap = () => {
  return (
    <>
      <div className={classes.background}>
        <div className={classes.backgroundImage}>
          <div>
            <Image
              src="/img/call/roadmap/background.png"
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
                    src="/img/call/roadmap/ave.png"
                    layout="responsive"
                    width={20}
                    height={10}
                  />
                </div>
                <div className={classes.contentCards__cardTitle}>
                  <div className={classes.contentCards__cardTitle__image}>
                    <Image
                      src="/img/call/roadmap/sign.png"
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
                {/* <div className={classes.contentCards__cardQ}>
                  <h1>Q1</h1>
                </div> */}

                <div className={classes.contentCards__cardImage}>
                  <Image
                    src="/img/call/roadmap/card.png"
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
                    src="/img/call/roadmap/ave.png"
                    layout="responsive"
                    width={20}
                    height={10}
                  />
                </div>
                <div className={classes.contentCards__cardTitle}>
                  <div className={classes.contentCards__cardTitle__image}>
                    <Image
                      src="/img/call/roadmap/sign.png"
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
                {/* <div className={classes.contentCards__cardQ}>
                  <h1>Q2</h1>
                </div> */}

                <div className={classes.contentCards__cardImage}>
                  <Image
                    src="/img/call/roadmap/card.png"
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
                    src="/img/call/roadmap/ave.png"
                    layout="responsive"
                    width={20}
                    height={10}
                  />
                </div>
                <div className={classes.contentCards__cardTitle}>
                  <div className={classes.contentCards__cardTitle__image}>
                    <Image
                      src="/img/call/roadmap/sign.png"
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
                {/* <div className={classes.contentCards__cardQ}>
                  <h1>Q3</h1>
                </div> */}
                <div className={classes.contentCards__cardImage}>
                  <Image
                    src="/img/call/roadmap/card.png"
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
                    src="/img/call/roadmap/ave.png"
                    layout="responsive"
                    width={20}
                    height={10}
                  />
                </div>
                <div className={classes.contentCards__cardTitle}>
                  <div className={classes.contentCards__cardTitle__image}>
                    <Image
                      src="/img/call/roadmap/sign.png"
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
                {/* <div className={classes.contentCards__cardQ}>
                  <h1>Q4</h1>
                </div> */}
                <div className={classes.contentCards__cardImage}>
                  <Image
                    src="/img/call/roadmap/card.png"
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
      </div>
    </>
  );
};
