import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './styles/globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'TripOsia | Travel Made Easy',
  description: `Plan your adventures effortlessly with Triposia! Discover top destinations, book accommodations, and explore curated travel experiences. Whether you're planning a weekend getaway or a dream vacation, Triposia helps you every step of the way. Your journey begins here!`,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Link normal CSS files after preloading */}

        <link rel="stylesheet" href="https://aerocloud.s3.amazonaws.com/style/triposia_style.css" />
        <noscript>
          <link
            rel="stylesheet"
            href="https://aerocloud.s3.amazonaws.com/style/triposia_style.css"
          />
        </noscript>

        <link
          rel="stylesheet"
          href="https://aerocloud.s3.us-east-1.amazonaws.com/css/all.min.css"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://aerocloud.s3.us-east-1.amazonaws.com/css/all.min.css"
          />
        </noscript>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
