import classes from "./footer.module.css";
import Image from "next/image";

export const Footer = () => {
  return (
    <>
      <div className={classes.router}>
        <div className={classes.container}>
          <div className={classes.image}>
            <div>
              <Image
                src="/img/home/inticoin-icon.png"
                width={200}
                height={35}
                alt="inticoin icon"
              />
            </div>
          </div>
          <div className={classes.text}>
            <p>
              Inticoin fue diseñado para potenciar el comercio en el Peru,
              mediante la creacion de una criptomoneda con migracion a EVM.
            </p>
            <p>
              &copy; Copyright Inticoin 2021 - Todos los derechos reservados
            </p>
          </div>
          <div className={classes.redes}>
            <h3>¡Unete a nuestra comunidad!</h3>
            <p>Email: inticoin@qolkrex.foundation</p>
            <div className={classes.socialIcons}>
              <a
                href="https://www.facebook.com/inticoinofficial"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <Image
                    src="/img/home/footer/fb-icon.png"
                    width={35}
                    height={35}
                    alt="facebook icon"
                  />
                </div>
              </a>
              <a
                href="https://twitter.com/inticoinperu"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <Image
                    src="/img/home/footer/twitter-icon.png"
                    width={35}
                    height={35}
                    alt="twitter icon"
                  />
                </div>
              </a>
              <a
                href="https://www.instagram.com/inticoinofficial/"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <Image
                    src="/img/home/footer/inst-icon.png"
                    width={35}
                    height={35}
                    alt="instagram icon"
                  />
                </div>
              </a>
              <a href="https://t.me/inticoin" target="_blank" rel="noreferrer">
                <div>
                  <Image
                    src="/img/home/footer/telegram-icon.png"
                    width={35}
                    height={35}
                    alt="telegram icon"
                  />
                </div>
              </a>
              <a
                href="https://discord.gg/usCCHykVSS"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <Image
                    src="/img/home/footer/discord-icon.png"
                    width={35}
                    height={35}
                    alt="discord icon"
                  />
                </div>
              </a>
              <a
                href="https://www.youtube.com/channel/UCMA9VsokOHD05j6mxyGFvRA"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <Image
                    src="/img/home/footer/youtube-icon.png"
                    width={35}
                    height={35}
                    alt="youtube icon"
                  />
                </div>
              </a>
              <a
                href="https://www.reddit.com/user/IntiCoin/"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <Image
                    src="/img/home/footer/reddit-icon.png"
                    width={35}
                    height={35}
                    alt="reddit icon"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
