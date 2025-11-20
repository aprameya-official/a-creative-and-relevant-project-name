import React from 'react';
import SectionHeading from '../common/SectionHeading';
import CodeBlock from '../common/CodeBlock';

const pythonCode = `from firecrawl import FirecrawlApp

# Initialize the FirecrawlApp with your API key
app = FirecrawlApp(api_key="YOUR_API_KEY")

# Scrape a single URL
scraped_data = app.scrape_url('https://firecrawl.dev')

# Crawl a website
# -'url': The URL to crawl
# -'params':
#   - 'pageOptions':
#       - 'onlyMainContent': True to extract only main content
#   - 'crawlerOptions':
#       - 'limit': Number of pages to crawl
#       - 'includes': List of URL patterns to include
crawled_data = app.crawl_url('firecrawl.dev', params={
    'pageOptions': {'onlyMainContent': True},
    'crawlerOptions': { 'limit': 100, 'includes': ['/blog/*'] }
})

# Access the data
for item in crawled_data:
    print(item['markdown'])`;

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Main Features"
          title="Developer First"
          description="Enhance your apps with real-time, structured web data. Our API is designed for simplicity and power."
        />
        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
             <CodeBlock content={pythonCode} language="Python" />
             <img src="https://www.firecrawl.dev/assets/developer/1.png" alt="developer icon 1" className="absolute -top-8 -left-8 w-16 h-16 rounded-full shadow-lg hidden lg:block" />
             <img src="https://www.firecrawl.dev/assets/developer/2.png" alt="developer icon 2" className="absolute -bottom-8 -right-8 w-24 h-24 rounded-lg shadow-lg hidden lg:block" />
             <img src="https://www.firecrawl.dev/assets/developer/3.png" alt="developer icon 3" className="absolute top-1/2 -right-12 w-20 h-20 rounded-full shadow-lg hidden lg:block" />
          </div>
          <div className="text-center lg:text-left">
            <h3 className="text-3xl font-bold text-white">Start scraping today</h3>
            <p className="mt-4 text-gray-400">
              Our API is designed for ease of use. Get started in minutes with our official libraries for Python and NodeJS, or use any language to make simple HTTP requests.
            </p>
            <p className="mt-4 text-gray-400">
                Firecrawl handles everything from proxy rotation to CAPTCHA solving, so you can focus on building your application.
            </p>
            <a href="#" className="mt-6 inline-block text-fire-red font-semibold hover:underline">
              Read the docs &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
