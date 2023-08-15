import { Routes } from '@generouted/react-router/lazy'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from 'react-query'
import './style.css'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false
    }
  }
})

createRoot(document.getElementById('app')!).render(
  <QueryClientProvider client={queryClient}>
    <Routes />
    <Toaster position="bottom-left" />
  </QueryClientProvider>
)
