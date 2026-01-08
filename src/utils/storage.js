const STORAGE_KEY = 'jbbc_church_data';

/**
 * Get default church data matching current hardcoded values
 */
export const getDefaultData = () => ({
  serviceTimes: [
    {
      id: '1',
      name: 'Sunday School',
      time: '10:00 AM',
      description: 'All Ages',
    },
    {
      id: '2',
      name: 'Sunday Morning Worship',
      time: '11:00 AM',
      description: 'Main Service',
    },
    {
      id: '3',
      name: 'Sunday Evening Service',
      time: '6:00 PM',
      description: 'Evening Worship',
    },
    {
      id: '4',
      name: 'Wednesday Service',
      time: '7:00 PM',
      description: 'Midweek Prayer & Study',
    },
  ],
  contact: {
    address: {
      line1: 'Jerome Bible Baptist Church',
      line2: '132 2nd Ave East',
      city: 'Jerome',
      state: 'ID',
      zip: '83338',
      full: '132 2nd Ave East, Jerome, ID 83338',
      coordinates: {
        lat: 42.7249,
        lng: -114.5189,
      },
    },
    phone: '(208) 324-2804',
    email: 'info@jeromebbc.com',
    officeHours: {
      days: 'Monday - Friday',
      hours: '9:00 AM - 4:00 PM',
      closed: 'Closed weekends',
    },
  },
  events: [
    {
      id: '1',
      title: 'Sunday School & Worship Service',
      date: 'Every Sunday',
      time: '10:00 AM & 11:00 AM',
      location: 'Main Sanctuary',
      description: 'Sunday School at 10 AM followed by Worship Service at 11 AM. Join us for Bible study, uplifting worship, and fellowship.',
    },
    {
      id: '2',
      title: 'Wednesday Night Service',
      date: 'Every Wednesday',
      time: '7:00 PM',
      location: 'Main Sanctuary',
      description: 'Join us for midweek worship, prayer, and Bible teaching to strengthen your faith.',
    },
    {
      id: '3',
      title: 'Saturday Outreach',
      date: 'Every Saturday',
      time: '10:30 AM',
      location: 'Various Locations',
      description: 'Join us as we reach out to our community through various outreach projects and service opportunities.',
    },
  ],
  social: {
    facebook: 'https://facebook.com/134377019947130',
    youtube: 'https://www.youtube.com/@jeromebiblebaptistchurch4722/streams',
    twitter: 'https://x.com/bbcJerome',
  },
});

/**
 * Load church data from localStorage with fallback to defaults
 */
export const getChurchData = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const data = JSON.parse(stored);
      // Validate that data has required structure
      if (data.serviceTimes && data.contact && data.events && data.social) {
        return data;
      }
    }
  } catch (error) {
    console.error('Error loading church data from localStorage:', error);
  }

  // Return defaults if localStorage is empty or corrupted
  return getDefaultData();
};

/**
 * Save church data to localStorage
 */
export const saveChurchData = (data) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch (error) {
    console.error('Error saving church data to localStorage:', error);
    // Handle quota exceeded or other errors
    if (error.name === 'QuotaExceededError') {
      alert('Storage quota exceeded. Unable to save changes.');
    }
    return false;
  }
};

/**
 * Reset church data to defaults (useful for admin)
 */
export const clearChurchData = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (error) {
    console.error('Error clearing church data:', error);
    return false;
  }
};
