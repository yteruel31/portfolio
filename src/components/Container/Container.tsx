import styles from './Container.module.css';
import React from 'react';

interface ContainerProps extends React.ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
}

const Container = ({ children, ...rest }: ContainerProps) => {
  return (
    <div {...rest} className={styles.container}>
      {children}
    </div>
  );
};

export default Container;
