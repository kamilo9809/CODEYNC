// src/pages/components/news/NewsDetail.tsx
import React from "react";
import { useParams } from "react-router-dom";
import newsData from "../../../utilities/json/news.json";

interface News {
  id: number;
  title: string;
  content: string;
  content2?: string;
  content3?: string;
  title2?: string;
  title3?: string;
  image: string;
  image2?: string;
  urlVideo?: string;
}

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const news = newsData.find((n: News) => n.id === parseInt(id!));

  if (!news) {
    return <h2 className="text-red-500 text-center">News not found</h2>;
  }

  const videoEmbedUrl = news.urlVideo
    ? news.urlVideo.replace("watch?v=", "embed/")
    : "";

  return (
    <div className="flex flex-col min-h-screen p-4">
      <div className="flex flex-col items-center text-left mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">{news.title}</h1>
        <div className="w-full mb-4">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-auto max-h-[30rem] object-cover rounded-lg shadow-md"
          />
        </div>
        <div
          className="text-white-800 whitespace-pre-wrap mb-4"
          dangerouslySetInnerHTML={{ __html: news.content }}
        />
        {videoEmbedUrl && (
          <div className="w-full m-4">
            <iframe
              src={videoEmbedUrl}
              title="Video"
              className="w-full h-[30rem] rounded-lg shadow-md"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        )}
        {news.title2 && (
          <h2 className="text-xl font-semibold m-4">{news.title2}</h2>
        )}

        <div
          className="text-white-800 whitespace-pre-wrap mb-4"
          dangerouslySetInnerHTML={{ __html: news.content2 }}
        />

        <img
          src={news.image2}
          alt={news.title}
          className="w-full h-auto max-h-[30rem] object-cover rounded-lg shadow-md"
        />

        {news.title3 && (
          <h2 className="text-xl font-semibold m-4">{news.title3}</h2>
        )}

        <div
          className="text-white-800 whitespace-pre-wrap mb-4"
          dangerouslySetInnerHTML={{ __html: news.content3 }}
        />
      </div>
    </div>
  );
};

export default NewsDetail;
