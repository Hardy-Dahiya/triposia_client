import Header from '@/src/components/Header/Header';
import Script from 'next/script';

export default function Page() {
  return (
    <div>
      <Header />
      <div className="container text-center">
        <Script type="text/javascript" src="//search.triposia.com/iframe.js" />
      </div>
    </div>
  );
}
