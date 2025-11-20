import React from 'react';

const logos = [
  "https://www.firecrawl.dev/assets-original/logocloud/1.png", "https://www.firecrawl.dev/assets-original/logocloud/2.png", "https://www.firecrawl.dev/assets-original/logocloud/3.png", "https://www.firecrawl.dev/assets-original/logocloud/4.png", "https://www.firecrawl.dev/assets-original/logocloud/5.png",
  "https://www.firecrawl.dev/assets-original/logocloud/6.png", "https://www.firecrawl.dev/assets-original/logocloud/7.png", "https://www.firecrawl.dev/assets-original/logocloud/8.png", "https://www.firecrawl.dev/assets-original/logocloud/9.png", "https://www.firecrawl.dev/assets-original/logocloud/10.png",
];

const TrustedBySection: React.FC = () => {
  return (
    <section className="py-16 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
          Trusted by 5000+ companies of all sizes
        </h2>
        <div className="mt-8 overflow-hidden" 
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
        }}>
          <div className="flex animate-infinite-scroll hover:[animation-play-state:paused]">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-48 flex items-center justify-center mx-4">
                <img src={logo} alt={`logo ${index + 1}`} className="h-8 object-contain filter grayscale contrast-50 brightness-200" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
