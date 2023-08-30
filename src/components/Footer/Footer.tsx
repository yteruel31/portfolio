import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <p>Built with ❤️ by Yoann Teruel</p>
      </div>
    </footer>
  );
};

export default Footer;
