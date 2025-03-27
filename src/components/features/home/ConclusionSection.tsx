import React from 'react';

const ConclusionSection = () => {
  const keyTakeaways = [
    {
      title: 'Quy luật cơ bản',
      description: 'Quy luật cung cầu là một trong những quy luật cơ bản của kinh tế thị trường, thể hiện mối quan hệ giữa cung và cầu về hàng hóa, dịch vụ.',
      icon: '🎓'
    },
    {
      title: 'Ứng dụng thực tế',
      description: 'Áp dụng quy luật cung cầu giúp ra quyết định tốt hơn trong kinh doanh và đầu tư.',
      icon: '💡'
    },
    {
      title: 'Dự đoán xu hướng',
      description: 'Hiểu quy luật cung cầu giúp dự đoán được các xu hướng thị trường trong tương lai.',
      icon: '🔮'
    }
  ];

  return (
    <section id="conclusion" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kết luận
          </h2>
        </div>

        <div className="max-w-3xl mx-auto text-center animate-fade-in mb-12">
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Quy luật cung cầu là một nguyên tắc cơ bản và quan trọng trong kinh tế học. Việc hiểu và áp dụng quy luật này giúp chúng ta có cái nhìn sâu sắc hơn về cách thị trường hoạt động và đưa ra các quyết định kinh tế tốt hơn.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {keyTakeaways.map((takeaway, index) => (
            <div
              key={takeaway.title}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-4xl mb-4">{takeaway.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-3">{takeaway.title}</h3>
              <p className="text-gray-600">{takeaway.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConclusionSection;
