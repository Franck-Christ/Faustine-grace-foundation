import { useState } from 'react'
import { Play, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Gallery() {
  const { t } = useTranslation()
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      src: '/learning.jpg',
      alt: 'Students in classroom',
      title: 'Education Initiative',
      description: 'Children engaged in learning activities at one of our partner schools'
    },
    {
      id: 2,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&h=600&fit=crop&q=80',
      alt: 'Girls leadership program',
      title: 'Girls Leadership Program',
      description: 'Young girls participating in our leadership development workshops'
    },
    {
      id: 3,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop&q=80',
      alt: 'Women empowerment',
      title: 'Women Empowerment',
      description: 'Women learning new skills in our entrepreneurship training program'
    },
    {
      id: 4,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop&q=80',
      alt: 'Community development',
      title: 'Community Development',
      description: 'Community members working together on development projects'
    },
    {
      id: 5,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80',
      alt: 'School supplies distribution',
      title: 'School Supplies Distribution',
      description: 'Distributing educational materials to students in need'
    },
    {
      id: 6,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop&q=80',
      alt: 'Volunteer activities',
      title: 'Volunteer Activities',
      description: 'Our dedicated volunteers making a difference in the community'
    },
    {
      id: 7,
      type: 'image',
      src: 'ong2.jpeg',
      alt: 'Healthcare initiative',
      title: 'Healthcare Initiative',
      description: 'Providing medical care and health education to community members'
    },
    {
      id: 8,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop&q=80',
      alt: 'Youth development',
      title: 'Youth Development',
      description: 'Young people engaged in skill-building and personal development activities'
    },
    {
      id: 9,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop&q=80',
      alt: 'Community celebration',
      title: 'Community Celebration',
      description: 'Celebrating achievements and milestones with the community'
    },
    {
      id: 10,
      type: 'image',
      src: 'training.jpeg',
      alt: 'Educational workshop',
      title: 'Educational Workshop',
      description: 'Interactive learning sessions for students and teachers'
    },
    {
      id: 11,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&h=600&fit=crop&q=80',
      alt: 'Mentorship program',
      title: 'Mentorship Program',
      description: 'Experienced mentors guiding the next generation of leaders'
    },
    {
      id: 12,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop&q=80',
      alt: 'Sustainable development',
      title: 'Sustainable Development',
      description: 'Building sustainable solutions for long-term community impact'
    }
  ]

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
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Gallery
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Explore our work and impact through images and stories from the field
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
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

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
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

            {/* Image */}
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

      {/* CTA Section */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to See More?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Follow us on social media to stay updated with our latest activities and impact stories
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="px-8 py-4 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-colors text-lg"
            >
              Follow Our Journey
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
