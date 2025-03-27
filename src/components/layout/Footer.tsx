import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary/10 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            © 2024 Quy luật cung cầu. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300">
              Về chúng tôi
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300">
              Liên hệ
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300">
              Điều khoản sử dụng
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
