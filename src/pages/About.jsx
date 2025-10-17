import { Shield, Heart, Award, Users } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()

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

  const team = [
    {
      name: 'Faustine Grace',
      role: 'Fondatrice & Présidente',
      //image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    },
    {
      name: '[Nom à compléter]',
      role: 'Directeur Exécutif',
      //image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
    },
    {
      name: '[Nom à compléter]',
      role: 'Responsable Programmes',
      //image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop',
    },
    {
      name: '[Nom à compléter]',
      role: 'Responsable Communication',
      //image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    },
  ]

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('about.title')}
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t('about.history')}
              </h2>
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
                alt="Notre histoire"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-blue-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="ong1.jpg"
                alt="our mission"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t('about.mission')}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('about.missionText')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('about.values')}
            </h2>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('about.team')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des personnes passionnées et dévouées à notre mission
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
