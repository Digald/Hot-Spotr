import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import Router from './components/Router';
import Dashboard from './pages/Dashboard.js';
import Landing from './pages/Landing.js';

ReactDOM.render(<Router />, document.getElementById('root'));
