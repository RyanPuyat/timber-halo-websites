import Logo from './components/Logo';
import Navigation from './components/Navigation';

export const metadata = {
  title: 'Timber Halo',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
