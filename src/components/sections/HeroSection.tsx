import React, { useState } from 'react';
import Button from '../common/Button';
import CodeBlock from '../common/CodeBlock';
import AsciiArtBackground from '../icons/AsciiArtBackground';

const codeSnippets = {
  Scrape: `{
  "success": true,
  "data": {
    "content": "Firecrawl is a platform to crawl...",
    "markdown": "# Firecrawl\\n\\nA platform to...",
    "metadata": {
      "title": "Firecrawl | Turn websites into data",
      "description": "Crawl, scrape and extract...",
      "ogTitle": "Firecrawl | Turn websites into data",
      ...
    }
  }
}`,
  Search: `{
  "success": true,
  "data": [
    {
      "url": "https://firecrawl.dev/blog/v2",
      "snippets": [
        "Introducing Firecrawl v2...",
        "The best web data API..."
      ],
      "score": 0.98
    }
  ]
}`,
  Map: `{
  "success": true,
  "data": {
    "sitemap": [
      "/",
      "/pricing",
      "/blog",
      "/blog/v2"
    ]
  }
}`,
  Crawl: `{
  "success": true,
  "jobId": "b1f8f9e1-2c7c-4a3d-8f3e-7a5b3c9d1a2b",
  "status": "active",
  "data": null
}`,
};

const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Scrape' | 'Search' | 'Map' | 'Crawl'>('Scrape');

  return (
    <section className="relative overflow-hidden text-center py-24 sm:py-32 lg:py-40">
      <AsciiArtBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight">
          Turn websites into <span className="text-fire-red">LLM-ready data</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-400">
          Power your AI apps with structured data from any website. Firecrawl crawls, scrapes, and converts any website into clean, LLM-ready markdown or structured data.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button variant="primary" className="px-6 py-3">Start for free</Button>
          <Button variant="secondary" className="px-6 py-3">Read the docs</Button>
        </div>
        <p className="mt-4 text-sm text-gray-500">It's also <a href="#" className="text-gray-400 underline hover:text-white">open source</a>.</p>
        
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="flex justify-center border-b border-brand-border mb-4">
            {(['Scrape', 'Search', 'Map', 'Crawl'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 font-medium transition-colors ${
                  activeTab === tab 
                    ? 'text-fire-red border-b-2 border-fire-red' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="text-left">
            <CodeBlock content={codeSnippets[activeTab]} language="json" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
