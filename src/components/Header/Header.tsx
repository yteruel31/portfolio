'use client';

import styles from './Header.module.css';
import { GithubIcon, LinkedInIcon } from '@/components/Icons';
import { Transition } from 'react-transition-group';
import { useWindowScroll } from '@/hooks/useWindowScroll';
import { clsx } from 'clsx';
import { useState } from 'react';
import Device from '@/components/Device';

const Header = () => {
  const [scroll] = useWindowScroll();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <Device>
      {({ isMobile }) => (
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
                {isMobile ? (
                  <button
                    className={styles.burger}
                    onClick={() => setMenuIsOpen(!menuIsOpen)}
                  >
                    <span className={styles.burger__container}>
                      <span
                        className={clsx(
                          styles.burger__top,
                          menuIsOpen && styles.burger__top__active,
                        )}
                      ></span>
                      <span
                        className={clsx(
                          styles.burger__middle,
                          menuIsOpen && styles.burger__middle__active,
                        )}
                      ></span>
                      <span
                        className={clsx(
                          styles.burger__bottom,
                          menuIsOpen && styles.burger__bottom__active,
                        )}
                      ></span>
                    </span>
                  </button>
                ) : (
                  <>
                    <nav className={styles.navbarMenu}>
                      <a href="#about-me">About me</a>
                      <a href="#showcase">Showcase</a>
                      <a href="/resume.pdf" target="_blank" rel="nonreferrer">
                        Resume
                      </a>
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
                )}
              </div>
            </div>
          </div>
          <Transition in={menuIsOpen} timeout={150} unmountOnExit>
            {(state) => (
              <div
                className={clsx(
                  styles.naveScreen,
                  (state == 'entering' || state === 'entered') &&
                    styles.naveScreen__open,
                  (state == 'exiting' || state === 'exited') &&
                    styles.naveScreen__close,
                )}
              >
                <div className={styles.naveScreen__container}>
                  <nav className={styles.naveScreen__container__menu}>
                    <a href="#about-me" onClick={() => setMenuIsOpen(false)}>
                      About me
                    </a>
                    <a href="#showcase" onClick={() => setMenuIsOpen(false)}>
                      Showcase
                    </a>
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="nonreferrer"
                      onClick={() => setMenuIsOpen(false)}
                    >
                      Resume
                    </a>
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
          </Transition>
        </header>
      )}
    </Device>
  );
};

export default Header;
