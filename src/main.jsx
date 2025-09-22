
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8000"

createRoot(document.getElementById('root')).render(
<BrowserRouter>
     <App />
</BrowserRouter>
  
  
)
