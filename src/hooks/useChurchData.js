import { useContext } from 'react';
import { ChurchDataContext } from '../contexts/ChurchDataContext';

/**
 * Custom hook to access church data from context
 * @returns {Object} Church data and update functions
 */
export const useChurchData = () => {
  const context = useContext(ChurchDataContext);

  if (context === null) {
    throw new Error('useChurchData must be used within a ChurchDataProvider');
  }

  return context;
};

export default useChurchData;
