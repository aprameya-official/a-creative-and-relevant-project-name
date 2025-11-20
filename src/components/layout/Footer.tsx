import React from 'react';
import GithubIcon from '../icons/GithubIcon';

const SocialIcon = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">{children}</a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <li><a href={href} className="text-gray-400 hover:text-white transition-colors text-sm">{children}</a></li>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-bg border-t border-brand-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    <div className="col-span-2 lg:col-span-2">
                        <div className="flex items-center space-x-2">
                            <svg className="h-8 w-8 text-fire-red" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" /></svg>
                            <span className="font-bold text-xl text-white">Firecrawl</span>
                        </div>
                        <p className="mt-4 text-sm text-gray-400 max-w-xs">The easiest way to extract data from the web.</p>
                        <p className="mt-2 text-xs text-gray-500">Backed by Y Combinator</p>
                        <div className="flex space-x-4 mt-6">
                            <SocialIcon href="#"><GithubIcon className="h-5 w-5" /></SocialIcon>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-100 tracking-wider uppercase">Products</h3>
                        <ul className="mt-4 space-y-3">
                            <FooterLink href="#">Scrape API</FooterLink>
                            <FooterLink href="#">Crawl API</FooterLink>
                            <FooterLink href="#">Search API</FooterLink>
                            <FooterLink href="#">LLM Ready</FooterLink>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-100 tracking-wider uppercase">Use Cases</h3>
                        <ul className="mt-4 space-y-3">
                            <FooterLink href="#">Lead Generation</FooterLink>
                            <FooterLink href="#">AI Agent Training</FooterLink>
                            <FooterLink href="#">Data Enrichment</FooterLink>
                            <FooterLink href="#">Market Research</FooterLink>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-sm font-semibold text-gray-100 tracking-wider uppercase">Documentation</h3>
                        <ul className="mt-4 space-y-3">
                            <FooterLink href="#">Quickstart</FooterLink>
                            <FooterLink href="#">API Reference</FooterLink>
                            <FooterLink href="#">Integrations</FooterLink>
                            <FooterLink href="#">Blog</FooterLink>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-100 tracking-wider uppercase">Company</h3>
                        <ul className="mt-4 space-y-3">
                            <FooterLink href="#">About</FooterLink>
                            <FooterLink href="#">Pricing</FooterLink>
                            <FooterLink href="#">Contact</FooterLink>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-brand-border pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Firecrawl, Inc. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 sm:mt-0">
                        <a href="#" className="hover:text-white">Terms of Service</a>
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
