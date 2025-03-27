import React from 'react';
import Image from 'next/image';

const LawSection = () => {
  const keyPoints = [
    {
      title: 'Quy luật cung cầu',
      description: 'Quy luật cung cầu là quy luật cơ bản của kinh tế thị trường, thể hiện mối quan hệ giữa lượng hàng hóa hoặc dịch vụ mà người bán muốn bán và lượng hàng hóa hoặc dịch vụ mà người mua muốn mua.',
      icon: '⚖️'
    },
    {
      title: 'Giá trị và giá cả',
      description: 'Theo quan điểm Mác - Lênin, giá trị là cơ sở của giá cả, còn giá cả là biểu hiện bằng tiền của giá trị hàng hóa.',
      icon: '💰'
    },
    {
      title: 'Thị trường',
      description: 'Thị trường là nơi diễn ra các quan hệ trao đổi hàng hóa, nơi quy luật cung cầu tác động và điều tiết sản xuất.',
      icon: '🏪'
    }
  ];

  return (
    <section id="law" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quy luật cung cầu là gì?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tìm hiểu về quy luật cơ bản của kinh tế thị trường theo quan điểm của chủ nghĩa Mác - Lênin
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] animate-slide-in-left">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl"></div>
            <Image
              src="https://picsum.photos/800/600"
              alt="Quy luật cung cầu"
              fill
              className="object-cover rounded-2xl shadow-xl"
            />
          </div>
          <div className="animate-slide-in-right">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Quy luật cung cầu là một trong những quy luật cơ bản của kinh tế thị trường, thể hiện mối quan hệ giữa cung và cầu về hàng hóa, dịch vụ. Theo quan điểm của chủ nghĩa Mác - Lênin, quy luật này tác động trực tiếp đến việc hình thành giá cả thị trường và điều tiết sản xuất.
              </p>
              <div className="bg-tertiary/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-primary mb-3">Tầm quan trọng</h3>
                <p className="text-gray-600">
                  Hiểu biết về quy luật cung cầu giúp chúng ta có cái nhìn sâu sắc hơn về cách thị trường hoạt động và đưa ra các quyết định kinh tế tốt hơn trong cuộc sống hàng ngày.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {keyPoints.map((point, index) => (
            <div
              key={point.title}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-4xl mb-4">{point.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-3">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary/10 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-primary mb-4">Tại sao quy luật cung cầu quan trọng?</h3>
          <p className="text-gray-600 mb-4">
            Quy luật cung cầu giúp chúng ta hiểu được cách thị trường hoạt động và dự đoán được các xu hướng kinh tế. Nó là nền tảng cho việc ra quyết định trong kinh doanh và đầu tư.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Giúp dự đoán giá cả thị trường</li>
            <li>Hướng dẫn quyết định sản xuất</li>
            <li>Ảnh hưởng đến chính sách kinh tế</li>
            <li>Giúp hiểu được hành vi người tiêu dùng</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LawSection;
