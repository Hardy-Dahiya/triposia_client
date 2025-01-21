import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './styles/globals.css';
import { getPhone } from '@/services/phone/PhoneServices';

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
  const phone = await fetchPhone();
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
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          />
        </noscript>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <div id="popup" className="popup content">
          <p className="title is-4">
            <a
              href={`tel:+${phone.phone}`}
              className="button is-danger has-text-weight-bold is-large call-popup"
            >
              <img height={62} width={62} src="../images/phone.gif" alt="call" /> &nbsp;{' '}
              <span className="hello">Speak with Expert*</span>{' '}
              <span className="hellos">+{phone.phone}</span>
            </a>
          </p>
        </div>
      </body>
    </html>
  );
}

async function fetchPhone() {
  try {
    const response = await getPhone();
    if (response?.data.status) {
      return response.data.data;
    }
    return { phone: '' }; // Default value if data is missing
  } catch (error) {
    console.log(error);
    return { phone: '' }; // Default value if data is missing
  }
}
