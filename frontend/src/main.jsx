import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter} from 'react-router-dom'
import FoodContextProvider from './context/FoodContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <FoodContextProvider>
      <App />
    </FoodContextProvider>
    </BrowserRouter>
)
