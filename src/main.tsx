import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { Theme, ThemeProvider } from './components/shared/ThemeProvider.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme={Theme.Dark} storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
  </StrictMode>
);
