import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './output.css'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CandidateProvider } from './Provider/CandidateProvider.tsx'
import { ToastContainer } from 'react-toastify'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <CandidateProvider>
    <App />
    <ToastContainer 
    autoClose={2000}/>
    </CandidateProvider>
    </QueryClientProvider>
  </StrictMode>,
)
