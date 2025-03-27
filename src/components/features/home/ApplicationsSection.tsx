import React from 'react';
import Image from 'next/image';

const ApplicationsSection = () => {
  const applications = [
    {
      title: 'Thị trường bất động sản',
      description: 'Quy luật cung cầu ảnh hưởng trực tiếp đến giá nhà đất và xu hướng đầu tư. Khi cung thấp và cầu cao, giá bất động sản tăng.',
      icon: '🏠',
      image: 'https://picsum.photos/800/600'
    },
    {
      title: 'Thị trường chứng khoán',
      description: 'Giá cổ phiếu chịu ảnh hưởng lớn từ quy luật cung cầu. Khi nhiều người muốn mua (cầu cao), giá cổ phiếu tăng.',
      icon: '📈',
      image: 'https://picsum.photos/800/600'
    },
    {
      title: 'Thị trường lao động',
      description: 'Lương và việc làm cũng tuân theo quy luật cung cầu. Khi nhu cầu về một kỹ năng cao, lương cho vị trí đó sẽ tăng.',
      icon: '💼',
      image: 'https://picsum.photos/800/600'
    }
  ];

  return (
    <section id="applications" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ứng dụng thực tế
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá cách quy luật cung cầu được áp dụng trong các thị trường thực tế
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] animate-slide-in-left">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl"></div>
            <Image
              src="https://picsum.photos/800/600"
              alt="Ứng dụng thực tế"
              fill
              className="object-cover rounded-2xl shadow-xl"
            />
          </div>
          <div className="animate-slide-in-right">
            <div className="space-y-6">
              <div className="bg-tertiary/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-primary mb-3">Thị trường bất động sản</h3>
                <p className="text-gray-600">
                  Quy luật cung cầu ảnh hưởng trực tiếp đến giá nhà đất và xu hướng đầu tư.
                </p>
              </div>
              <div className="bg-tertiary/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-primary mb-3">Thị trường chứng khoán</h3>
                <p className="text-gray-600">
                  Giá cổ phiếu chịu ảnh hưởng lớn từ quy luật cung cầu trên thị trường.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <div
              key={app.title}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                <Image
                  src={app.image}
                  alt={app.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-3xl mb-4">{app.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-3">{app.title}</h3>
                <p className="text-gray-600">{app.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary/10 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-primary mb-4">Làm thế nào để áp dụng quy luật này?</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-primary mb-3">Cho doanh nghiệp</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Dự đoán nhu cầu thị trường</li>
                <li>• Điều chỉnh giá sản phẩm</li>
                <li>• Lập kế hoạch sản xuất</li>
                <li>• Phân tích cạnh tranh</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-primary mb-3">Cho nhà đầu tư</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Phân tích xu hướng thị trường</li>
                <li>• Đánh giá rủi ro</li>
                <li>• Tìm cơ hội đầu tư</li>
                <li>• Quản lý danh mục</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
