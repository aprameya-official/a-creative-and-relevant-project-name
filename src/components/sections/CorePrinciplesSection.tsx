import React from 'react';
import SectionHeading from '../common/SectionHeading';
import AsciiArtBackground from '../icons/AsciiArtBackground';

const ProgressBar = ({ label, percentage, colorClass }: { label: string, percentage: number, colorClass: string }) => (
    <div>
        <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-300">{label}</span>
            <span className="text-sm font-medium text-gray-400">{percentage}%</span>
        </div>
        <div className="w-full bg-brand-surface rounded-full h-2.5">
            <div className={`${colorClass} h-2.5 rounded-full`} style={{ width: `${percentage}%` }}></div>
        </div>
    </div>
);

const CorePrinciplesSection: React.FC = () => {
  const performanceData = [
    { url: "techcrunch.com", time: "0.8 seconds" },
    { url: "ycombinator.com", time: "0.6 seconds" },
    { url: "github.com", time: "0.9 seconds" },
  ];

  return (
    <section className="py-20 sm:py-28 bg-brand-bg relative">
        <AsciiArtBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Core"
          title="Core principles, proven performance"
          description="Built from the ground up to be the most reliable and performant web scraping solution."
        />
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <div className="bg-brand-surface border border-brand-border rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white">No proxy headaches</h3>
            <p className="mt-4 text-gray-400">Reliable. Covers 96% of the web including sites with strong bot protection. Our system handles proxy rotation and browser fingerprinting for you.</p>
            <div className="mt-8 space-y-6">
                <ProgressBar label="Firecrawl" percentage={96} colorClass="bg-fire-red" />
                <ProgressBar label="Puppeteer + Proxies" percentage={65} colorClass="bg-gray-600" />
                <ProgressBar label="cURL + Proxies" percentage={40} colorClass="bg-gray-700" />
            </div>
          </div>
          <div className="bg-brand-surface border border-brand-border rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white">Speed that feels invisible</h3>
            <p className="mt-4 text-gray-400">Blazingly fast. Delivers results in less than 1 second for most websites. Optimized for speed and efficiency.</p>
            <div className="mt-8 space-y-4">
                {performanceData.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-[#0A0A0A] rounded-md">
                        <span className="font-mono text-gray-300">{item.url}</span>
                        <span className="font-semibold text-white">{item.time}</span>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorePrinciplesSection;
