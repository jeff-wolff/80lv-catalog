import './reset.css'
import './globals.css'
import Header from './components/Header';
import Footer from './components/Footer';
import StickyNav from './components/StickyNav';

export const metadata = {
  title: 'catalog - 80 level',
  description: 'Browse the 80 level cloud experiences',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <StickyNav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
