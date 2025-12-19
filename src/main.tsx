import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider, useDispatch, useSelector } from 'react-redux'

 

import { store } from './store/store.tsx'
 
 
 
 


 


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store} >
    <App />
    </Provider>
  </StrictMode>,
)
