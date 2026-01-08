import { useState } from 'react';
import { Plus, Trash2, Save } from 'lucide-react';
import useChurchData from '../../hooks/useChurchData';
import Card from '../shared/Card';
import Button from '../shared/Button';

const ServiceTimesEditor = () => {
  const { serviceTimes, updateServiceTimes } = useChurchData();
  const [editedServices, setEditedServices] = useState(serviceTimes);
  const [isSaved, setIsSaved] = useState(false);

  const handleServiceChange = (index, field, value) => {
    const updated = [...editedServices];
    updated[index] = { ...updated[index], [field]: value };
    setEditedServices(updated);
    setIsSaved(false);
  };

  const addService = () => {
    const newService = {
      id: Date.now().toString(),
      name: '',
      time: '',
      description: '',
    };
    setEditedServices([...editedServices, newService]);
    setIsSaved(false);
  };

  const removeService = (index) => {
    if (editedServices.length === 1) {
      alert('You must have at least one service time.');
      return;
    }
    const updated = editedServices.filter((_, i) => i !== index);
    setEditedServices(updated);
    setIsSaved(false);
  };

  const handleSave = () => {
    // Validate all services have required fields
    const isValid = editedServices.every(
      (service) => service.name && service.time && service.description
    );

    if (!isValid) {
      alert('Please fill in all fields for each service.');
      return;
    }

    updateServiceTimes(editedServices);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <Card className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-charcoal mb-2">Service Times</h2>
        <p className="text-gray-600">Manage your church service schedule</p>
      </div>

      <div className="space-y-4 mb-6">
        {editedServices.map((service, index) => (
          <div key={service.id} className="border border-gray-200 rounded-lg p-4 bg-white">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold text-lg">Service {index + 1}</h3>
              {editedServices.length > 1 && (
                <button
                  onClick={() => removeService(index)}
                  className="text-red-600 hover:text-red-700 transition-colors"
                  title="Remove service"
                >
                  <Trash2 size={20} />
                </button>
              )}
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Service Name *
                </label>
                <input
                  type="text"
                  value={service.name}
                  onChange={(e) => handleServiceChange(index, 'name', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
                  placeholder="Sunday School"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Time *
                </label>
                <input
                  type="text"
                  value={service.time}
                  onChange={(e) => handleServiceChange(index, 'time', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
                  placeholder="10:00 AM"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description *
                </label>
                <input
                  type="text"
                  value={service.description}
                  onChange={(e) => handleServiceChange(index, 'description', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
                  placeholder="All Ages"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <Button
          variant="outline"
          onClick={addService}
          className="flex items-center gap-2"
        >
          <Plus size={18} />
          Add Service
        </Button>

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

export default ServiceTimesEditor;
