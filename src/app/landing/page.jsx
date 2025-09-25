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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cards = [
    {
      id: 'politics',
      title: 'Chính trị',
      icon: <Building2 className='w-8 h-8' />,
      image: '/images/image1.jpg',
      gradient: 'from-red-500 to-pink-600',
      content: (
        <div className='space-y-4'>
          <p className='text-gray-700'>
            Xây dựng chế độ dân chủ XHCN: nhân dân là chủ và là người làm chủ.
          </p>
          <div className='space-y-3'>
            <div className='flex items-start space-x-3 bg-red-50 p-3 rounded-lg'>
              <Star className='text-red-500 mt-1' size={16} />
              <span className='text-gray-700'>Tất cả quyền lợi – quyền hạn thuộc về nhân dân.</span>
            </div>
            <div className='flex items-start space-x-3 bg-red-50 p-3 rounded-lg'>
              <Star className='text-red-500 mt-1' size={16} />
              <span className='text-gray-700'>Nhà nước của dân, do dân, vì dân.</span>
            </div>
          </div>
          <blockquote className='relative pl-6 py-4 bg-gradient-to-r from-red-50 to-transparent rounded-lg'>
            <Quote className='absolute left-2 top-2 text-red-300' size={20} />
            <p className='italic text-gray-700'>
              &quot;Dân vừa là chủ, vừa là người làm chủ.&quot;
            </p>
          </blockquote>
        </div>
      ),
    },
    {
      id: 'economy',
      title: 'Kinh tế',
      icon: <Users className='w-8 h-8' />,
      image: '/images/image2.jpg',
      gradient: 'from-blue-500 to-indigo-600',
      content: (
        <div className='space-y-4'>
          <div className='bg-blue-50 p-4 rounded-lg'>
            <p className='font-semibold text-blue-900'>Mục tiêu:</p>
            <p className='text-gray-700'>
              Kinh tế mạnh để làm nền tảng cho dân chủ và đời sống nhân dân.
            </p>
          </div>
          <div className='space-y-3'>
            <div className='flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-transparent rounded-lg hover:shadow-md transition-shadow'>
              <ArrowRight className='text-blue-600' size={20} />
              <span className='text-gray-700'>Xây dựng nền kinh tế phát triển cao.</span>
            </div>
            <div className='flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-transparent rounded-lg hover:shadow-md transition-shadow'>
              <ArrowRight className='text-blue-600' size={20} />
              <span className='text-gray-700'>
                Công – nông nghiệp hiện đại, khoa học – kỹ thuật tiên tiến.
              </span>
            </div>
            <div className='flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-transparent rounded-lg hover:shadow-md transition-shadow'>
              <ArrowRight className='text-blue-600' size={20} />
              <span className='text-gray-700'>Dựa trên sở hữu toàn dân và tập thể.</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'culture',
      title: 'Văn hoá',
      icon: <BookOpen className='w-8 h-8' />,
      image: '/images/image3.jpg',
      gradient: 'from-purple-500 to-pink-600',
      content: (
        <div className='space-y-4'>
          <div className='space-y-3'>
            <div className='group flex items-start space-x-3 p-3 bg-gradient-to-r from-purple-50 to-transparent rounded-lg hover:shadow-md transition-all'>
              <div className='w-2 h-2 bg-purple-500 rounded-full mt-2 group-hover:scale-125 transition-transform'></div>
              <span className='text-gray-700'>Nền văn hoá dân tộc, khoa học, đại chúng.</span>
            </div>
            <div className='group flex items-start space-x-3 p-3 bg-gradient-to-r from-purple-50 to-transparent rounded-lg hover:shadow-md transition-all'>
              <div className='w-2 h-2 bg-purple-500 rounded-full mt-2 group-hover:scale-125 transition-transform'></div>
              <span className='text-gray-700'>Tiếp thu tinh hoa văn hoá nhân loại.</span>
            </div>
            <div className='group flex items-start space-x-3 p-3 bg-gradient-to-r from-purple-50 to-transparent rounded-lg hover:shadow-md transition-all'>
              <div className='w-2 h-2 bg-purple-500 rounded-full mt-2 group-hover:scale-125 transition-transform'></div>
              <span className='text-gray-700'>Văn hoá là nền tảng tinh thần của xã hội.</span>
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
      gradient: 'from-green-500 to-emerald-600',
      content: (
        <div className='space-y-4'>
          <blockquote className='relative pl-6 py-4 bg-gradient-to-r from-green-50 to-transparent rounded-lg'>
            <Quote className='absolute left-2 top-2 text-green-300' size={20} />
            <p className='italic text-gray-700 font-medium'>
              &quot;Ai cũng có cơm ăn, áo mặc, ai cũng được học hành&quot;
            </p>
          </blockquote>
          <div className='space-y-3'>
            <div className='flex items-start space-x-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors'>
              <div className='min-w-fit'>
                <div className='w-6 h-6 bg-green-500 rounded-full flex items-center justify-center'>
                  <span className='text-white text-xs'>✓</span>
                </div>
              </div>
              <span className='text-gray-700'>Dân chủ, công bằng, văn minh.</span>
            </div>
            <div className='flex items-start space-x-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors'>
              <div className='min-w-fit'>
                <div className='w-6 h-6 bg-green-500 rounded-full flex items-center justify-center'>
                  <span className='text-white text-xs'>✓</span>
                </div>
              </div>
              <span className='text-gray-700'>Tôn trọng, bình đẳng, đoàn kết giữa con người.</span>
            </div>
            <div className='flex items-start space-x-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors'>
              <div className='min-w-fit'>
                <div className='w-6 h-6 bg-green-500 rounded-full flex items-center justify-center'>
                  <span className='text-white text-xs'>✓</span>
                </div>
              </div>
              <span className='text-gray-700'>
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
      color: 'from-blue-500 to-blue-600',
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
      color: 'from-green-500 to-emerald-600',
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
      color: 'from-purple-500 to-purple-600',
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
      color: 'from-red-500 to-pink-600',
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

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-white'>
      <header className='bg-white shadow-sm sticky top-0 z-50'>
        <div className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center'>
          <div className='flex items-center space-x-2'>
            <div className='w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center'>
              <Users className='text-white' size={20} />
            </div>
            <span className='font-bold text-gray-800'>Group 4 - GD1706 - HCM202</span>
          </div>
          <nav className='hidden md:flex space-x-10'>
            {[
              { id: 'overview', label: 'Tổng quan' },
              { id: 'video', label: 'Video' },
              { id: 'goals', label: 'Mục tiêu' },
              { id: 'motivation', label: 'Động lực' },
            ].map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className='relative group text-gray-700 font-semibold tracking-wide transition-all duration-300 hover:text-red-600'
              >
                <span className='transition-transform duration-300 group-hover:scale-105'>
                  {item.label}
                </span>
                <span className='absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-300 group-hover:w-full'></span>
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
          }}
        >
          <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70'></div>
        </div>

        <div
          className='relative z-10 text-center text-white max-w-4xl mx-auto px-4'
          data-aos='fade-up'
        >
          <h1 className='text-5xl md:text-7xl font-bold  pb-5 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300'>
            Chủ nghĩa Xã Hội
          </h1>
          <h2
            className='text-2xl md:text-3xl mb-8 font-light'
            data-aos='fade-up'
            data-aos-delay='200'
          >
            Con đường phát triển tất yếu của lịch sử
          </h2>
          <p
            className='text-lg md:text-xl mb-10 leading-relaxed opacity-90'
            data-aos='fade-up'
            data-aos-delay='400'
          >
            Từ phong trào thực tiễn đến lý luận khoa học, từ mâu thuẫn của xã hội tư bản
            <br />
            đến hình thái cộng sản - <em>Chủ nghĩa xã hội chính là bước đệm lịch sử</em>
          </p>
          <button
            onClick={() => document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' })}
            className='relative px-10 py-4 rounded-full font-semibold text-white
             bg-gradient-to-r from-red-500 to-orange-500
             transition-all duration-300 shadow-lg hover:shadow-2xl
             hover:scale-105 overflow-hidden group cursor-pointer'
          >
            <span
              className='relative z-10 transition-all duration-300
               group-hover:tracking-wider group-hover:scale-110 inline-block'
            >
              Khám phá ngay
            </span>

            <div
              className='absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500'
            ></div>
          </button>
        </div>
      </section>

      <section id='video' className='flex justify-center py-16 '>
        <div className='max-w-7xl w-full rounded-2xl overflow-hidden shadow-lg'>
          <div className='relative w-full' style={{ paddingTop: '56.25%' }}>
            <iframe
              className='absolute inset-0 w-full h-full object-cover'
              src='https://www.youtube.com/embed/ebYfnMXgv3U'
              title='HCM202'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerpolicy='strict-origin-when-cross-origin'
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>

      <section id='goals' className='py-20 px-4'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-4xl md:text-5xl font-bold text-center mb-16' data-aos='fade-down'>
            <span className='bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent'>
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
                  <div
                    className='absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-xl'
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <img src={card.image} alt={card.title} className='w-full h-full object-cover' />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${card.gradient} opacity-80`}
                    ></div>
                    <div className='absolute inset-0 flex flex-col justify-end p-8'>
                      <div className='text-white'>{card.icon}</div>
                      <h3 className='text-3xl font-bold text-white mt-4'>{card.title}</h3>
                      <p className='text-white/80 mt-2'>Nhấn để xem chi tiết</p>
                    </div>
                  </div>

                  <div
                    className='absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-white shadow-xl p-8 overflow-y-auto'
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <div className='h-full flex flex-col'>
                      <div className='flex items-center space-x-3 mb-6'>
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${card.gradient}`}>
                          <div className='text-white'>{card.icon}</div>
                        </div>
                        <h3 className='text-2xl font-bold text-gray-800'>{card.title}</h3>
                      </div>
                      <div className='flex-1'>{card.content}</div>
                      <div className='mt-6 text-center'>
                        <p className='text-sm text-gray-500'>Nhấn để quay lại</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id='motivation' className='py-20 px-4 bg-gray-50'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-4xl md:text-5xl font-bold text-center mb-4' data-aos='fade-down'>
            <span className='bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent'>
              Động lực Chủ nghĩa xã hội
            </span>
          </h2>
          <p className='text-xl text-center text-gray-600 mb-16' data-aos='fade-up'>
            Hành trình từ con người đến xã hội mới
          </p>

          <div className='relative'>
            <div className='hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-green-500 via-purple-500 to-red-500'></div>

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
                      <div className={`absolute inset-0 bg-gradient-to-t opacity-40`}></div>
                    </div>
                  </div>

                  <div className='w-full lg:w-5/12'>
                    <div className='bg-white rounded-2xl shadow-lg p-6 lg:p-8'>
                      <div className='flex items-center mb-4'>
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${step.color} text-white`}>
                          {step.icon}
                        </div>
                        <h3 className='text-2xl font-bold ml-4 text-gray-800'>{step.title}</h3>
                      </div>
                      <div className='space-y-3'>
                        {step.content.map((text, idx) => (
                          <div key={idx} className='flex items-start'>
                            <div
                              className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color} mt-2 mr-3 flex-shrink-0`}
                            ></div>
                            <p className='text-gray-700'>{text}</p>
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

      <footer className='bg-gray-900 text-white py-12 px-4'>
        <div className='max-w-7xl mx-auto text-center'>
          <div className='flex justify-center mb-6'>
            <div className='w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center'>
              <Users className='text-white' size={32} />
            </div>
          </div>
          <p className='text-lg mb-2'>Group 4 - GD1706 - HCM202</p>
          <p className='text-gray-400'>© 2025 - Chủ nghĩa Xã Hội: Con đường phát triển tất yếu</p>
        </div>
      </footer>

      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='fixed cursor-pointer bottom-8 right-8 p-4
             bg-gradient-to-r from-red-500 to-orange-500 text-white
             rounded-full shadow-lg z-40
             transition-transform duration-300 ease-in-out
             hover:scale-125 hover:shadow-[0_0_25px_rgba(255,100,100,0.8)]'
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
