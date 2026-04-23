import React, { createContext, useContext } from "react";

interface CalendlyContextType {
  openCalendly: (url?: string) => void;
  closeCalendly: () => void;
}

const CalendlyContext = createContext<CalendlyContextType | undefined>(undefined);

export const CalendlyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const calendlyUrl = "https://calendly.com/ziempire1004/30min";

  const openCalendly = (url?: string) => {
    window.open(url || calendlyUrl, "_blank", "noopener,noreferrer");
  };

  const closeCalendly = () => {
    // Not needed for external tab
  };

  return (
    <CalendlyContext.Provider value={{ openCalendly, closeCalendly }}>
      {children}
    </CalendlyContext.Provider>
  );
};

export const useCalendly = () => {
  const context = useContext(CalendlyContext);
  if (!context) {
    throw new Error("useCalendly must be used within a CalendlyProvider");
  }
  return context;
};
