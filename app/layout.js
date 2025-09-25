import Logo from './components/Logo';
import Navigation from './components/Navigation';

import { Josefin_Sans } from 'next/font/google';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Timber Halo',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefin.className}`}>
        <header>
          <Logo />
        </header>
        <Navigation />
        <main>{children}</main>
        <footer>All right reserved</footer>
      </body>
    </html>
  );
}
