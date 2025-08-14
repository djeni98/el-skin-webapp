import type { Metadata } from 'next';
import '../index.css';
import 'normalize.css';

import Footer from '../components/Footer/Footer';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
 
export const metadata: Metadata = {
  title: 'React App',
  description: 'Web site created with Next.js.',
};
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
        <Footer />
      </body>
    </html>
  );
}