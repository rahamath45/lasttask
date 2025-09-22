
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

axios.defaults.baseURL = "https://passwordreset-2-cisz.onrender.com"

createRoot(document.getElementById('root')).render(
<BrowserRouter>
     <App />
</BrowserRouter>
  
  
)
