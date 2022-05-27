import classes from "./footer.module.scss";
import Image from "next/image";
import { useTranslate } from "../../hooks/useTranslate";

export const Footer = () => {
  const { t } = useTranslate();
  return (
    <>
      <section className={classes.footer}>
        <div className={classes.footerContainer}>
          <div className={classes.footer__icon}>
            <Image
              src="/img/inticoin-icon.svg"
              width={200}
              height={35}
              alt="inticoin icon"
            />
          </div>
          <div className={classes.footer__text}>
            <p>{t.footer.description}</p>
          </div>
          <div className={classes.footer__networks}>
            <h4>{t.footer.titleJoin}</h4>
            <p>{t.footer.email}</p>
            <div className={classes.footer__networksIcons}>
              <a
                href="https://www.facebook.com/inticoinofficial"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <Image
                    src="/img/footer/fb-icon.png"
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
                    src="/img/footer/twitter-icon.png"
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
                    src="/img/footer/inst-icon.png"
                    width={35}
                    height={35}
                    alt="instagram icon"
                  />
                </div>
              </a>
              <a href="https://t.me/inticoin" target="_blank" rel="noreferrer">
                <div>
                  <Image
                    src="/img/footer/telegram-icon.png"
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
                    src="/img/footer/discord-icon.png"
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
                    src="/img/footer/youtube-icon.png"
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
                    src="/img/footer/reddit-icon.png"
                    width={35}
                    height={35}
                    alt="reddit icon"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className={classes.footer__copyright}>
          <p>{t.footer.copyrigth}</p>
        </div>
      </section>
    </>
  );
};
