// src/pages/components/news/NewsList.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import newsData from '../../../utilities/json/news.json';

interface News {
  id: number;
  title: string;
  image: string;
  urlCODEYN: string
}

const NewsList: React.FC = () => {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    setNews(newsData);
  }, []);

  return (
    <div className="p-4 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">News List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {news.map((article) => (
          <div 
            key={article.id} 
            className="border rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Link to={`/news/${article.id}`} className="block">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-600">{article.urlCODEYN}</p>
                <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
