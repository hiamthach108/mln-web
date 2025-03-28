import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Cung cầu thời đại</h3>
            <p className="text-gray-400">
              Khám phá quy luật cung cầu theo quan điểm Triết học Mác - Lênin
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#intro" className="text-gray-400 hover:text-white transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="#articles" className="text-gray-400 hover:text-white transition-colors">
                  Bài viết
                </Link>
              </li>
              <li>
                <Link href="#conclusion" className="text-gray-400 hover:text-white transition-colors">
                  Kết luận
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Kết nối</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61574253620890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1877F2] text-white p-3 rounded-full shadow-lg hover:bg-[#166FE5] transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Cung cầu thời đại. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
