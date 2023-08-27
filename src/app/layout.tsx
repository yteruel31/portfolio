import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Header from '@/components/Header/Header';
import styles from './layout.module.css';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Yoann Teruel - Frontend developer',
  description: "Yoann Teruel's Portfolio website",
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
        </div>
        <Analytics />
      </body>
    </html>
  );
}
