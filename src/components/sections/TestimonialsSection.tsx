import React from 'react';
import SectionHeading from '../common/SectionHeading';

const testimonials = [
    { name: "Morgan Linton", handle: "@morganlinton", text: "Wow - @fire_crawl is one of the most impressive AI-focused dev tools I've seen. Just saved me a solid week of work. Highly recommend checking it out if you're building anything that needs to crawl and structure data from the web.", avatar: "https://www.firecrawl.dev/assets/testimonials/morgan-linton.png" },
    { name: "Chris DeWeese", handle: "@ChrisDeWeese", text: "If you're building any sort of RAG system that needs to index websites, you need to check out Firecrawl. Takes all the pain out of crawling and parsing sites.", avatar: "https://www.firecrawl.dev/assets/testimonials/chris-deweese.png" },
    { name: "Alex Reibman", handle: "@alexreibman", text: "Firecrawl is insane. This is the infra for so many AI agent use cases.", avatar: "https://www.firecrawl.dev/assets/testimonials/alex-reibman.png" },
    { name: "Tom Morpho", handle: "@tom_morpho", text: "Firecrawl is magical. Was able to crawl our entire documentation and turn it into clean markdown in a few minutes.", avatar: "https://www.firecrawl.dev/assets/testimonials/tom-morpho.png" },
    { name: "Bardia", handle: "@bardia", text: "Just discovered @fire_crawl and it's a game changer for building RAG apps. Crawling and converting websites to clean markdown is a breeze.", avatar: "https://www.firecrawl.dev/assets/testimonials/bardia.png" },
    { name: "Steven Tey", handle: "@steventey", text: "Building an AI app that needs to crawl websites? You gotta check out @fire_crawl! It's open-source and handles all the complexities of web scraping for you.", avatar: "https://www.firecrawl.dev/assets/testimonials/steven-tey.png" },
];

const TestimonialCard = ({ name, handle, text, avatar }: typeof testimonials[0]) => (
    <div className="bg-brand-surface border border-brand-border rounded-lg p-6 w-[350px] flex-shrink-0">
        <div className="flex items-center gap-3">
            <img src={avatar} alt={name} className="w-10 h-10 rounded-full" />
            <div>
                <p className="font-semibold text-white">{name}</p>
                <p className="text-sm text-gray-400">{handle}</p>
            </div>
        </div>
        <p className="mt-4 text-gray-300">{text}</p>
    </div>
);

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-brand-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Testimonials"
          title="People love building with Firecrawl"
          description="Discover why developers and companies trust Firecrawl to power their AI applications."
        />
      </div>
      <div className="mt-16 w-full"
        style={{
            maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)"
        }}>
        <div className="flex animate-infinite-scroll hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={index} className="mx-4">
                    <TestimonialCard {...testimonial} />
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
