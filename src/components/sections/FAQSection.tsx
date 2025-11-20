import React, { useState } from 'react';
import SectionHeading from '../common/SectionHeading';
import ChevronDownIcon from '../icons/ChevronDownIcon';

const AccordionItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-brand-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-6"
      >
        <span className="text-lg font-medium text-gray-100">{question}</span>
        <ChevronDownIcon className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-6 text-gray-400">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const faqs = [
    { q: "What is Firecrawl?", a: "Firecrawl is an API platform that crawls, scrapes, and indexes websites to turn them into LLM-ready data. It allows you to build applications on top of structured web data effortlessly." },
    { q: "How is this different from other scraping tools?", a: "Firecrawl is built for developers working with AI. It not only scrapes content but also cleans it (e.g., converts to Markdown) and provides structured data like metadata, making it immediately useful for LLMs." },
    { q: "Do I need proxies?", a: "No, you don't. Firecrawl handles all proxy rotation and bot prevention bypasses for you. You can focus on your application logic." },
    { q: "What's your success rate?", a: "We have a 96% success rate on average across all websites, including those with heavy anti-bot protection." },
    { q: "Is there a free plan?", a: "Yes, we have a generous free plan that allows you to make a significant number of requests per month. It's perfect for development and small projects." },
    { q: "How does billing work?", a: "Our billing is based on a credit system. Each API call consumes a certain number of credits depending on its complexity. You can purchase credit packs or subscribe to a monthly plan." },
  ];

  return (
    <section className="py-20 sm:py-28 bg-brand-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know about Firecrawl. Can't find the answer you're looking for? Feel free to contact our support."
        />
        <div className="mt-12">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
