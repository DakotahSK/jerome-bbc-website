import { useState } from 'react';
import { Plus, Trash2, Save } from 'lucide-react';
import useChurchData from '../../hooks/useChurchData';
import Card from '../shared/Card';
import Button from '../shared/Button';

const EventsEditor = () => {
  const { events, updateEvents } = useChurchData();
  const [editedEvents, setEditedEvents] = useState(events);
  const [isSaved, setIsSaved] = useState(false);

  const handleEventChange = (index, field, value) => {
    const updated = [...editedEvents];
    updated[index] = { ...updated[index], [field]: value };
    setEditedEvents(updated);
    setIsSaved(false);
  };

  const addEvent = () => {
    const newEvent = {
      id: Date.now().toString(),
      title: '',
      date: '',
      time: '',
      location: '',
      description: '',
    };
    setEditedEvents([...editedEvents, newEvent]);
    setIsSaved(false);
  };

  const removeEvent = (index) => {
    const updated = editedEvents.filter((_, i) => i !== index);
    setEditedEvents(updated);
    setIsSaved(false);
  };

  const handleSave = () => {
    // Validate all events have required fields
    const isValid = editedEvents.every(
      (event) => event.title && event.date && event.time && event.location
    );

    if (!isValid) {
      alert('Please fill in title, date, time, and location for each event.');
      return;
    }

    updateEvents(editedEvents);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <Card className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-charcoal mb-2">Events & Announcements</h2>
        <p className="text-gray-600">Manage upcoming events and church activities</p>
      </div>

      {editedEvents.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <p className="mb-4">No events yet. Add your first event!</p>
        </div>
      ) : (
        <div className="space-y-4 mb-6">
          {editedEvents.map((event, index) => (
            <div key={event.id} className="border border-gray-200 rounded-lg p-4 bg-white">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-lg">Event {index + 1}</h3>
                <button
                  onClick={() => removeEvent(index)}
                  className="text-red-600 hover:text-red-700 transition-colors"
                  title="Remove event"
                >
                  <Trash2 size={20} />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Event Title *
                  </label>
                  <input
                    type="text"
                    value={event.title}
                    onChange={(e) => handleEventChange(index, 'title', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
                    placeholder="Sunday School & Worship Service"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date *
                  </label>
                  <input
                    type="text"
                    value={event.date}
                    onChange={(e) => handleEventChange(index, 'date', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
                    placeholder="Every Sunday or Dec 25, 2024"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Time *
                  </label>
                  <input
                    type="text"
                    value={event.time}
                    onChange={(e) => handleEventChange(index, 'time', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
                    placeholder="10:00 AM"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location *
                  </label>
                  <input
                    type="text"
                    value={event.location}
                    onChange={(e) => handleEventChange(index, 'location', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
                    placeholder="Main Sanctuary"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    value={event.description}
                    onChange={(e) => handleEventChange(index, 'description', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
                    rows="3"
                    placeholder="Event description..."
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex gap-3">
        <Button
          variant="outline"
          onClick={addEvent}
          className="flex items-center gap-2"
        >
          <Plus size={18} />
          Add Event
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

export default EventsEditor;
