import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section id="intro" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-tertiary/10 to-secondary/10"></div>
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              Triết học Mác - Lênin
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Cung cầu <span className="text-primary">thời đại</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Khám phá quy luật cung cầu trong thời đại mới - một trong những quy luật cơ bản của kinh tế thị trường theo quan điểm của chủ nghĩa Mác - Lênin.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#articles"
                className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-secondary transition-colors duration-300 transform hover:scale-105"
              >
                Xem bài viết
              </a>
              <a
                href="#law"
                className="inline-block bg-white text-primary border-2 border-primary px-8 py-3 rounded-full hover:bg-primary/10 transition-colors duration-300"
              >
                Tìm hiểu thêm
              </a>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-gray-600">Bài viết</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-gray-600">Chủ đề</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-gray-600">Học mọi lúc</div>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl"></div>
            <Image
              src="https://picsum.photos/800/600"
              alt="Quy luật cung cầu"
              fill
              className="object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
