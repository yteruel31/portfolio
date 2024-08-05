import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Header from '@/components/Header/Header';
import styles from './layout.module.css';
import React from 'react';
import Footer from '@/components/Footer/Footer';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Yoann Teruel - Frontend developer',
  description:
    'I like to create modern web applications with love and incorporate popular libraries and frameworks such as React & Next.js.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.layout}>
          <Header />
          <div className={styles.content}>{children}</div>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
