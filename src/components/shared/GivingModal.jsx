import { X } from 'lucide-react';
import { useEffect } from 'react';

const GivingModal = ({ isOpen, onClose, formId }) => {
  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Default to the church's Tithe.ly page if no formId is provided
  const iframeSrc = formId
    ? `https://tithe.ly/give?c=${formId}`
    : 'https://give.tithe.ly/';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-primary">
          <h2 className="text-xl font-bold text-white">Give Online</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors"
            aria-label="Close giving form"
          >
            <X size={24} />
          </button>
        </div>

        {/* Iframe Content */}
        <div className="relative" style={{ height: '600px' }}>
          <iframe
            src={iframeSrc}
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
            }}
            title="Give Online"
            allow="payment"
          />
        </div>
      </div>
    </div>
  );
};

export default GivingModal;
