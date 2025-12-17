import { Calendar, User, ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function News() {
  const { t } = useTranslation()

  const newsArticles = [
    {
      title: 'Launch of our new education program',
      excerpt: 'We are proud to announce the launch of our literacy program for 200 children in the region...',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop',
      date: '15 March 2024',
      author: 'Faustine Grace',
      category: 'Education',
    },
    {
      title: 'Successful health campaign in 5 villages',
      excerpt: 'Our medical team organized a free consultation campaign that benefited more than 300 people...',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      date: '8 March 2024',
      author: 'Dr. Marie Kouassi',
      category: 'Health',
    },
    {
      title: 'Entrepreneurship training for 50 women',
      excerpt: 'An intensive entrepreneurship and small business management training program was successfully organized...',
      image: 'training.jpeg',
      date: '1 March 2024',
      author: 'Sophie Diallo',
      category: 'Autonomisation',
    },
    {
      title: 'Partnership with UNICEF for clean water',
      excerpt: 'We have signed a strategic partnership with UNICEF to improve access to clean water in 10 communities...',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop',
      date: '22 Febuary 2024',
      author: 'Jean-Paul Mensah',
      category: 'Partnership',
    },
    {
      title: 'Open House Day: A great success',
      excerpt: 'More than 500 visitors participated in our Open House Day to discover our actions and meet our team...',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop',
      date: '14 Febuary 2024',
      author: 'Communication Team',
      category: 'Event',
    },
    {
      title: 'Construction of 3 new classrooms',
      excerpt: 'Thanks to the generosity of our donors, we were able to build 3 new classrooms equipped...',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
      date: '5 Febuary 2024',
      author: 'Faustine Grace',
      category: 'Infrastructure',
    },
  ]

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('news.title')}
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {t('news.subtitle')}
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-96 lg:h-auto">
                <img
                  src={newsArticles[0].image}
                  alt={newsArticles[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-block px-4 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full mb-4 w-fit">
                  À la une
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {newsArticles[0].title}
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {newsArticles[0].excerpt}
                </p>
                <div className="flex items-center text-gray-600 mb-6">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className="mr-6">{newsArticles[0].date}</span>
                  <User className="w-5 h-5 mr-2" />
                  <span>{newsArticles[0].author}</span>
                </div>
                <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  {t('news.readMore')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.slice(1).map((article, index) => (
              <article
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{article.date}</span>
                  </div>
                  <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:translate-x-2 transition-transform">
                    {t('news.readMore')}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
    <section className="py-20 bg-blue-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay informed about our news
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive our latest updates
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Sign up
            </button>
          </form>
        </div>
      </section>
    </div>
  )
} 
