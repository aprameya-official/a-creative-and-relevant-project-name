import React from 'react';
import SectionHeading from '../common/SectionHeading';
import AsciiArtBackground from '../icons/AsciiArtBackground';

const FeatureCard = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => (
    <div className="bg-brand-surface border border-brand-border rounded-lg p-6">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-bg border border-brand-border">
            {icon}
        </div>
        <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-gray-400">{description}</p>
    </div>
);

const DocumentIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-fire-red" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
);

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-fire-red" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);

const BrowserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-fire-red" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);

const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-fire-red" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.917l9-3.462 9 3.462a12.02 12.02 0 00-2.382-9.971z" /></svg>
);

const ZeroConfigFeaturesSection: React.FC = () => {
  const features = [
    { title: "Docs to data", description: "Convert unstructured website content into clean, LLM-ready markdown or structured data.", icon: <DocumentIcon /> },
    { title: "Smart wait", description: "Intelligently waits for dynamic content to load, ensuring you get the full picture.", icon: <ClockIcon /> },
    { title: "Scrapes the real thing", description: "Renders JavaScript just like a real browser, handling SPAs and complex client-side logic.", icon: <BrowserIcon /> },
    { title: "Invisible access", description: "Automatically rotates proxies and manages browser fingerprints to avoid blocks.", icon: <ShieldIcon /> },
  ];

  return (
    <section className="py-20 sm:py-28 bg-brand-surface relative overflow-hidden">
      <AsciiArtBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Features"
          title="We handle the hard stuff"
          description="Rotating proxies, headless browser management, and content parsing are all handled out of the box."
        />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(feature => <FeatureCard key={feature.title} {...feature} />)}
        </div>
      </div>
    </section>
  );
};

export default ZeroConfigFeaturesSection;
