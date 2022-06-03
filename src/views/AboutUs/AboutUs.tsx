import { useTranslate } from "../../hooks/useTranslate";
import classes from "./about-us.module.scss";

export const AboutUs = () => {
  const { t } = useTranslate();

  return (
    <>
      <main className={classes.aboutUs}>
        <div className={classes.aboutUs__blackCap}></div>
        <section className={classes.aboutUs__description}>
          <h1>{t.abaoutUs.title}</h1>
          <div className={classes.aboutUs__descriptionText}>
            <p>{t.abaoutUs.paragraph}</p>
          </div>
        </section>
      </main>
    </>
  );
};
