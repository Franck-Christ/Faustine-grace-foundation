import { Link } from 'react-router-dom'
import { Heart, Users, Target, ArrowRight, Shield, Award, BookOpen, Briefcase, Play, X, ChevronLeft, ChevronRight, Image as ImageIcon, MapPin, Phone, Mail, Send, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

export default function Home() {
  const { t } = useTranslation()
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will respond as soon as possible.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const features = [
    {
      icon: Users,
      title: t('home.whoWeAre'),
      description: t('home.whoWeAreText'),
      link: '#about',
    },
    {
      icon: Target,
      title: t('home.ourPrograms'),
      description: t('home.ourProgramsText'),
      link: '#programs',
    },
    {
      icon: Heart,
      title: t('home.howToHelp'),
      description: t('home.howToHelpText'),
      link: '#get-involved',
    },
  ]

  const values = [
    {
      icon: Shield,
      title: t('about.equity'),
      description: t('about.equityText'),
    },
    {
      icon: Heart,
      title: t('about.compassion'),
      description: t('about.compassionText'),
    },
    {
      icon: Users,
      title: t('about.accountability'),
      description: t('about.accountabilityText'),
    },
    {
      icon: Award,
      title: t('about.impact'),
      description: t('about.impactText'),
    },
  ]

  const programs = [
    {
      icon: BookOpen,
      title: t('programs.education'),
      description: t('programs.educationDesc'),
      image: 'ong4.jpg',
      color: 'blue',
      details: 'Average annual cost per pupil: 63,000 FCFA (~$100) covering fees, PTA, feeding, uniform, books, and supplies.',
    },
    {
      icon: Users,
      title: t('programs.girls'),
      description: t('programs.girlsDesc'),
      image: 'ong6.webp',
      color: 'purple',
      details: 'For girls aged 12-18, developing leadership skills, improving academic outcomes, and providing mentorship.',
    },
    {
      icon: Briefcase,
      title: t('programs.women'),
      description: t('programs.womenDesc'),
      image: 'ong2.jpeg',
      color: 'green',
      details: 'Entrepreneurship training, digital and financial literacy, small grants, and capacity building workshops.',
    },
    {
      icon: Heart,
      title: t('programs.community'),
      description: t('programs.communityDesc'),
      image: 'ong3.jpg',
      color: 'red',
      details: 'Strengthening community capacities and creating sustainable opportunities for growth.',
    },
  ]

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      src: 'learning.jpg',
      alt: 'Students in classroom',
      title: 'Education Initiative',
      description: 'Children engaged in learning activities at one of our partner schools'
    },
    {
      id: 2,
      type: 'image',
      src: 'leadership.jpg',
      alt: 'Girls leadership program',
      title: 'Girls Leadership Program',
      description: 'Young girls participating in our leadership development workshops'
    },
    {
      id: 3,
      type: 'image',
      src: 'women empowerment.jpg',
      alt: 'Women empowerment',
      title: 'Women Empowerment',
      description: 'Women learning new skills in our entrepreneurship training program'
    },
    {
      id: 4,
      type: 'image',
      src: 'comunity dev.jpg',
      alt: 'Community development',
      title: 'Community Development',
      description: 'Community members working together on development projects'
    },
    {
      id: 5,
      type: 'image',
      src: 'supplies.jpg',
      alt: 'School supplies distribution',
      title: 'School Supplies Distribution',
      description: 'Distributing educational materials to students in need'
    },
    {
      id: 6,
      type: 'image',
      src: 'Volunteer activities.jpg',
      alt: 'Volunteer activities',
      title: 'Volunteer Activities',
      description: 'Our dedicated volunteers making a difference in the community'
    },
    {
      id: 7,
      type: 'image',
      src: 'Healthcare initiative.jpg',
      alt: 'Healthcare initiative',
      title: 'Healthcare Initiative',
      description: 'Providing medical care and health education to community members'
    },
    {
      id: 8,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop&q=80',
      alt: 'Youth development',
      title: 'Youth Development',
      description: 'Young people engaged in skill-building and personal development activities'
    },
    {
      id: 9,
      type: 'image',
      src: 'Community celebration.jpg',
      alt: 'Community celebration',
      title: 'Community Celebration',
      description: 'Celebrating achievements and milestones with the community'
    },
    {
      id: 10,
      type: 'image',
      src: 'ducational workshop.jpg',
      alt: 'Educational workshop',
      title: 'Educational Workshop',
      description: 'Interactive learning sessions for students and teachers'
    },
    {
      id: 11,
      type: 'image',
      src: 'Mentorship program.jpg',
      alt: 'Mentorship program',
      title: 'Mentorship Program',
      description: 'Experienced mentors guiding the next generation of leaders'
    },
    {
      id: 12,
      type: 'image',
      src: 'Sustainable development.jpg',
      alt: 'Sustainable development',
      title: 'Sustainable Development',
      description: 'Building sustainable solutions for long-term community impact'
    }
  ]

  const ways = [
    {
      icon: Heart,
      title: t('getInvolved.donate'),
      description: t('getInvolved.donateText'),
      cta: t('getInvolved.donateNow'),
      color: 'red',
    },
    {
      icon: Users,
      title: t('getInvolved.volunteer'),
      description: t('getInvolved.volunteerText'),
      cta: t('getInvolved.joinUs'),
      color: 'blue',
    },
    {
      icon: Users,
      title: t('getInvolved.partner'),
      description: t('getInvolved.partnerText'),
      cta: t('getInvolved.contactUs'),
      color: 'green',
    },
  ]

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
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop',
      date: '1 March 2024',
      author: 'Sophie Diallo',
      category: 'Empowerment',
    },
  ]

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.address'),
      content: 'Nkol Bison\nYaoundé, Cameroon',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+237 670 329 484\n+237 674 881 138',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@faustinegracefoundation.org',
    },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:bg-red-600' },
  ]

  const colorClasses = {
    red: 'from-[#5a4d9b] to-[#5a4d9b] hover:from-[#4a3d8b] hover:to-[#4a3d8b]',
    blue: 'from-[#2792d1] to-[#2792d1] hover:from-[#1e7bb8] hover:to-[#1e7bb8]',
    green: 'from-[#2792d1] to-[#2792d1] hover:from-[#1e7bb8] hover:to-[#1e7bb8]',
    purple: 'from-[#5a4d9b] to-[#5a4d9b] hover:from-[#4a3d8b] hover:to-[#4a3d8b]',
  }

  const openLightbox = (index) => {
    setCurrentImageIndex(index)
    setSelectedImage(galleryItems[index])
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % galleryItems.length
    setCurrentImageIndex(newIndex)
    setSelectedImage(galleryItems[newIndex])
  }

  const prevImage = () => {
    const newIndex = currentImageIndex === 0 ? galleryItems.length - 1 : currentImageIndex - 1
    setCurrentImageIndex(newIndex)
    setSelectedImage(galleryItems[newIndex])
  }

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/ong1.jpg)',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/65 to-blue-900/70"></div>
        <div className="relative container-custom py-24 md:py-32">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              {t('home.welcome')}
            </h1>
            <p className="text-2xl md:text-3xl mb-6 text-blue-100 font-semibold">
              {t('home.subtitle')}
            </p>
            <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
              {t('home.welcomeText')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#about"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                {t('home.cta')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#get-involved"
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors border-2 border-white"
              >
                <Heart className="mr-2 w-5 h-5" />
                {t('home.donate')}
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <a
                key={index}
                href={feature.link}
                className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <feature.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-6 flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                  {t('home.learnMore')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('programs.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('programs.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className={`absolute top-4 left-4 w-16 h-16 bg-gradient-to-r ${colorClasses[program.color]} rounded-full flex items-center justify-center shadow-lg`}>
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {program.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {program.description}
                  </p>
                  <div className="text-sm text-gray-600 mb-4">
                    {program.details}
                  </div>
                  <button className={`inline-flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform`}>
                    Learn more
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our work and impact through images and stories from the field
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className="group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Story Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('impactStory.title')}
              </h2>
              <p className="text-xl text-gray-600">
                {t('impactStory.subtitle')}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {t('impactStory.storyTitle')}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {t('impactStory.paragraph1')}
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {t('impactStory.paragraph2')}
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {t('impactStory.paragraph3')}
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {t('impactStory.paragraph4')}
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                    <p className="text-xl font-semibold text-blue-800 italic">
                      {t('impactStory.quote')}
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="agnes.jpg"
                    alt="Agnes and her mother"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
              <div className="text-center mt-12">
                <Link
                  to="/stories"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                >
                  {t('stories.readMoreStories', 'Read more Stories')}
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('about.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>

          {/* History Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {t('about.history')}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t('about.historyText')}
              </p>
              <blockquote className="border-l-4 border-blue-600 pl-6 italic text-xl text-gray-800 mt-6">
                "{t('about.quote')}"
              </blockquote>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src="ong1.jpg"
                alt="Our history"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Mission Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="ong3.jpg"
                alt="Our mission"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {t('about.mission')}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('about.missionText')}
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('about.values')}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg border border-blue-100"
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('about.team')}
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Passionate people dedicated to our mission
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'Faustine Grace', role: 'Founder & President' },
                { name: 'To be completed', role: 'Executive Director' },
                { name: 'To be completed', role: 'Programs Manager' },
                { name: 'To be completed', role: 'Communications Manager' },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
                >
                  <div className="aspect-square bg-gray-200 flex items-center justify-center">
                    <Users className="w-16 h-16 text-gray-400" />
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h4>
                    <p className="text-blue-600 font-medium">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>





      {/* Get Involved Section */}
      <section id="get-involved" className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('getInvolved.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('getInvolved.subtitle')}
            </p>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-700 leading-relaxed">
              {t('getInvolved.intro')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {ways.map((way, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className={`h-2 bg-gradient-to-r ${colorClasses[way.color]}`}></div>
                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${colorClasses[way.color]} rounded-full flex items-center justify-center mb-6`}>
                    <way.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {way.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {way.description}
                  </p>
                  <button className={`w-full px-6 py-3 bg-gradient-to-r ${colorClasses[way.color]} text-white font-semibold rounded-lg hover:opacity-90 transition-opacity`}>
                    {way.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              {
                title: 'Full Sponsorship',
                amount: '63,000 FCFA',
                amountUSD: '~$100',
                description: 'Covers a child\'s full education package for one year',
                items: ['School fees', 'PTA contributions', 'Feeding', 'Uniform', 'Sports attire', 'Activity books', 'School supplies'],
                color: 'blue',
              },
              {
                title: 'Tuition Sponsorship',
                amount: '45,500 FCFA',
                amountUSD: '~$72',
                description: 'Supports core education costs',
                items: ['School fees', 'PTA', 'Feeding', 'Dress'],
                color: 'green',
              },
              {
                title: 'Girls in Leadership',
                amount: '30,000 FCFA',
                amountUSD: '~$48',
                description: 'Supports one girl in the leadership program for one year',
                items: ['Mentorship', 'Training materials', 'Educational support'],
                color: 'purple',
              },
              {
                title: 'Train One Woman',
                amount: '55,000 FCFA',
                amountUSD: '~$88',
                description: 'Provides entrepreneurship training and capacity building',
                items: ['Business training', 'Financial literacy', 'Capacity building workshops'],
                color: 'red',
              },
            ].map((pkg, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:border-blue-500 transition-all overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${colorClasses[pkg.color]}`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {pkg.title}
                  </h3>
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-blue-600">{pkg.amount}</div>
                    <div className="text-sm text-gray-500">{pkg.amountUSD}</div>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{pkg.description}</p>
                  <ul className="space-y-2 mb-6">
                    {pkg.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full px-4 py-2 bg-gradient-to-r ${colorClasses[pkg.color]} text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm`}>
                    Sponsor Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest News
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay informed about our latest actions and impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {newsArticles.map((article, index) => (
              <article
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {article.author}</span>
                    <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                      Read more →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>


        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {t('contact.getInTouch')}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="+XXX XX XX XX XX XX"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <Send className="mr-2 w-5 h-5" />
                  {t('contact.send')}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Our coordinates
              </h3>
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">{info.title}</h4>
                      <p className="text-gray-700 whitespace-pre-line">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="p-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl text-white">
                <h4 className="text-xl font-bold mb-4">{t('contact.followUs')}</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center ${social.color} transition-colors`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-700">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
