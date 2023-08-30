'use client';

import styles from './Header.module.css';
import { GithubIcon, LinkedInIcon } from '@/components/Icons';
import { useWindowScroll } from '@/hooks/useWindowScroll';
import { clsx } from 'clsx';

const Header = () => {
  const [scroll] = useWindowScroll();

  return (
    <header
      className={clsx(
        styles.header,
        scroll.y !== 0 ? styles.header__scrolling : undefined,
      )}
    >
      <div className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.title}>
            <a>Yoann TERUEL</a>
            <span>Work in progress</span>
          </div>
          <div className={styles.content}>
            <nav className={styles.navbarMenu}>
              <a href="#about-me">About me</a>
              <a href="#showcase">Showcase</a>
              <a>Other projects</a>
              <a>Blog</a>
              <a>Resume</a>
            </nav>
            <div className={styles.socialLinks}>
              <a
                href="https://github.com/yteruel31"
                target="_blank"
                aria-label="visit my github profile"
              >
                <GithubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/yoann-teruel"
                target="_blank"
                aria-label="visit my linkedin profile"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
