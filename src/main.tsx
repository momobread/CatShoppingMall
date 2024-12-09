import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// document.getElementById('root')에 ! 붙이기
createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>
  <>
    <App />
  </>
);
