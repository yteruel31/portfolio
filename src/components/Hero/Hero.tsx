import Section from '@/components/Section/Section';
import styles from './Hero.module.css';
import { clsx } from 'clsx';
import { LocationIcon } from '@/components/Icons';
import Button from '@/components/Button/Button';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Section threshold={0.35}>
        <section className={styles.container}>
          <div className={styles.hero__content}>
            <p className={styles.hero__content__intro}>Hi 👋 I&#39;m...</p>
            <h1 className={clsx(styles.hero__content__title)}>
              <span className={styles.hero__content__title__name}>
                Yoann Teruel
              </span>
              <span className={styles.hero__content__title__job}>
                Frontend developer
              </span>
            </h1>
            <div className={styles.hero__content__location}>
              <LocationIcon />
              Stockholm, Sweden
            </div>
            <p className={styles.hero__content__description}>
              I like to create modern web applications with love and incorporate
              popular libraries and frameworks such as React & Next.js.
            </p>
            <div className={styles.hero__content__buttons}>
              <Button href="#about-me">About me</Button>
            </div>
          </div>
        </section>
      </Section>
    </div>
  );
};

export default Hero;
