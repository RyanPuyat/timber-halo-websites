'use client';

import { createContext, useContext } from 'react';
import { useState } from 'react';

const ReservationContext = createContext();
const initialState = { from: undefined, to: undefined };

export default function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialState);
  const resetRange = () => setRange(initialState);

  const value = {
    range,
    setRange,
    resetRange,
  };

  return (
    <ReservationContext.Provider value={value}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined)
    throw new Error('Context was used outside provide');
  return context;
}

export { useReservation, ReservationProvider };
