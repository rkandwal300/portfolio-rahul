import React, { createContext, ReactNode, useContext, useState } from 'react';

// Define the shape of the context
interface BotContextType {
  showBot: boolean;
  setShowBot: (value: boolean) => void;
}

// Create the context with a default value
const BotContext = createContext<BotContextType | undefined>(undefined);

// Create a provider component
export const BotProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [showBot, setShowBot] = useState<boolean>(true);

  return (
    <BotContext.Provider value={{ showBot, setShowBot }}>
      {children}
    </BotContext.Provider>
  );
};

// Custom hook for consuming the context
export const useBotContext = (): BotContextType => {
  const context = useContext(BotContext);
  if (!context) {
    throw new Error('useBotContext must be used within a BotProvider');
  }
  return context;
};
