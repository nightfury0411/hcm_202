'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  ArrowRight,
  BookOpen,
  Building2,
  Handshake,
  Heart,
  Link,
  Quote,
  Shield,
  Star,
  Users,
} from 'lucide-react';
import { useEffect, useState } from 'react';

export default function LandingPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-out-cubic',
      offset: 80,
    });
  }, []);

  const [flippedCards, setFlippedCards] = useState({
    politics: false,
    economy: false,
    culture: false,
    social: false,
  });

  const [showScroll, setShowScroll] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cards = [
    {
      id: 'politics',
      title: 'Chính trị',
      icon: <Building2 className='w-8 h-8' />,
      quote: 'Dân vừa là chủ, vừa là người làm chủ.',
      image: '/images/image9.jpg',
      gradient: 'from-[#D4A017] to-[#F3C44D]',
      content: (
        <div className='space-y-4'>
          <p className='text-gray-300'>
            Xây dựng chế độ dân chủ XHCN: nhân dân là chủ và là người làm chủ.
          </p>
          <div className='space-y-3'>
            <div className='flex items-start space-x-3 bg-gradient-to-r from-[#D4A017] p-3 rounded-lg'>
              <div className='w-2 h-2 bg-gray-300 rounded-full mt-2 group-hover:scale-125 transition-transform'></div>
              <span className='text-gray-300'>Tất cả quyền lợi – quyền hạn thuộc về nhân dân.</span>
            </div>
            <div className='flex items-start space-x-3 bg-gradient-to-r from-[#D4A017] p-3 rounded-lg'>
              <div className='w-2 h-2 bg-gray-300 rounded-full mt-2 group-hover:scale-125 transition-transform'></div>
              <span className='text-gray-300'>Nhà nước của dân, do dân, vì dân.</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'economy',
      title: 'Kinh tế',
      icon: <Users className='w-8 h-8' />,
      quote: '',
      image: '/images/image2.jpg',
      gradient: 'from-[#D4A017] to-[#F3C44D]',
      content: (
        <div className='space-y-4'>
          <div className='bg-gradient-to-r from-[#D4A017] to-transparent p-4 rounded-lg'>
            <p className='font-semibold text-gray-300'>Mục tiêu:</p>
            <p className='text-gray-300'>
              Kinh tế mạnh để làm nền tảng cho dân chủ và đời sống nhân dân.
            </p>
          </div>
          <div className='space-y-3'>
            <div className='flex items-center space-x-3 p-3 bg-gradient-to-r from-[#D4A017] to-transparent rounded-lg hover:shadow-md transition-shadow'>
              <div className='w-2 h-2 bg-gray-300 rounded-full group-hover:scale-125 transition-transform'></div>
              <span className='text-gray-300'>Xây dựng nền kinh tế phát triển cao.</span>
            </div>
            <div className='flex items-center space-x-3 p-3 bg-gradient-to-r from-[#D4A017] to-transparent rounded-lg hover:shadow-md transition-shadow'>
              <div className='w-2 h-2 bg-gray-300 rounded-full group-hover:scale-125 transition-transform'></div>
              <span className='text-gray-300'>
                Công – nông nghiệp hiện đại, khoa học – kỹ thuật tiên tiến.
              </span>
            </div>
            <div className='flex items-center space-x-3 p-3 bg-gradient-to-r from-[#D4A017] to-transparent rounded-lg hover:shadow-md transition-shadow'>
              <div className='w-2 h-2 bg-gray-300 rounded-full group-hover:scale-125 transition-transform'></div>
              <span className='text-gray-300'>Dựa trên sở hữu toàn dân và tập thể.</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'culture',
      title: 'Văn hoá',
      icon: <BookOpen className='w-8 h-8' />,
      quote: '',
      image: '/images/image3.jpg',
      gradient: 'from-[#D4A017] to-[#F3C44D]',
      content: (
        <div className='space-y-4'>
          <div className='space-y-3'>
            <div className='group flex items-start space-x-3 p-3 bg-gradient-to-r from-[#D4A017] to-transparent rounded-lg hover:shadow-md transition-all'>
              <div className='w-2 h-2 bg-gray-300 rounded-full mt-2 group-hover:scale-125 transition-transform'></div>
              <span className='text-gray-300'>Nền văn hoá dân tộc, khoa học, đại chúng.</span>
            </div>
            <div className='group flex items-start space-x-3 p-3 bg-gradient-to-r from-[#D4A017] to-transparent rounded-lg hover:shadow-md transition-all'>
              <div className='w-2 h-2 bg-gray-300 rounded-full mt-2 group-hover:scale-125 transition-transform'></div>
              <span className='text-gray-300'>Tiếp thu tinh hoa văn hoá nhân loại.</span>
            </div>
            <div className='group flex items-start space-x-3 p-3 bg-gradient-to-r from-[#D4A017] to-transparent rounded-lg hover:shadow-md transition-all'>
              <div className='w-2 h-2 bg-gray-300 rounded-full mt-2 group-hover:scale-125 transition-transform'></div>
              <span className='text-gray-300'>Văn hoá là nền tảng tinh thần của xã hội.</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'social',
      title: 'Quan hệ xã hội',
      icon: <Handshake className='w-8 h-8' />,
      image: '/images/image4.jpg',
      quote: 'Ai cũng có cơm ăn, áo mặc, ai cũng được học hành',
      gradient: 'from-[#D4A017] to-[#F3C44D]',
      content: (
        <div className='space-y-4'>
          <div className='space-y-3'>
            <div className='flex items-start space-x-3 p-3 bg-gradient-to-r from-[#D4A017] rounded-lg transition-colors'>
              <div className='w-2 h-2 bg-gray-300 rounded-full mt-2 group-hover:scale-125 transition-transform'></div>
              <span className='text-gray-300'>Dân chủ, công bằng, văn minh.</span>
            </div>
            <div className='flex items-start space-x-3 p-3 bg-gradient-to-r from-[#D4A017] rounded-lg transition-colors'>
              <div className='w-2 h-2 bg-gray-300 rounded-full mt-2 group-hover:scale-125 transition-transform'></div>
              <span className='text-gray-300'>Tôn trọng, bình đẳng, đoàn kết giữa con người.</span>
            </div>
            <div className='flex items-start space-x-3 p-3 bg-gradient-to-r from-[#D4A017] rounded-lg transition-colors'>
              <div className='w-2 h-2 bg-gray-300 rounded-full mt-2 group-hover:scale-125 transition-transform'></div>
              <span className='text-gray-300'>
                Bảo đảm các quyền tự do: học tập, tín ngưỡng, ngôn luận, bầu cử…
              </span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const motivationSteps = [
    {
      id: 1,
      title: 'Bắt đầu từ Nhân dân',
      icon: <Users className='w-8 h-8' />,
      color: 'from-[#D4A017] to-[#F3C44D]',
      content: [
        'Nhân dân vừa là chủ thể, vừa là động lực quyết định.',
        'Khi lợi ích của mỗi cá nhân gắn bó với cộng đồng, sức mạnh chung sẽ nhân lên gấp bội.',
      ],
      image: '/images/image5.jpg',
    },
    {
      id: 2,
      title: 'Kết nối bằng Đại đoàn kết',
      icon: <Link className='w-8 h-8' />,
      color: 'from-[#D4A017] to-[#F3C44D]',
      content: [
        'Liên minh công – nông – trí thức là nền tảng xã hội vững chắc.',
        'Dưới sự lãnh đạo của Đảng, tinh thần đoàn kết biến thành sức mạnh thực tế để vượt qua khó khăn.',
      ],
      image: '/images/image6.jpg',
    },
    {
      id: 3,
      title: 'Tổ chức dẫn đường',
      icon: <Shield className='w-8 h-8' />,
      color: 'from-[#D4A017] to-[#F3C44D]',
      content: [
        'Đảng là hạt nhân lãnh đạo, Nhà nước giữ vai trò quản lý, các đoàn thể huy động quần chúng.',
        'Sự phối hợp này bảo đảm cho tiến trình xây dựng CNXH đi đúng hướng.',
      ],
      image: '/images/image7.jpg',
    },
    {
      id: 4,
      title: 'Vươn tới hình mẫu Con người XHCN',
      icon: <Heart className='w-8 h-8' />,
      color: 'from-[#D4A017] to-[#F3C44D]',
      content: [
        'Hành trình kết thúc (và cũng mở ra tương lai) khi hình thành con người XHCN: có tri thức, đạo đức, tinh thần yêu nước, chống chủ nghĩa cá nhân.',
        'Đây là kết quả đồng thời cũng là động lực lâu dài cho sự phát triển của CNXH.',
      ],
      image: '/images/image8.jpg',
    },
  ];

  const handleFlip = cardName => {
    setFlippedCards(prev => ({
      ...prev,
      [cardName]: !prev[cardName],
    }));
  };

  const quizQuestions = [
    {
      id: 1,
      question: "Hãy liệt kê bốn quan điểm nền tảng trong tư tưởng Hồ Chí Minh về chủ nghĩa xã hội.",
      options: [
        "Dân chủ – Nhân dân làm chủ; Công bằng – Nhân đạo – Hạnh phúc; Kinh tế phát triển – Văn hóa, giáo dục nâng cao; Đạo đức – Lối sống mới",
        "Độc lập dân tộc; Chủ nghĩa tập thể; Sùng bái cá nhân; Kinh tế chỉ huy",
        "Dân chủ hình thức; Phát triển quân sự; Công nghiệp hóa bằng mọi giá; Đề cao chủ nghĩa cá nhân",
        "Chủ nghĩa xã hội là không cần dân chủ; Kinh tế – văn hóa tách biệt; Đạo đức chỉ dành cho cán bộ; Hạnh phúc chỉ dành cho giai cấp công nhân"
      ],
      correct: 0
    },
    {
      id: 2,
      question: "Theo Hồ Chí Minh, nền kinh tế xã hội chủ nghĩa cần được xây dựng dựa trên cơ sở nào?",
      options: [
        "Sở hữu toàn dân và tập thể",
        "Sở hữu tư nhân tuyệt đối",
        "Sở hữu của tầng lớp quý tộc, địa chủ",
        "Sở hữu hoàn toàn của nước ngoài"
      ],
      correct: 0
    },
    {
      id: 3,
      question: "Hồ Chí Minh khẳng định: \"Muốn xây dựng chủ nghĩa xã hội, trước hết cần có …\"",
      options: [
        "Con người xã hội chủ nghĩa",
        "Nhiều tài nguyên thiên nhiên",
        "Chủ nghĩa cá nhân phát triển",
        "Sức mạnh quân sự áp đảo"
      ],
      correct: 0
    },
    {
      id: 4,
      question: "Một trong những nguyên tắc xây dựng CNXH trong thời kỳ quá độ mà Hồ Chí Minh nhấn mạnh là gì?",
      options: [
        "Dựa hoàn toàn vào nước ngoài",
        "Xây phải đi đôi với chống",
        "Tách rời độc lập dân tộc và CNXH",
        "Bỏ qua chủ nghĩa Mác – Lênin"
      ],
      correct: 1
    },
    {
      id: 5,
      question: "Đặc điểm to lớn nhất của thời kỳ quá độ ở Việt Nam là gì?",
      options: [
        "Từ một nước công nghiệp phát triển lên CNXH",
        "Từ một nước thuộc địa nửa phong kiến thành tư bản chủ nghĩa",
        "Từ một nước nông nghiệp lạc hậu tiến thẳng lên CNXH, không qua tư bản chủ nghĩa",
        "Từ một nước phong kiến đi thẳng lên cộng sản chủ nghĩa"
      ],
      correct: 2
    }
  ];

  const handleAnswerSelect = (questionId, optionIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const handleSubmitQuiz = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach(question => {
      if (selectedAnswers[question.id] === question.correct) {
        score++;
      }
    });
    return score;
  };

  return (
    <div className='min-h-screen bg-[#1A1A1A] text-gray-100'>
      <header className='bg-[#1A1A1A] shadow-sm sticky top-0 z-50 border-b border-gray-800'>
        <div className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center'>
          <div className='flex items-center space-x-2'>
            <div className='w-10 h-10 bg-gradient-to-r from-[#D4A017] to-[#F3C44D] rounded-full flex items-center justify-center'>
              <Users className='text-gray-900' size={20} />
            </div>
            <span className='font-bold text-gray-100'>Group 4 - GD1706 - HCM202</span>
          </div>
          <nav className='hidden md:flex space-x-10'>
            {[
              { id: 'overview', label: 'Tổng quan' },
              { id: 'video', label: 'Video' },
              { id: 'goals', label: 'Mục tiêu' },
              { id: 'hochiminh', label: 'Quan niệm HCM' },
              { id: 'motivation', label: 'Động lực' },
              { id: 'quiz', label: 'Mini Quiz' },
            ].map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className='relative group text-gray-300 font-semibold tracking-wide transition-all duration-300 hover:text-[#F3C44D]'
              >
                <span className='transition-transform duration-300 group-hover:scale-105'>
                  {item.label}
                </span>
                <span className='absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-[#D4A017] to-[#F3C44D] transition-all duration-300 group-hover:w-full'></span>
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section
        id='overview'
        className='relative h-screen flex items-center justify-center overflow-hidden'
      >
        <div
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage: `url('https://bhd.1cdn.vn/2020/04/22/files-library-images-site-1-20200422-web-lenin---tam-guong-mau-muc-van-dung-sang-tao-hoc-thuyet-mac-2-094144.jpg')`,
            filter: 'grayscale(20%)',
          }}
        >
          <div className='absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80'></div>
        </div>

        <div className='relative z-10 text-center max-w-4xl mx-auto px-4' data-aos='fade-up'>
          <h1 className='text-5xl md:text-7xl font-bold pb-5 bg-clip-text text-transparent bg-gradient-to-r from-[#D4A017] to-[#F3C44D]'>
            Chủ nghĩa Xã Hội
          </h1>
          <h2
            className='text-2xl md:text-3xl mb-8 font-light text-gray-200'
            data-aos='fade-up'
            data-aos-delay='200'
          >
            Con đường phát triển tất yếu của lịch sử
          </h2>
          <p
            className='text-lg md:text-xl mb-10 leading-relaxed text-gray-300'
            data-aos='fade-up'
            data-aos-delay='400'
          >
            Từ phong trào thực tiễn đến lý luận khoa học, từ mâu thuẫn của xã hội tư bản
            <br />
            đến hình thái cộng sản - <em>Chủ nghĩa xã hội chính là bước đệm lịch sử</em>
          </p>
          <button
            onClick={() => document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' })}
            className='relative px-10 py-4 rounded-full font-semibold text-gray-900
            bg-gradient-to-r from-[#D4A017] to-[#F3C44D]
             transition-all duration-300 shadow-lg hover:shadow-2xl
             hover:scale-105 overflow-hidden group cursor-pointer'
          >
            <span
              className='relative z-10 transition-all duration-300
               group-hover:tracking-wider group-hover:scale-110 inline-block'
            >
              Khám phá ngay
            </span>
          </button>
        </div>
      </section>

      <section id='video' className='flex justify-center py-16 bg-[#1A1A1A]'>
        <div className='max-w-7xl w-full rounded-2xl overflow-hidden shadow-lg bg-gray-800 border border-gray-700'>
          <div className='relative w-full' style={{ paddingTop: '56.25%' }}>
            <iframe
              className='absolute inset-0 w-full h-full object-cover'
              src='https://www.youtube.com/embed/ebYfnMXgv3U'
              title='HCM202'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerPolicy='strict-origin-when-cross-origin'
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section id='hochiminh' className='py-20 px-4 bg-[#1A1A1A]'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-4xl md:text-5xl font-bold text-center mb-4' data-aos='fade-down'>
            <span className='bg-gradient-to-r from-[#D4A017] to-[#F3C44D] bg-clip-text text-transparent'>
              Quan niệm của Hồ Chí Minh về CNXH
            </span>
          </h2>
          <p className='text-xl text-center text-gray-400 mb-16' data-aos='fade-up'>
            Tư tưởng tiến bộ về con đường xây dựng xã hội mới
          </p>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div data-aos='fade-right'>
              <div className='relative rounded-2xl overflow-hidden shadow-xl'>
                <img
                  src='/images/image9.jpg'
                  alt='Hồ Chí Minh'
                  className='w-full h-96 object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
                <div className='absolute bottom-6 left-6 right-6'>
                  <p className='text-white text-lg font-medium italic'>
                    "Chế độ xã hội chủ nghĩa là chế độ do dân, vì dân và của dân"
                  </p>
                  <p className='text-gray-300 text-sm mt-2'>- Chủ tịch Hồ Chí Minh</p>
                </div>
              </div>
            </div>

            <div data-aos='fade-left'>
              <div className='space-y-6'>
                <div className='bg-[#272626] rounded-xl p-6 border border-[#D4A017]/20'>
                  <h3 className='text-2xl font-bold text-gray-100 mb-4 flex items-center'>
                    <div className='w-2 h-2 bg-gradient-to-r from-[#D4A017] to-[#F3C44D] rounded-full mr-3'></div>
                    Bản chất của CNXH
                  </h3>
                  <div className='space-y-3 text-gray-300'>
                    <p className='flex items-start'>
                      <Quote className='w-4 h-4 text-[#D4A017] mt-1 mr-2 flex-shrink-0' />
                      Chế độ xã hội do dân, vì dân và của dân
                    </p>
                    <p className='flex items-start'>
                      <Quote className='w-4 h-4 text-[#D4A017] mt-1 mr-2 flex-shrink-0' />
                      Nhân dân lao động làm chủ xã hội
                    </p>
                    <p className='flex items-start'>
                      <Quote className='w-4 h-4 text-[#D4A017] mt-1 mr-2 flex-shrink-0' />
                      Xóa bỏ chế độ áp bức bóc lột con người
                    </p>
                  </div>
                </div>

                <div className='bg-[#272626] rounded-xl p-6 border border-[#D4A017]/20'>
                  <h3 className='text-2xl font-bold text-gray-100 mb-4 flex items-center'>
                    <div className='w-2 h-2 bg-gradient-to-r from-[#D4A017] to-[#F3C44D] rounded-full mr-3'></div>
                    Đặc điểm của CNXH Việt Nam
                  </h3>
                  <div className='space-y-3 text-gray-300'>
                    <p className='flex items-start'>
                      <Star className='w-4 h-4 text-[#D4A017] mt-1 mr-2 flex-shrink-0' />
                      Kết hợp với truyền thống dân tộc
                    </p>
                    <p className='flex items-start'>
                      <Star className='w-4 h-4 text-[#D4A017] mt-1 mr-2 flex-shrink-0' />
                      Phù hợp điều kiện Việt Nam
                    </p>
                    <p className='flex items-start'>
                      <Star className='w-4 h-4 text-[#D4A017] mt-1 mr-2 flex-shrink-0' />
                      Lấy con người làm trung tâm
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center' data-aos='fade-up' data-aos-delay='100'>
              <div className='w-16 h-16 bg-gradient-to-r from-[#D4A017] to-[#F3C44D] rounded-full flex items-center justify-center mx-auto mb-4'>
                <Users className='w-8 h-8 text-gray-900' />
              </div>
              <h4 className='text-xl font-bold text-gray-100 mb-3'>Dân chủ XHCN</h4>
              <p className='text-gray-400'>
                Nhân dân lao động làm chủ mọi mặt của đời sống xã hội
              </p>
            </div>

            <div className='text-center' data-aos='fade-up' data-aos-delay='200'>
              <div className='w-16 h-16 bg-gradient-to-r from-[#D4A017] to-[#F3C44D] rounded-full flex items-center justify-center mx-auto mb-4'>
                <Building2 className='w-8 h-8 text-gray-900' />
              </div>
              <h4 className='text-xl font-bold text-gray-100 mb-3'>Kinh tế XHCN</h4>
              <p className='text-gray-400'>
                Phát triển kinh tế vì mục tiêu nâng cao đời sống nhân dân
              </p>
            </div>

            <div className='text-center' data-aos='fade-up' data-aos-delay='300'>
              <div className='w-16 h-16 bg-gradient-to-r from-[#D4A017] to-[#F3C44D] rounded-full flex items-center justify-center mx-auto mb-4'>
                <Heart className='w-8 h-8 text-gray-900' />
              </div>
              <h4 className='text-xl font-bold text-gray-100 mb-3'>Con người XHCN</h4>
              <p className='text-gray-400'>
                Hình thành con người mới có đạo đức, tri thức và lối sống văn minh
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id='goals' className='py-20 px-4 bg-[#1A1A1A]'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-4xl md:text-5xl font-bold text-center mb-16' data-aos='fade-down'>
            <span className='bg-gradient-to-r from-[#D4A017] to-[#F3C44D] bg-clip-text text-transparent'>
              Mục tiêu của Chủ nghĩa xã hội
            </span>
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {cards.map((card, index) => (
              <div
                key={card.id}
                className='relative h-[450px] cursor-pointer'
                onClick={() => handleFlip(card.id)}
                style={{ perspective: '1000px' }}
                data-aos='flip-left'
                data-aos-delay={index * 200}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-gpu preserve-3d ${
                    flippedCards[card.id] ? 'rotate-y-180' : ''
                  }`}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Front */}
                  <div
                    className='absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-xl bg-gray-800'
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className='w-full h-full object-cover opacity-80'
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${card.gradient} opacity-70`}
                    ></div>
                    <div className='absolute inset-0 flex flex-col justify-end p-8'>
                      <div className='text-white'>{card.icon}</div>
                      <h3 className='text-3xl font-bold text-white mt-4'>{card.title}</h3>
                      {card.quote && (
                        <h4 className='text-lg font-medium italic text-white mt-4'>
                          &quot;{card.quote}&quot;
                        </h4>
                      )}
                    </div>
                  </div>

                  {/* Back */}
                  <div
                    className='absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-[#272626] shadow-xl p-8 overflow-y-auto'
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <div className='h-full flex flex-col'>
                      <div className='flex items-center space-x-3 mb-6'>
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${card.gradient}`}>
                          <div className='text-gray-900'>{card.icon}</div>
                        </div>
                        <h3 className='text-2xl font-bold text-gray-100'>{card.title}</h3>
                      </div>
                      <div className='flex-1 text-gray-300'>{card.content}</div>
                      <div className='mt-6 text-center'>
                        <p className='text-sm text-gray-400'>Nhấn để quay lại</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id='motivation' className='py-20 px-4 bg-[#1A1A1A]'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-4xl md:text-5xl font-bold text-center mb-4' data-aos='fade-down'>
            <span className='bg-gradient-to-r from-[#D4A017] to-[#F3C44D] bg-clip-text text-transparent'>
              Động lực của Chủ nghĩa xã hội
            </span>
          </h2>
          <p className='text-xl text-center text-gray-400 mb-16' data-aos='fade-up'>
            Hành trình từ con người đến xã hội mới
          </p>

          <div className='relative'>
            <div className='hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#E6C48F] to-transparent'></div>

            {motivationSteps.map((step, index) => (
              <div key={step.id} className='relative mb-16 last:mb-0'>
                <div
                  className={`flex ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:gap-8 items-center`}
                  data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                  data-aos-delay={index * 100}
                >
                  <div className='w-full lg:w-5/12 mb-6 lg:mb-0'>
                    <div className='relative rounded-2xl overflow-hidden shadow-xl group'>
                      <img
                        src={step.image}
                        alt={step.title}
                        className='w-full h-64 lg:h-80 object-cover transform group-hover:scale-110 transition-transform duration-500'
                      />
                      <div className='absolute inset-0 bg-black/40'></div>
                    </div>
                  </div>

                  <div className='w-full lg:w-5/12'>
                    <div className='bg-[#272626]  rounded-2xl shadow-lg p-6 lg:p-8 border border-[#D4A017]/20'>
                      <div className='flex items-center mb-4'>
                        <div
                          className={`p-3 rounded-lg bg-gradient-to-r ${step.color} text-gray-900`}
                        >
                          {step.icon}
                        </div>
                        <h3 className='text-2xl font-bold ml-4 text-gray-100'>{step.title}</h3>
                      </div>
                      <div className='space-y-3 text-gray-300'>
                        {step.content.map((text, idx) => (
                          <div key={idx} className='flex items-start'>
                            <div
                              className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color} mt-2 mr-3 flex-shrink-0`}
                            ></div>
                            <p>{text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Thời kỳ quá độ */}
<section id='transition-period' className='py-20 px-4 bg-[#1A1A1A]'>
  <div className='max-w-7xl mx-auto'>
    {/* Main Title */}
    <h2 className='text-4xl md:text-5xl font-bold text-center mb-16' data-aos='fade-down'>
      <span className='bg-gradient-to-r from-[#D4A017] to-[#F3C44D] bg-clip-text text-transparent'>
        Thời kỳ quá độ lên Chủ nghĩa xã hội
      </span>
    </h2>

    {/* Giới thiệu: Tính chất + Đặc điểm */}
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20' data-aos='fade-up'>
      <div className='space-y-8'>
        {/* Tính chất */}
        <div className='bg-[#272626] rounded-2xl p-8 border border-[#D4A017]/20 hover:border-[#D4A017]/40 transition-all duration-300'>
          <div className='flex items-center mb-6'>
            <div className='p-3 rounded-lg bg-gradient-to-r from-[#D4A017] to-[#F3C44D]'>
              <Star className='w-8 h-8 text-gray-900' />
            </div>
            <h3 className='text-2xl font-bold ml-4 text-gray-100'>Tính chất</h3>
          </div>
          <p className='text-gray-300 leading-relaxed text-lg'>
            Chủ tịch Hồ Chí Minh đã nhận định thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam là một thời kỳ{' '}
            <span className='text-[#F3C44D] font-semibold italic'>
              "cải biến sâu sắc nhất nhưng phức tạp, lâu dài, khó khăn, gian khổ."
            </span>
          </p>
        </div>

        {/* Đặc điểm */}
        <div className='bg-[#272626] rounded-2xl p-8 border border-[#D4A017]/20 hover:border-[#D4A017]/40 transition-all duration-300'>
          <div className='flex items-center mb-6'>
            <div className='p-3 rounded-lg bg-gradient-to-r from-[#D4A017] to-[#F3C44D]'>
              <ArrowRight className='w-8 h-8 text-gray-900' />
            </div>
            <h3 className='text-2xl font-bold ml-4 text-gray-100'>Đặc điểm</h3>
          </div>
          <p className='text-gray-300 leading-relaxed text-lg'>
            Đặc điểm to lớn nhất của thời kỳ quá độ ở Việt Nam là từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội,{' '}
            <span className='text-[#F3C44D] font-semibold'>
              không trải qua giai đoạn phát triển tư bản chủ nghĩa.
            </span>
          </p>
        </div>
      </div>

      {/* Hình minh họa */}
      <div className='flex items-center justify-center' data-aos='fade-left'>
        <div className='relative rounded-2xl overflow-hidden shadow-xl group'>
          <img
            src='/images\HCM_XHCN.jpg'
            alt='Tư tưởng Hồ Chí Minh về thời kỳ quá độ'
            className='w-full h-80 lg:h-96 object-cover transform group-hover:scale-110 transition-transform duration-500'
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/600x400/D4A017/FFFFFF?text=Tư+tưởng+Hồ+Chí+Minh';
            }}
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'></div>
          <div className='absolute bottom-6 left-6 right-6'>
            <p className='text-white text-lg font-medium'>
              Con đường phát triển đặc biệt của Việt Nam
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Nhiệm vụ */}
    <div className='mb-20'>
      <h3 className='text-3xl md:text-4xl font-bold text-center mb-4' data-aos='fade-up'>
        <span className='bg-gradient-to-r from-[#D4A017] to-[#F3C44D] bg-clip-text text-transparent'>
          Nhiệm vụ của thời kỳ quá độ
        </span>
      </h3>
      <p className='text-xl text-center text-gray-400 mb-12 max-w-4xl mx-auto' data-aos='fade-up' data-aos-delay='200'>
        Đấu tranh cải tạo, xóa bỏ tàn tích của chế độ xã hội cũ, xây dựng các yếu tố mới phù hợp với quy luật tiến lên chủ nghĩa xã hội
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'>
        {[
          {
            icon: <Building2 className='w-8 h-8' />,
            title: 'Chính trị',
            content: 'Xây dựng được chế độ dân chủ vì đây là bản chất của chủ nghĩa xã hội',
            gradient: 'from-[#D4A017] to-[#F3C44D]',
            delay: 100
          },
          {
            icon: <Users className='w-8 h-8' />,
            title: 'Kinh tế',
            content: 'Cải tạo nền kinh tế cũ, xây dựng nền kinh tế mới có công nghiệp và nông nghiệp hiện đại',
            gradient: 'from-[#D4A017] to-[#F3C44D]',
            delay: 200
          },
          {
            icon: <BookOpen className='w-8 h-8' />,
            title: 'Văn hóa',
            content: 'Tẩy trừ mọi di tích thuộc địa và ảnh hưởng nô dịch của văn hóa đế quốc; phát triển văn hóa dân tộc',
            gradient: 'from-[#D4A017] to-[#F3C44D]',
            delay: 300
          },
          {
            icon: <Handshake className='w-8 h-8' />,
            title: 'Quan hệ xã hội',
            content: 'Thay đổi triệt để những quan hệ cũ; xây dựng xã hội dân chủ, công bằng, văn minh',
            gradient: 'from-[#D4A017] to-[#F3C44D]',
            delay: 400
          }
        ].map((task, index) => (
          <div
            key={index}
            className='bg-[#272626] rounded-2xl p-6 border border-[#D4A017]/20 hover:border-[#D4A017]/40 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl group'
            data-aos='flip-up'
            data-aos-delay={task.delay}
          >
            <div className={`p-3 rounded-lg bg-gradient-to-r ${task.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <div className='text-white'>{task.icon}</div>
            </div>
            <h4 className='text-xl font-bold text-gray-100 mb-3 group-hover:text-[#F3C44D] transition-colors'>
              {task.title}
            </h4>
            <p className='text-gray-300 text-sm leading-relaxed'>{task.content}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Nguyên tắc xây dựng */}
    <div>
      <h3 className='text-3xl md:text-4xl font-bold text-center mb-4' data-aos='fade-up'>
        <span className='bg-gradient-to-r from-[#D4A017] to-[#F3C44D] bg-clip-text text-transparent'>
          Nguyên tắc xây dựng chủ nghĩa xã hội
        </span>
      </h3>
      <p className='text-xl text-center text-gray-400 mb-12' data-aos='fade-up' data-aos-delay='200'>
        Bốn nguyên tắc cơ bản trong thời kỳ quá độ
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8' data-aos='fade-up' data-aos-delay='400'>
        {[
          {
            number: 'I',
            icon: <BookOpen className='w-6 h-6' />,
            title: 'Nền tảng Mác - Lênin',
            content: 'Mọi tư tưởng, hành động phải được thực hiện trên nền tảng chủ nghĩa Mác - Lênin.',
            delay: 100
          },
          {
            number: 'II',
            icon: <Shield className='w-6 h-6' />,
            title: 'Độc lập dân tộc',
            content: 'Phải giữ vững độc lập dân tộc trong mọi hoàn cảnh và điều kiện.',
            delay: 200
          },
          {
            number: 'III',
            icon: <Link className='w-6 h-6' />,
            title: 'Đoàn kết quốc tế',
            content: 'Phải đoàn kết, học tập kinh nghiệm của các nước anh em xã hội chủ nghĩa.',
            delay: 300
          },
          {
            number: 'IV',
            icon: <ArrowRight className='w-6 h-6' />,
            title: 'Xây dựng & đấu tranh',
            content: 'Xây phải đi đôi với chống - vừa xây dựng cái mới, vừa đấu tranh chống cái cũ.',
            delay: 400
          }
        ].map((principle, index) => (
          <div
            key={index}
            className='relative bg-[#272626] rounded-2xl p-8 border border-[#D4A017]/20 hover:border-[#D4A017]/40 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl group'
            data-aos='zoom-in'
            data-aos-delay={principle.delay}
          >
            {/* Roman Number Badge */}
            <div className='absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-[#D4A017] to-[#F3C44D] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
              <span className='text-gray-900 font-bold text-lg'>{principle.number}</span>
            </div>
            
            <div className='flex items-start space-x-4 mt-2'>
              <div className='p-2 rounded-lg bg-gradient-to-r from-[#D4A017] to-[#F3C44D] flex-shrink-0 group-hover:scale-110 transition-transform duration-300'>
                <div className='text-gray-900'>{principle.icon}</div>
              </div>
              <div className='flex-1'>
                <h4 className='text-xl font-bold text-gray-100 mb-2 group-hover:text-[#F3C44D] transition-colors'>
                  {principle.title}
                </h4>
                <p className='text-gray-300 leading-relaxed'>{principle.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Decorative Quote Section */}
    <div className='relative mt-20'>
      <div className='absolute inset-0 flex items-center justify-center opacity-5'>
        <div className='w-96 h-96 bg-gradient-to-r from-[#D4A017] to-[#F3C44D] rounded-full blur-3xl'></div>
      </div>
      <div className='relative text-center py-16' data-aos='fade-up'>
        <Quote className='w-12 h-12 text-[#D4A017] mx-auto mb-6 opacity-60' />
        <blockquote className='text-2xl md:text-3xl font-light text-gray-200 italic max-w-4xl mx-auto leading-relaxed mb-6'>
          "Con đường phát triển của Việt Nam là một con đường đặc biệt, 
          từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội"
        </blockquote>
        <cite className='text-lg text-[#F3C44D] font-medium not-italic'>
          — Tư tưởng Hồ Chí Minh —
        </cite>
      </div>
    </div>
  </div>
</section>

<section id='quiz' className='py-20 px-4 bg-[#1A1A1A]'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-4xl md:text-5xl font-bold text-center mb-4' data-aos='fade-down'>
            <span className='bg-gradient-to-r from-[#D4A017] to-[#F3C44D] bg-clip-text text-transparent'>
              Mini Quiz
            </span>
          </h2>
          <p className='text-xl text-center text-gray-400 mb-16' data-aos='fade-up'>
            Kiểm tra kiến thức về Chủ nghĩa xã hội
          </p>

          <div className='space-y-8'>
            {quizQuestions.map((question, index) => (
              <div key={question.id} className='bg-[#272626] rounded-xl p-6 border border-[#D4A017]/20' data-aos='fade-up' data-aos-delay={index * 100}>
                <h3 className='text-xl font-bold text-gray-100 mb-6'>
                  <span className='bg-gradient-to-r from-[#D4A017] to-[#F3C44D] bg-clip-text text-transparent'>
                    Câu {question.id}:
                  </span> {question.question}
                </h3>

                <div className='space-y-3'>
                  {question.options.map((option, optionIndex) => (
                    <label key={optionIndex} className='flex items-start space-x-3 cursor-pointer p-3 rounded-lg hover:bg-[#333333] transition-colors'>
                      <input
                        type='radio'
                        name={`question-${question.id}`}
                        value={optionIndex}
                        checked={selectedAnswers[question.id] === optionIndex}
                        onChange={() => handleAnswerSelect(question.id, optionIndex)}
                        className='mt-1 text-[#D4A017] focus:ring-[#D4A017]'
                      />
                      <span className={`text-gray-300 ${selectedAnswers[question.id] === optionIndex ? 'text-[#F3C44D]' : ''}`}>
                        {String.fromCharCode(97 + optionIndex)}) {option}
                      </span>
                      {showResults && optionIndex === question.correct && (
                        <span className='text-green-500 ml-2'>✓</span>
                      )}
                      {showResults && selectedAnswers[question.id] === optionIndex && optionIndex !== question.correct && (
                        <span className='text-red-500 ml-2'>✗</span>
                      )}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className='text-center mt-12'>
            {!showResults ? (
              <button
                onClick={handleSubmitQuiz}
                disabled={Object.keys(selectedAnswers).length !== quizQuestions.length}
                className='px-8 py-4 bg-gradient-to-r from-[#D4A017] to-[#F3C44D] text-gray-900 font-bold rounded-full
                          hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
              >
                Nộp bài
              </button>
            ) : (
              <div className='space-y-4'>
                <div className='text-2xl font-bold'>
                  <span className='bg-gradient-to-r from-[#D4A017] to-[#F3C44D] bg-clip-text text-transparent'>
                    Kết quả: {calculateScore()}/{quizQuestions.length}
                  </span>
                </div>
                <div className='text-lg text-gray-300'>
                  {calculateScore() === quizQuestions.length ? 'Xuất sắc! 🎉' :
                   calculateScore() >= quizQuestions.length * 0.8 ? 'Tốt! 👏' :
                   calculateScore() >= quizQuestions.length * 0.6 ? 'Khá! 👍' : 'Cần cố gắng thêm! 💪'}
                </div>
                <button
                  onClick={() => {
                    setSelectedAnswers({});
                    setShowResults(false);
                  }}
                  className='px-6 py-3 bg-[#333333] text-gray-100 rounded-full hover:bg-[#444444] transition-colors'
                >
                  Làm lại
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <footer className='bg-[#1A1A1A] text-white py-12 px-4 border-t border-gray-800'>
        <div className='max-w-7xl mx-auto text-center'>
          <div className='flex justify-center mb-6'>
            <div className='w-16 h-16 bg-gradient-to-r from-[#D4A017] to-[#F3C44D] rounded-full flex items-center justify-center'>
              <Users className='text-gray-900' size={32} />
            </div>
          </div>
          <p className='text-lg mb-2'>Group 4 - GD1706 - HCM202</p>
          <p className='text-gray-500'>© 2025 - Chủ nghĩa Xã Hội: Con đường phát triển tất yếu</p>
        </div>
      </footer>

      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='fixed cursor-pointer bottom-8 right-8 p-4
             bg-gradient-to-r from-[#D4A017] to-[#F3C44D] text-gray-900
             rounded-full shadow-lg z-40
             transition-transform duration-300 ease-in-out
             hover:scale-125'
        >
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M5 10l7-7m0 0l7 7m-7-7v18'
            />
          </svg>
        </button>
      )}

      {/* Custom CSS */}
      <style>{`
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease forwards;
        }
      `}</style>
    </div>
  );
}
