import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ComponentPropsWithoutRef<'a'> {
  children: React.ReactNode;
}

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <a {...rest} className={styles.button}>
      {children}
    </a>
  );
};

export default Button;
