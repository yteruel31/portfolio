import React from 'react';
import styles from './Title.module.css';

interface TitleProps {
  children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return (
    <div className={styles.title}>
      <h2>{children}</h2>
    </div>
  );
};

export default Title;
