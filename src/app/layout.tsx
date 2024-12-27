import React from 'react';
import './globals.css';

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: 'STRATARA',
  description: 'Modern family office for young professionals',
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
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
};

export default RootLayout;