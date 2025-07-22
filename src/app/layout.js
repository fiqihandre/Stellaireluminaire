import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'Stellaire Luminaire',
  description: 'Lighting the way with stellaireluminaire',
  openGraph: {
    title: 'Stellaire Luminaire',
    description: 'Lighting the way with stellaireluminaire',
    url: 'https://stellaire.netlify.app',
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
    title: 'Stellaire Luminaire',
    description: 'Lighting the way with stellaireluminaire',
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
