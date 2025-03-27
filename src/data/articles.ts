export type Article = {
  id: number;
  thumbnail: string;
  title: string;
  contents: string[];
  hashtags: string[];
  createdAt: string;
  link: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title: 'CUNG – CẦU & KHỦNG HOẢNG KINH TẾ',
    thumbnail: 'https://res.cloudinary.com/dvvfkvlo1/image/upload/v1743087606/mln1_veuzts.jpg',
    contents: [
      '💥 Vì sao kinh tế tư bản luôn gặp khủng hoảng?',
      'Theo chủ nghĩa tư bản, khi cung vượt cầu, giá sẽ giảm và khi cầu vượt cung, giá sẽ tăng – nghe có vẻ hợp lý đúng không? Nhưng thực tế lại khác!',
      '📉 Khi hàng hóa sản xuất quá nhiều mà không bán được, thay vì giảm giá, tư bản lại…',
      '⚠️ Cắt giảm sản xuất, sa thải công nhân',
      '⚠️ Tiêu hủy hàng hóa để giữ giá',
      '⚠️ Tạo khủng hoảng để điều chỉnh lợi nhuận',
      '🚨 Trong khi đó, người lao động mất việc, nghèo đói gia tăng. Mác - Lênin chỉ ra rằng, đây là mâu thuẫn nội tại không thể tránh khỏi của chủ nghĩa tư bản.',
      '💬 Bạn đã thấy hiện tượng này ngoài đời chưa? Bình luận ngay nhé!'
    ],
    hashtags: [
      'KhủngHoảngKinhTế',
      'CungCầu',
      'ChủNghĩaMácLênin',
      'cungcauthoidai',
    ],
    createdAt: '2025-03-18',
    link: 'https://www.facebook.com/share/p/18W2qdA3x5/',
  },
  {
    id: 2,
    title: 'CUNG – CẦU TRONG XÃ HỘI XÃ HỘI CHỦ NGHĨA',
    thumbnail: 'https://res.cloudinary.com/dvvfkvlo1/image/upload/v1743087606/mln2_acmep1.jpg',
    contents: [
      '🌍 Kinh tế có thể vận hành mà không cần cạnh tranh tư bản không?',
      'Mác - Lênin chỉ ra rằng, trong xã hội XHCN, cung – cầu vẫn tồn tại, nhưng không bị chi phối bởi lợi nhuận cá nhân. Nhà nước sẽ điều tiết nền kinh tế để:',
      '🔹 Đảm bảo hàng hóa được sản xuất theo nhu cầu xã hội, không vì lợi nhuận riêng.',
      '🔹 Phân phối công bằng thay vì để thị trường tự do quyết định.',
      '🔹 Định giá dựa trên giá trị thực, không bị đầu cơ thao túng.',
      '💡 Khi cung – cầu được kiểm soát theo hướng phục vụ con người thay vì lợi nhuận, kinh tế sẽ phát triển bền vững hơn.',
      '💬 Bạn nghĩ xã hội có thể phát triển theo hướng này không? Hãy để lại ý kiến nhé!',
    ],
    hashtags: [
      'KinhTếXHCN',
      'CungCầu',
      'ChủNghĩaMácLênin',
      'cungcauthoidai',
    ],
    createdAt: '2025-03-17',
    link: 'https://www.facebook.com/share/p/17x6pjqU5F/',
  },
  {
    id: 3,
    title: 'AI KIỂM SOÁT CUNG – CẦU?',
    thumbnail: 'https://res.cloudinary.com/dvvfkvlo1/image/upload/v1743087605/mln3_lg6jpp.jpg',
    contents: [
      '💭 Bạn nghĩ thị trường tự điều tiết? Sự thật không như vậy!',
      'Trong kinh tế tư bản, các tập đoàn lớn có thể thao túng quy luật cung – cầu bằng cách:',
      '📌 Giữ hàng để tạo khan hiếm giả',
      '📌 Định giá dựa trên lợi nhuận, không phải giá trị thực',
      '📌 Chiếm lĩnh thị trường, loại bỏ cạnh tranh',
      '📉 Khi có quá nhiều hàng mà không bán được, thay vì hạ giá, họ tiêu hủy hàng hóa để giữ giá cao, dù nhiều người vẫn đang thiếu thốn.',
      '⚠️ Vậy nên, thị trường không hề "tự do" như người ta tưởng!',
      '💬 Bạn có thấy giá cả bị thao túng không? Bình luận ý kiến của bạn!',
    ],
    hashtags: [
      'CungCầu',
      'KinhTếTưBản',
      'MarxistEconomics',
      'cungcauthoidai',
    ],
    createdAt: '2025-03-16',
    link: 'https://www.facebook.com/share/p/19HSrgB8n8/',
  },
  {
    id: 4,
    title: 'CUNG – CẦU & GIÁ TRỊ LAO ĐỘNG',
    thumbnail: 'https://res.cloudinary.com/dvvfkvlo1/image/upload/v1743087606/mln4_uylrwa.jpg',
    contents: [
      '🛠️ Tại sao công nhân làm nhiều nhưng vẫn nghèo?',
      'Kinh tế học cổ điển cho rằng giá trị hàng hóa được quyết định bởi cung – cầu. Nhưng theo Mác - Lênin, giá trị thật sự của hàng hóa xuất phát từ lao động.',
      '🚨 Trong chủ nghĩa tư bản:',
      '🔹 Công nhân tạo ra sản phẩm, nhưng chỉ nhận lại một phần nhỏ giá trị họ làm ra.',
      '🔹 Chủ tư bản hưởng lợi từ chênh lệch giữa giá trị lao động và giá bán.',
      '🔹 Khi cầu tăng, giá có thể lên, nhưng công nhân vẫn nhận lương cố định!',
      '⏳ Vậy nên, dù cung – cầu có biến động, giai cấp lao động vẫn bị bóc lột trừ khi họ nắm quyền kiểm soát sản xuất.',
      '💬 Theo bạn, làm sao để đảm bảo người lao động nhận được đúng giá trị họ tạo ra?',
    ],
    hashtags: [
      'GiáTrịLaoĐộng',
      'CungCầu',
      'KinhTếHọcMácLênin',
      'cungcauthoidai',
    ],
    createdAt: '2025-03-15',
    link: 'https://www.facebook.com/share/p/1Bfmk7TNRU/',
  },
  {
    id: 5,
    title: 'CUNG – CẦU & KINH TẾ THỊ TRƯỜNG',
    thumbnail: 'https://res.cloudinary.com/dvvfkvlo1/image/upload/v1743087605/mln5_q4xexh.jpg',
    contents: [
      '💡 Cung – Cầu có thực sự điều tiết nền kinh tế?',
      'Theo kinh tế học tư sản, cung – cầu là yếu tố quyết định giá cả và phân phối hàng hóa. Nhưng Mác - Lênin chỉ ra rằng, quy luật này chỉ phản ánh bề mặt của nền kinh tế. Bản chất thật sự nằm ở quan hệ sản xuất và quyền sở hữu tư liệu sản xuất.',
      '⚠️ Trong chủ nghĩa tư bản, cung – cầu không đảm bảo công bằng, vì người lao động không sở hữu những gì họ tạo ra. Họ bị chi phối bởi tư bản, làm việc để tạo ra giá trị thặng dư cho giai cấp thống trị.',
      '💬 Bạn nghĩ nền kinh tế hiện tại có công bằng không? Chia sẻ quan điểm của bạn nhé!',
    ],
    hashtags: [
      'CungCầu',
      'KinhTếMácLênin',
      'ChủNghĩaTưBản',
      'cungcauthoidai',
    ],
    createdAt: '2025-03-13',
    link: 'https://www.facebook.com/share/p/1CFwokgaL1/',
  },
  {
    id: 6,
    title: 'CUNG – CẦU CÓ HOẠT ĐỘNG TỰ DO?',
    thumbnail: 'https://res.cloudinary.com/dvvfkvlo1/image/upload/v1743087605/mln6_cnwfgo.jpg',
    contents: [
      '💰 "Bàn tay vô hình" của cung – cầu có thực sự tồn tại?',
      'Adam Smith cho rằng cung – cầu vận hành theo một bàn tay vô hình, giúp cân bằng thị trường mà không cần sự can thiệp. Nhưng Mác - Lênin chỉ ra rằng, trong nền kinh tế tư bản, cung – cầu luôn bị thao túng bởi những người nắm tư liệu sản xuất.',
      '⚖️ Các tập đoàn lớn có thể:',
      '✅ Giữ hàng để đẩy giá lên cao',
      '✅ Tạo khan hiếm giả để tăng lợi nhuận',
      '✅ Chi phối sản xuất và lao động theo lợi ích riêng',
      'Vậy nên, thị trường không hề "tự do" như nhiều người nghĩ, mà thực chất bị kiểm soát bởi tư bản!',
      '💬 Bạn có thấy giá cả đôi khi không phản ánh đúng cung – cầu không? Bình luận ngay nhé!',
    ],
    hashtags: [
      'KinhTếMácLênin',
      'SựThậtVềCungCầu',
      'cungcauthoidai',
    ],
    createdAt: '2025-03-12',
    link: 'https://www.facebook.com/share/p/1X3cshNs4p/',
  },
  {
    id: 7,
    title: '🔥 CUNG – CẦU DƯỚI GÓC NHÌN MÁC - LÊNIN 🔥',
    thumbnail: 'https://res.cloudinary.com/dvvfkvlo1/image/upload/v1743087605/mln7_xkhmue.jpg',
    contents: [
      '💡 Cung – cầu có thực sự điều tiết nền kinh tế?',
      'Bạn có biết? 🤔 Theo học thuyết Mác - Lênin, quy luật cung – cầu không chỉ đơn thuần là một yếu tố trong kinh tế thị trường, mà còn phản ánh bản chất của quan hệ sản xuất trong xã hội.',
      '📌 Cầu không chỉ là nhu cầu tiêu dùng, mà còn gắn liền với sức mua thực tế của giai cấp lao động.',
      '📌 Cung không chỉ là hàng hóa trên thị trường, mà còn chịu tác động từ phương thức sản xuất và sự phân chia tư liệu sản xuất.',
      '⚖️ Trong xã hội tư bản, quy luật cung – cầu vận hành nhưng không đảm bảo công bằng, vì tư liệu sản xuất nằm trong tay một nhóm nhỏ. Chỉ khi phương thức sản xuất được thay đổi theo hướng công bằng hơn, cung – cầu mới thực sự phục vụ lợi ích số đông.',
      '💬 Bạn nghĩ gì về điều này? Comment bên dưới nhé! 👇🔥',
    ],
    hashtags: [
      'CungCầu',
      'KinhTếMácLênin',
      'HọcThuyếtMác',
      'MarxistEconomics',
      'cungcauthoidai',
    ],
    createdAt: '2025-03-12',
    link: 'https://www.facebook.com/share/p/1F597fCLHm/',
  },
]