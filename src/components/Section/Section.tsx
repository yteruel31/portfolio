'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './Section.module.css';

interface SectionProps {
  children: React.ReactNode;
  threshold?: number;
}

const Section = ({ children, threshold }: SectionProps) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
    root: null,
  });

  return (
    <section
      ref={ref}
      className={`${styles.section} ${inView ? styles.section__fadeIn : ''}`}
    >
      {children}
    </section>
  );
};

export default Section;
