import React from 'react';
import SectionHeading from '../common/SectionHeading';

const UseCaseCard = ({ title, description, imgSrc, className }: { title: string; description: string; imgSrc: string, className?: string }) => (
    <div className={`bg-brand-surface border border-brand-border rounded-lg p-6 ${className}`}>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-gray-400 text-sm">{description}</p>
        <div className="mt-6 flex justify-center items-center h-40 bg-brand-bg rounded-md p-4">
            <img src={imgSrc} alt={title} className="max-h-full max-w-full object-contain" />
        </div>
    </div>
);

const UseCasesSection: React.FC = () => {
  const useCases = [
    { title: "Chat with context", description: "Create AI assistants that can answer questions about any website.", imgSrc: "https://www.firecrawl.dev/assets/ai/bot.png" },
    { title: "Know your leads", description: "Enrich your CRM with real-time data from your leads' websites.", imgSrc: "https://www.firecrawl.dev/assets/ai/leads-1.png" },
    { title: "Build with context", description: "Empower your development tools with the ability to understand code from any repository or documentation.", imgSrc: "https://www.firecrawl.dev/assets/ai/mcps-cursor.png" },
    { title: "No insight missed", description: "Monitor websites for changes and get notified when something important happens.", imgSrc: "https://www.firecrawl.dev/assets/ai/platforms-1.png" },
  ];

  return (
    <section className="py-20 sm:py-28 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Use Cases"
          title="Transform web data into AI-powered solutions"
          description="Discover how Firecrawl enables developers to build innovative applications across various domains."
        />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <UseCaseCard title="Chat with context" description="Create AI assistants that can answer questions about any website." imgSrc="https://www.firecrawl.dev/assets/ai/bot.png" className="lg:col-span-1" />
            <UseCaseCard title="Know your leads" description="Enrich your CRM with real-time data from your leads' websites." imgSrc="https://www.firecrawl.dev/assets/ai/leads-2.png" className="lg:col-span-1" />
            <UseCaseCard title="Build with context" description="Empower your development tools with the ability to understand code from any repository or documentation." imgSrc="https://www.firecrawl.dev/assets/ai/mcps-cursor.png" className="lg:col-span-2" />
        </div>
        <div className="mt-8 text-center">
            <a href="#" className="text-fire-red font-semibold hover:underline">
                View all use cases &rarr;
            </a>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
