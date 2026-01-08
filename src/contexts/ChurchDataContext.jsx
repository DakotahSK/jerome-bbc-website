import { createContext, useState, useEffect } from 'react';
import { getChurchData, saveChurchData } from '../utils/storage';

export const ChurchDataContext = createContext(null);

export const ChurchDataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load data from localStorage on mount
  useEffect(() => {
    const loadData = () => {
      try {
        const churchData = getChurchData();
        setData(churchData);
      } catch (error) {
        console.error('Error loading church data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  // Auto-save data to localStorage whenever it changes
  useEffect(() => {
    if (data && !isLoading) {
      saveChurchData(data);
    }
  }, [data, isLoading]);

  const updateServiceTimes = (newServiceTimes) => {
    setData((prev) => ({
      ...prev,
      serviceTimes: newServiceTimes,
    }));
  };

  const updateContact = (newContact) => {
    setData((prev) => ({
      ...prev,
      contact: newContact,
    }));
  };

  const updateEvents = (newEvents) => {
    setData((prev) => ({
      ...prev,
      events: newEvents,
    }));
  };

  const updateSocial = (newSocial) => {
    setData((prev) => ({
      ...prev,
      social: newSocial,
    }));
  };

  const value = {
    serviceTimes: data?.serviceTimes || [],
    contact: data?.contact || {},
    events: data?.events || [],
    social: data?.social || {},
    updateServiceTimes,
    updateContact,
    updateEvents,
    updateSocial,
    isLoading,
  };

  return (
    <ChurchDataContext.Provider value={value}>
      {children}
    </ChurchDataContext.Provider>
  );
};
