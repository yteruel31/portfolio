'use client';

import styles from './Header.module.css';
import { BurgerIcon, GithubIcon, LinkedInIcon } from '@/components/Icons';
import { useWindowScroll } from '@/hooks/useWindowScroll';
import { clsx } from 'clsx';
import { useState } from 'react';
import Device from '@/components/Device';

const Header = () => {
  const [scroll] = useWindowScroll();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

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
            <a href="/">Yoann TERUEL</a>
          </div>
          <div className={styles.content}>
            <Device>
              {({ isMobile }) =>
                isMobile ? (
                  <button
                    className={styles.burger}
                    onClick={() => setMenuIsOpen(!menuIsOpen)}
                  >
                    <BurgerIcon />
                  </button>
                ) : (
                  <>
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
                  </>
                )
              }
            </Device>
          </div>
        </div>
      </div>
      {menuIsOpen && (
        <div className={styles.naveScreen}>
          <div className={styles.naveScreen__container}>
            <nav className={styles.naveScreen__container__menu}>
              <a href="#about-me" onClick={() => setMenuIsOpen(false)}>
                About me
              </a>
              <a href="#showcase" onClick={() => setMenuIsOpen(false)}>
                Showcase
              </a>
              <a onClick={() => setMenuIsOpen(false)}>Other projects</a>
              <a onClick={() => setMenuIsOpen(false)}>Blog</a>
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
      )}
    </header>
  );
};

export default Header;
