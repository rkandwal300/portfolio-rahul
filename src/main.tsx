import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import {
  Theme,
  ThemeProvider,
} from './components/shared/themes/ThemeProvider.tsx';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  rootElement.className = 'p-0 m-0 w-full';
  rootElement.style.padding = '0';
  rootElement.style.margin = '0';
}
createRoot(rootElement!).render(
  <StrictMode>
    <ThemeProvider defaultTheme={Theme.Dark} storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
  </StrictMode>
);
