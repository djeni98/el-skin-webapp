'use client';

import '../index.css';
import 'normalize.css';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { Provider } from 'react-redux';
import { store } from '../store';

config.autoAddCss = false;
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <title>AL SKIN</title>
        <meta name="description" content="Sobre a AL SKIN" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Provider store={store}>
          <Header />
          <div id="root">{children}</div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}