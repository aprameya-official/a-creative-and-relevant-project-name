import React from 'react';

const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-fire-red text-white text-center py-2 text-sm">
      Introducing Firecrawl v2.5 - The world's best web data API.
      <a href="#" className="font-semibold underline ml-2 hover:text-gray-200">
        Read the blog.
      </a>
    </div>
  );
};

export default AnnouncementBar;
