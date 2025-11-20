import React from 'react';
import Button from '../common/Button';
import SectionHeading from '../common/SectionHeading';
import AsciiArtBackground from '../icons/AsciiArtBackground';

const CallToActionBlock: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
        <AsciiArtBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionHeading
                label="Get started"
                title="Ready to build?"
                description="Start getting Web Data for free, then add a site plan to go live. Account plans unlock additional features."
            />
            <div className="mt-8 flex justify-center items-center gap-4">
                <Button variant="primary" className="px-6 py-3">Start for free</Button>
                <Button variant="secondary" className="px-6 py-3">See our plans</Button>
            </div>
        </div>
    </section>
  );
};

export default CallToActionBlock;
