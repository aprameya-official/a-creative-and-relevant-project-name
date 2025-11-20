import React from 'react';

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ label, title, description, className = '' }) => {
  return (
    <div className={`text-center ${className}`}>
      <span className="text-fire-red font-semibold">{label}</span>
      <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-100">{title}</h2>
      {description && <p className="mt-4 max-w-2xl mx-auto text-gray-400">{description}</p>}
    </div>
  );
};

export default SectionHeading;
