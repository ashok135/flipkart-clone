import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { QueryClientProvider } from "@tanstack/react-query"
import {client} from './query/cretaeQuery.ts'
 

import { store } from './store/store.tsx'
import { BrowserRouter } from 'react-router-dom'
 
 
 
 


 


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <QueryClientProvider client={client}>
    <Provider store={store} >
      <BrowserRouter>
     <App />
     </BrowserRouter>
    </Provider>
    </QueryClientProvider>
  </StrictMode>,
)
