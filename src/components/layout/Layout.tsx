import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-gray-200">
      <Header />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
