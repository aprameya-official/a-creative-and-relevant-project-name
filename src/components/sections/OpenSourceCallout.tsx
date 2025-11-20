import React from 'react';
import Button from '../common/Button';
import SectionHeading from '../common/SectionHeading';
import GithubIcon from '../icons/GithubIcon';

const OpenSourceCallout: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading
          label="Open Source"
          title="Code you can trust"
          description="Developed transparently and in the open. Our commitment to open source means you can inspect, contribute, and trust the foundation of your data stack."
        />
        <div className="mt-8 flex justify-center">
          <Button variant="secondary" className="px-6 py-3">
            <GithubIcon className="w-5 h-5" />
            Check out our repo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OpenSourceCallout;
