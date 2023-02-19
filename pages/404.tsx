import Link from 'next/link';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import '../styles/globals.css';

export default function FourOhFour() {
  return (
    <>
      <div className="flex flex-col items-center">
        <PrimaryLayout>
          <h1>404 - Page Not Found</h1>

          <Link href="/">Go back home</Link>
        </PrimaryLayout>
      </div>
    </>
  );
}
