import React from 'react';
import Image from 'next/image';

const HowItWorksSection = () => {
  const factors = [
    {
      title: 'Cung',
      description: 'Cung là lượng hàng hóa hoặc dịch vụ mà người bán sẵn sàng và có khả năng bán ở các mức giá khác nhau trong một khoảng thời gian nhất định.',
      icon: '📦'
    },
    {
      title: 'Cầu',
      description: 'Cầu là lượng hàng hóa hoặc dịch vụ mà người mua sẵn sàng và có khả năng mua ở các mức giá khác nhau trong một khoảng thời gian nhất định.',
      icon: '🛍️'
    },
    {
      title: 'Giá cả',
      description: 'Giá cả là biểu hiện bằng tiền của giá trị hàng hóa, được hình thành trên cơ sở tương quan cung cầu trên thị trường.',
      icon: '💰'
    },
    {
      title: 'Thị trường',
      description: 'Thị trường là nơi diễn ra các quan hệ trao đổi hàng hóa, nơi quy luật cung cầu tác động và điều tiết sản xuất.',
      icon: '🏪'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Các yếu tố ảnh hưởng
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá các yếu tố chính ảnh hưởng đến quy luật cung cầu và cách chúng tương tác với nhau
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <div className="space-y-6">
              {factors.map((factor, index) => (
                <div
                  key={factor.title}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{factor.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">{factor.title}</h3>
                      <p className="text-gray-600">{factor.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[500px] animate-slide-in-right">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl"></div>
            <Image
              src="/images/elements.jpg"
              alt="Các yếu tố ảnh hưởng"
              fill
              className="object-cover object-center rounded-2xl shadow-xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg animate-slide-in-left">
            <h3 className="text-2xl font-bold text-primary mb-4">Tác động của cung</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-primary">•</span>
                <span className="text-gray-600">Khi cung tăng, giá giảm và sản lượng tăng</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary">•</span>
                <span className="text-gray-600">Khi cung giảm, giá tăng và sản lượng giảm</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary">•</span>
                <span className="text-gray-600">Cung chịu ảnh hưởng bởi chi phí sản xuất và công nghệ</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg animate-slide-in-right">
            <h3 className="text-2xl font-bold text-primary mb-4">Tác động của cầu</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-primary">•</span>
                <span className="text-gray-600">Khi cầu tăng, giá tăng và sản lượng tăng</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary">•</span>
                <span className="text-gray-600">Khi cầu giảm, giá giảm và sản lượng giảm</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary">•</span>
                <span className="text-gray-600">Cầu chịu ảnh hưởng bởi thu nhập và thị hiếu</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
