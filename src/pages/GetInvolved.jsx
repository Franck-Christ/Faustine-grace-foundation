import { Heart, Users, UserPlus, CreditCard, Smartphone, Building2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function GetInvolved() {
  const { t } = useTranslation()

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
      icon: UserPlus,
      title: t('getInvolved.partner'),
      description: t('getInvolved.partnerText'),
      cta: t('getInvolved.contactUs'),
      color: 'green',
    },
  ]

  const donationMethods = [
    {
      icon: Smartphone,
      title: t('getInvolved.mobileMoney'),
      details: [
        'MTN Mobile Money',
        'Orange Money',
        'Contact us for details',
      ],
    },
    {
      icon: CreditCard,
      title: t('getInvolved.stripe'),
      details: [
        'Secure international payments',
        'Credit/Debit cards accepted',
        t('getInvolved.securePayments'),
      ],
    },
    {
      icon: Building2,
      title: t('getInvolved.bankTransfer'),
      details: [
        'Bank transfer available',
        'Contact us for account details',
        t('getInvolved.bankTransferAvailable'),
      ],
    },
  ]

  const sponsorshipPackages = [
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
      items: ['School fees', 'PTA', 'Feeding', t('getInvolved.robe')],
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
  ]

  const colorClasses = {
    red: 'from-red-500 to-red-700',
    blue: 'from-blue-500 to-blue-700',
    green: 'from-green-500 to-green-700',
    purple: 'from-purple-500 to-purple-700',
  }

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('getInvolved.title')}
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {t('getInvolved.subtitle')}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              {t('getInvolved.intro')}
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* Sponsorship Packages */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sponsorship Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose how you want to make a difference
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorshipPackages.map((pkg, index) => (
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

      {/* Donation Methods */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('getInvolved.methods')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the payment method that works best for you
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {donationMethods.map((method, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg border border-blue-100"
              >
                <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <method.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {method.title}
                </h3>
                <ul className="space-y-3">
                  {method.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-700 text-sm">
                      {detail}
                    </li>
                  ))}
                </ul>
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
              {t('getInvolved.impactTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('getInvolved.impactDescription')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { amount: '25€', impact: t('getInvolved.schoolSupplies') },
              { amount: '50€', impact: t('getInvolved.medicalConsultation') },
              { amount: '100€', impact: t('getInvolved.vocationalTraining') },
              { amount: '250€', impact: t('getInvolved.waterWell') },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-4">
                  {item.amount}
                </div>
                <p className="text-gray-700 font-medium">{item.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('getInvolved.testimonials')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('getInvolved.whatTheySay')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Marie Mbogue',
                role: t('getInvolved.regularDonor'),
                text: t('getInvolved.proudToSupport'),
                image: '',
              },
              {
                name: 'Jean-Pierre Kouadio',
                role: t('getInvolved.volunteerRole'),
                text: t('getInvolved.enrichingExperience'),
                image: '',
              },
              {
                name: 'Sophie Martin',
                role: t('getInvolved.corporatePartner'),
                text: t('getInvolved.concreteContribution'),
                image: '',
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-blue-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('getInvolved.readyToMakeDifference')}
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            {t('getInvolved.joinUsToday')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-colors text-lg">
              <Heart className="inline-block mr-2 w-6 h-6" />
              {t('getInvolved.makeDonation')}
            </button>
            <a
              href="/contact"
              className="px-8 py-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors border-2 border-white text-lg"
            >
              {t('getInvolved.contactUs')}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
