import { PrimaryLayout } from '../../components';
import '../../styles/globals.css';

function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PrimaryLayout className={'flexCenter top-0'}>{children}</PrimaryLayout>
      </body>
    </html>
  );
}
export default RootLayout;
