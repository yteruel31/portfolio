import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return <a className={styles.button}>{children}</a>;
};

export default Button;
