import Header from '@/components/common/Header/Header';
import Footer from '@/components/common/Footer/Footer';
import { getMenuItems } from '@/components/NavigationData';
import '@/styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;

export const metadata = {
  title: 'xMatix',
  description: 'Your company tagline',
};

export default async function RootLayout({ children }) {
  const menuItems = await getMenuItems();

  return (
    <html lang="en">
      <body>
        <Header menuItems={menuItems} />
        {children}
        <Footer />
      </body>
    </html>
  );
}