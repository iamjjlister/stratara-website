import React from 'react';
import './globals.css';

export const metadata = {
  title: 'STRATARA',
  description: 'Your life. Managed by STRATARA.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-montserrat">
        {children}
      </body>
    </html>
  );
}