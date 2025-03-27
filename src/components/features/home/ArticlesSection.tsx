'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { articles } from '@/data/articles';

const ArticlesSection = () => {
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      scroll('right');
    }
    if (isRightSwipe) {
      scroll('left');
    }
  };

  // Đóng dialog khi click vào overlay
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedArticle(null);
    }
  };

  return (
    <section id="articles" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Tiêu đề */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
            Bài viết chuyên sâu
          </h2>
          <p className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">
            Khám phá phân tích về quy luật cung cầu trong thời đại mới
          </p>
        </div>

        {/* Slider */}
        <div className="relative group">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gray-100"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gray-100"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {articles.map((article, index) => (
              <div
                key={article.id}
                className="flex-none w-80 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer snap-center overflow-hidden"
                style={{ animation: `fadeIn 0.5s ease-out ${index * 0.2}s both` }}
                onClick={() => setSelectedArticle(article)}
              >
                <div className="relative h-40 overflow-hidden rounded-t-xl">
                  <Image
                    src={article.thumbnail}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex gap-2 mb-3">
                    {article.hashtags.map((tag, i) => (
                      <span key={i} className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{article.contents[0]}</p>
                  <div className="mt-3 text-xs text-gray-500">
                    {new Date(article.createdAt).toLocaleDateString('vi-VN')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dialog */}
        {selectedArticle && (
          <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 animate-fade-in"
            onClick={handleOverlayClick}
          >
            <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto scrollbar-hidden">
              <div className="relative h-96 w-full object-contain rounded-t-2xl">
                <Image
                  src={selectedArticle.thumbnail}
                  alt={selectedArticle.title}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-3 right-3 bg-white/90 p-2 rounded-full hover:bg-white transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-4">
                  {selectedArticle.hashtags.map((tag, i) => (
                    <span key={i} className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedArticle.title}</h2>
                <div className="text-gray-700 text-sm leading-relaxed mb-6">
                  {selectedArticle.contents.map((content, index) => (
                    <p key={index} className="mb-3">{content}</p>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">
                    {new Date(selectedArticle.createdAt).toLocaleDateString('vi-VN')}
                  </span>
                  <div className="flex gap-3">
                    <a
                      href={selectedArticle.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#1877F2] text-white px-4 py-2 rounded-full text-sm hover:bg-[#166FE5] transition-colors duration-300 flex items-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      Chia sẻ
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ArticlesSection;