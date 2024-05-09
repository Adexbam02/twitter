"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";



interface Article{
  article: string
  url: string
  source: string
  urlToImage: string
  sourceName: string
  title: string
}

export default function News() {
  const [news, setNews] = useState([]);
  const [articleNum, setArticleNum] = useState(3);
  const sourceName = source.name
  useEffect(() => {
    fetch("https://saurav.tech/NewsAPI/top-headlines/category/business/us.json")
      .then((res) => res.json())
      .then((data) => {
        setNews(data.articles);
      });
  });
  return (
    <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2">
      <h4 className="font-bold text-xl px-4">What&apos;s is happening</h4>
      {news.slice(0, articleNum).map((article : Article) => (
        <div key={article.url}>
          <Link href={article.url} target="_blank">
            <div className="flex items-center justify-between px-4 py-2 space-x-1 hover:bg-gray-200 transition duration-200">
              <div
                className="
              space-y-0.5"
              >
                <h6 className="text-sm font-bold">{article.title}</h6>
                <p className="text-xs font-medium text-gray-500">
                  {article.source.name}
                </p>
              </div>
              <img src={article.urlToImage} alt="" width={70} className="rounded-xl"/>
              {/* <Image
                src={article.urlToImage}
                alt={article.title}
                width={70}
                height={70}
                className="rounded-xl"
              ></Image> */}
            </div>
          </Link>
        </div>
      ))}
      <button
        onClick={() => setArticleNum(articleNum + 3)}
        className="text-blue-300 pl-4 pb-3 hover:text-blue-400 text-sm"
      >
        Load More
      </button>
    </div>
  );
}
