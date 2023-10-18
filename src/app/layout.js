import './reset.css'
import './globals.css'
import Footer from './components/Footer';

export const metadata = {
  title: 'catalog - 80 level',
  description: 'Browse the 80 level cloud experiences',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
