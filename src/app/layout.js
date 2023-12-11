import './reset.css'
import './globals.css'
import Header from './components/Header';
import Footer from './components/Footer';
import localFont from 'next/font/local'

export const metadata = {
  title: 'catalog - 80 Level',
  description: 'Browse the 80 Level 3d metasites',
}

const euclid = localFont({
  src: [
    {
      path: './fonts/euclid_circular_b_regular-webfont.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/euclid_circular_b_italic-webfont.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/euclid_circular_b_medium-webfont.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/euclid_circular_b_medium_italic-webfont.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/euclid_circular_b_semibold-webfont.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/euclid_circular_b_semibold_italic-webfont.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: './fonts/euclid_circular_b_bold-webfont.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/euclid_circular_b_bold_italic-webfont.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={euclid.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
