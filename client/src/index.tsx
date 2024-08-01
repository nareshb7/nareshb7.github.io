import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import AuthContext from './auth';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = createRoot(rootEl);
  root.render(
    <AuthContext>
      <>
        <App />
      </>
    </AuthContext>,
  );
}
