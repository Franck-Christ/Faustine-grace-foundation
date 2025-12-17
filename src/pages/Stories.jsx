import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import StoryModal from '../components/StoryModal';
import { Link } from 'react-router-dom';

export default function Stories() {
  const { t } = useTranslation();
  const [selectedStory, setSelectedStory] = useState(null);
  
  // Sample stories data - you can fetch this from an API or CMS later
  const stories = [
    {
      id: 'agnes',
      title: t('stories.agnes.title', 'Agnes & Her Mother: A Story of Hope'),
      excerpt: t('stories.agnes.excerpt', 'How education and empowerment transformed a family\'s future'),
      image: '/agnes.jpg',
      date: '15 Oct 2023',
      category: t('stories.categories.education', 'Education'),
      // We'll use the translation key directly in the StoryModal component
      translationKey: 'stories.agnes.fullStory'
    },
    // Add more stories here
  ];

  const openStory = (story) => {
    setSelectedStory(story);
  };

  const closeStory = () => {
    setSelectedStory(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('stories.title', 'Impact Stories')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('stories.subtitle', 'Read inspiring stories of transformation and hope from our community')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div key={story.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={story.image} 
                alt={story.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{story.date}</span>
                  <span className="mx-2">•</span>
                  <span className="text-blue-600 font-medium">{story.category}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {story.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {story.excerpt}
                </p>
                <button 
                  onClick={() => openStory(story)} 
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Read full story
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Story Modal */}
      {selectedStory && (
        <StoryModal 
          story={selectedStory} 
          onClose={closeStory} 
        />
      )}
    </div>
  );
}
