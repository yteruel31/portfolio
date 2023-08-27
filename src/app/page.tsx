import styles from './page.module.css';
import Hero from '@/components/Hero/Hero';
import AboutMe from '@/components/AboutMe/AboutMe';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <AboutMe />
    </main>
  );
}
