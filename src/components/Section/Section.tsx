'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './Section.module.css';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  threshold?: number;
  container?: boolean;
}

const Section = ({
  children,
  threshold,
  id,
  container = true,
}: SectionProps) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
    root: null,
  });

  const content = container ? (
    <section id={id} className={styles.container}>
      {children}
    </section>
  ) : (
    <>{children}</>
  );

  return (
    <div
      ref={ref}
      className={`${styles.section} ${inView ? styles.section__fadeIn : ''}`}
    >
      {content}
    </div>
  );
};

export default Section;
