import { useState } from 'react';
import AdminLayout from '../components/admin/AdminLayout';
import ServiceTimesEditor from '../components/admin/ServiceTimesEditor';
import ContactInfoEditor from '../components/admin/ContactInfoEditor';
import EventsEditor from '../components/admin/EventsEditor';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('services');

  const tabs = [
    { id: 'services', label: 'Service Times', component: ServiceTimesEditor },
    { id: 'contact', label: 'Contact Info', component: ContactInfoEditor },
    { id: 'events', label: 'Events', component: EventsEditor },
  ];

  const ActiveComponent = tabs.find((tab) => tab.id === activeTab)?.component;

  return (
    <AdminLayout>
      <div className="max-w-5xl mx-auto">
        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-sm p-2 mb-6">
          <div className="flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex-1 px-6 py-3 rounded-lg font-medium transition-colors
                  ${
                    activeTab === tab.id
                      ? 'bg-green text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Active Editor */}
        <div>
          {ActiveComponent && <ActiveComponent />}
        </div>

        {/* Help Text */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">Tips:</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• All changes are saved automatically to your browser's local storage</li>
            <li>• Changes will appear immediately on the public website after saving</li>
            <li>• Your session will expire after 2 hours of inactivity</li>
            <li>• Make sure to click "Save Changes" after editing each section</li>
          </ul>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Admin;
