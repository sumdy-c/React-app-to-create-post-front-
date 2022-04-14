import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/app/app';
import 'bootstrap/dist/css/bootstrap.css';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
