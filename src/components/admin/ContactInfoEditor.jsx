import { useState } from 'react';
import { Save } from 'lucide-react';
import useChurchData from '../../hooks/useChurchData';
import Card from '../shared/Card';
import Button from '../shared/Button';

const ContactInfoEditor = () => {
  const { contact, social, updateContact, updateSocial } = useChurchData();
  const [editedContact, setEditedContact] = useState(contact);
  const [editedSocial, setEditedSocial] = useState(social);
  const [isSaved, setIsSaved] = useState(false);

  const handleContactChange = (field, value) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setEditedContact({
        ...editedContact,
        [parent]: {
          ...editedContact[parent],
          [child]: value,
        },
      });
    } else {
      setEditedContact({ ...editedContact, [field]: value });
    }
    setIsSaved(false);
  };

  const handleSocialChange = (platform, value) => {
    setEditedSocial({ ...editedSocial, [platform]: value });
    setIsSaved(false);
  };

  const handleSave = () => {
    // Basic validation
    if (!editedContact.phone || !editedContact.email) {
      alert('Phone and email are required fields.');
      return;
    }

    // Update full address string
    const fullAddress = `${editedContact.address.line2}, ${editedContact.address.city}, ${editedContact.address.state} ${editedContact.address.zip}`;
    const updatedContact = {
      ...editedContact,
      address: {
        ...editedContact.address,
        full: fullAddress,
      },
    };

    updateContact(updatedContact);
    updateSocial(editedSocial);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <Card className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-charcoal mb-2">Contact Information</h2>
        <p className="text-gray-600">Update church contact details and social media links</p>
      </div>

      <div className="space-y-6">
        {/* Address Section */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Address</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Church Name
              </label>
              <input
                type="text"
                value={editedContact.address?.line1 || ''}
                onChange={(e) => handleContactChange('address.line1', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
                placeholder="Jerome Bible Baptist Church"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Street Address
              </label>
              <input
                type="text"
                value={editedContact.address?.line2 || ''}
                onChange={(e) => handleContactChange('address.line2', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
                placeholder="132 2nd Ave East"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <input
                type="text"
                value={editedContact.address?.city || ''}
                onChange={(e) => handleContactChange('address.city', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
                placeholder="Jerome"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                State
              </label>
              <input
                type="text"
                value={editedContact.address?.state || ''}
                onChange={(e) => handleContactChange('address.state', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
                placeholder="ID"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ZIP Code
              </label>
              <input
                type="text"
                value={editedContact.address?.zip || ''}
                onChange={(e) => handleContactChange('address.zip', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
                placeholder="83338"
              />
            </div>
          </div>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Contact Details</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                value={editedContact.phone || ''}
                onChange={(e) => handleContactChange('phone', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
                placeholder="(208) 324-2804"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                value={editedContact.email || ''}
                onChange={(e) => handleContactChange('email', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
                placeholder="info@jeromebbc.com"
              />
            </div>
          </div>
        </div>

        {/* Office Hours */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Office Hours</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Days
              </label>
              <input
                type="text"
                value={editedContact.officeHours?.days || ''}
                onChange={(e) => handleContactChange('officeHours.days', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
                placeholder="Monday - Friday"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Hours
              </label>
              <input
                type="text"
                value={editedContact.officeHours?.hours || ''}
                onChange={(e) => handleContactChange('officeHours.hours', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
                placeholder="9:00 AM - 4:00 PM"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Closed
              </label>
              <input
                type="text"
                value={editedContact.officeHours?.closed || ''}
                onChange={(e) => handleContactChange('officeHours.closed', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
                placeholder="Closed weekends"
              />
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Social Media Links</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Facebook URL
              </label>
              <input
                type="url"
                value={editedSocial.facebook || ''}
                onChange={(e) => handleSocialChange('facebook', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
                placeholder="https://facebook.com/..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                YouTube URL
              </label>
              <input
                type="url"
                value={editedSocial.youtube || ''}
                onChange={(e) => handleSocialChange('youtube', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
                placeholder="https://youtube.com/..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Twitter/X URL
              </label>
              <input
                type="url"
                value={editedSocial.twitter || ''}
                onChange={(e) => handleSocialChange('twitter', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
                placeholder="https://x.com/..."
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-3 mt-6">
        <Button
          variant="green"
          onClick={handleSave}
          className="flex items-center gap-2"
        >
          <Save size={18} />
          Save Changes
        </Button>

        {isSaved && (
          <div className="flex items-center text-green font-medium">
            Changes saved successfully!
          </div>
        )}
      </div>
    </Card>
  );
};

export default ContactInfoEditor;
