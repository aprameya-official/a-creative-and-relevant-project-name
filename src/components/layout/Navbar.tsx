import React from 'react';
import Button from '../common/Button';
import GithubIcon from '../icons/GithubIcon';
import StarIcon from '../icons/StarIcon';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-gray-300 hover:text-white transition-colors duration-200">
    {children}
  </a>
);

const Navbar: React.FC = () => {
  const navLinks = [
    { name: 'Products', href: '#' },
    { name: 'Playground', href: '#' },
    { name: 'Docs', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Integrations', href: '#' },
    { name: 'Blog', href: '#' },
  ];

  return (
    <nav className="bg-brand-bg/80 backdrop-blur-sm border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 flex items-center gap-2">
              <svg className="h-8 w-8 text-fire-red" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" /></svg>
              <span className="font-bold text-xl text-white">Firecrawl</span>
            </a>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <NavLink key={link.name} href={link.href}>
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hidden sm:flex items-center gap-2 text-sm bg-brand-surface border border-brand-border px-3 py-1.5 rounded-md hover:bg-gray-800 transition-colors">
              <GithubIcon className="w-4 h-4" />
              <StarIcon className="w-4 h-4 text-yellow-400" />
              <span className="font-semibold">68.1K</span>
            </a>
            <Button variant="primary" className="text-sm">Sign up</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
