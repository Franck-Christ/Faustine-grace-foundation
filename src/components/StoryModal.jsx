import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const StoryModal = ({ story, onClose }) => {
  const { t } = useTranslation();

  // Handle modal open/close effects
  useEffect(() => {
    // Save current body overflow style
    const originalStyle = window.getComputedStyle(document.body).overflow;
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    // Close modal when pressing Escape key
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    
    // Cleanup function
    return () => {
      // Restore original body overflow style
      document.body.style.overflow = originalStyle;
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  if (!story) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Background overlay */}
      <div 
        className="fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity" 
        aria-hidden="true" 
        onClick={onClose}
      ></div>

      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Modal header */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-500">
                <span>{story.date}</span>
                <span className="mx-2">•</span>
                <span className="text-blue-600 font-medium">{story.category}</span>
              </div>
              <button
                type="button"
                className="text-gray-400 hover:text-gray-500 focus:outline-none"
                onClick={onClose}
                aria-label={t('common.close', 'Close')}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mt-2">
              {story.title}
            </h3>
          </div>

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="prose max-w-none text-gray-700 space-y-4">
              {story.translationKey ? (
                t(story.translationKey, '').split('\n').map((paragraph, i) => (
                  paragraph.trim() && <p key={i} className="mb-4">{paragraph.trim()}</p>
                ))
              ) : (
                <p className="text-red-500">No story content available</p>
              )}
            </div>
          </div>

          {/* Footer with close button */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <button
              type="button"
              className="w-full sm:w-auto inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:text-sm"
              onClick={onClose}
            >
              {t('common.close', 'Close')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryModal;
