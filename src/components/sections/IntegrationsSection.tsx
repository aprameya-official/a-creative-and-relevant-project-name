import React from 'react';
import SectionHeading from '../common/SectionHeading';
import GithubIcon from '../icons/GithubIcon';
import StarIcon from '../icons/StarIcon';

const GithubIssue = ({ user, title, issueNum, time, avatarUrl }: { user: string; title:string; issueNum: number; time: string; avatarUrl: string; }) => (
    <div className="flex items-start gap-3 p-3 hover:bg-brand-surface rounded-md transition-colors">
        <img src={avatarUrl} alt={user} className="w-8 h-8 rounded-full" />
        <div>
            <p className="text-gray-200 text-sm">{title}</p>
            <p className="text-xs text-gray-500">#{issueNum} opened {time} by {user}</p>
        </div>
    </div>
);

const IntegrationsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Integrations"
          title="Use well-known tools"
          description="Already fully integrated with the most popular AI frameworks and libraries."
        />
        <div className="mt-16 max-w-2xl mx-auto bg-brand-bg border border-brand-border rounded-lg p-6">
            <div className="flex justify-between items-start">
                <div>
                    <div className="flex items-center gap-2">
                        <GithubIcon className="w-5 h-5 text-gray-400" />
                        <a href="#" className="text-lg font-semibold text-white hover:underline">mendableai/firecrawl</a>
                        <span className="text-xs text-gray-500 border border-gray-700 rounded-full px-2 py-0.5">Public</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">An API to crawl, scrape and extract data from any website.</p>
                </div>
                <div className="flex items-center gap-2 text-sm bg-brand-surface border border-brand-border px-3 py-1.5 rounded-md">
                    <StarIcon className="w-4 h-4 text-yellow-400" />
                    <span className="font-semibold text-white">68.1K</span>
                    <span className="text-gray-400">stars</span>
                </div>
            </div>
            <div className="mt-6 border-t border-brand-border pt-4">
                <GithubIssue user="aparupganguly" title="Feature Request: Add support for sitemap.xml" issueNum={245} time="1d ago" avatarUrl="https://www.firecrawl.dev/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F89296617%3Fv%3D4&w=48&q=75" />
                <GithubIssue user="rafaelsideguide" title="Bug: Crawl job hangs on specific websites" issueNum={243} time="2d ago" avatarUrl="https://www.firecrawl.dev/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F150964962%3Fv%3D4&w=48&q=75" />
                <GithubIssue user="mogery" title="Docs: Update Python examples for v2.5" issueNum={241} time="3d ago" avatarUrl="https://www.firecrawl.dev/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F66118807%3Fv%3D4&w=48&q=75" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
