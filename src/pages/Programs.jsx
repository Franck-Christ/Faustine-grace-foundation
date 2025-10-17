import { BookOpen, Heart, Users, Briefcase, ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Programs() {
  const { t } = useTranslation()

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

  const colorClasses = {
    blue: {
      bg: 'bg-blue-600',
      hover: 'hover:bg-blue-700',
      text: 'text-blue-600',
      bgLight: 'bg-blue-100',
    },
    red: {
      bg: 'bg-red-600',
      hover: 'hover:bg-red-700',
      text: 'text-red-600',
      bgLight: 'bg-red-100',
    },
    green: {
      bg: 'bg-green-600',
      hover: 'hover:bg-green-700',
      text: 'text-green-600',
      bgLight: 'bg-green-100',
    },
    purple: {
      bg: 'bg-purple-600',
      hover: 'hover:bg-purple-700',
      text: 'text-purple-600',
      bgLight: 'bg-purple-100',
    },
  }

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('programs.title')}
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {t('programs.subtitle')}
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
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
                  <div className={`absolute top-4 left-4 w-16 h-16 ${colorClasses[program.color].bg} rounded-full flex items-center justify-center shadow-lg`}>
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
                  <button className={`inline-flex items-center ${colorClasses[program.color].text} font-semibold group-hover:translate-x-2 transition-transform`}>
                    En savoir plus
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Impact de nos programmes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des résultats concrets qui changent des vies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Enfants scolarisés', color: 'blue' },
              { number: '300+', label: 'Consultations médicales', color: 'red' },
              { number: '150+', label: 'Familles accompagnées', color: 'green' },
              { number: '100+', label: 'Femmes formées', color: 'purple' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-xl shadow-lg">
                <div className={`text-4xl md:text-5xl font-bold ${colorClasses[stat.color].text} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Soutenez nos programmes
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Votre contribution nous permet de continuer et d'étendre nos actions
            </p>
            <a
              href="/get-involved"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-colors text-lg"
            >
              <Heart className="mr-2 w-6 h-6" />
              Faire un don
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
