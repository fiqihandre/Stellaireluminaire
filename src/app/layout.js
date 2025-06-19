import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'Culcratez',
  description: 'DECODED FOR THE STREETS',
  openGraph: {
    title: 'Culcratez',
    description: 'DECODED FOR THE STREETS',
    url: 'https://culcratez.vercel.app',
    images: [
      {
        url: '/logo.png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Culcratez',
    description: 'DECODED FOR THE STREETS',
    images: ['./logo.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
