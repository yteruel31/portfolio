import styles from './Header.module.css';
import { GithubIcon, LinkedInIcon } from '@/components/Icons';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.title}>
            <a>Yoann TERUEL</a>
          </div>
          <div className={styles.content}>
            <nav className={styles.navbarMenu}>
              <a>About me</a>
              <a>Projects</a>
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
