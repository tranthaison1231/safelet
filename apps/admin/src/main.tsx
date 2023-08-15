import { routes } from '@generouted/react-router/lazy'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from 'react-query'
import './style.css'
import { RouterProvider } from 'react-router-dom'
import { sentryCreateBrowserRouter } from './configs/sentry'


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
    <RouterProvider router={sentryCreateBrowserRouter(routes)} />
    <Toaster position="bottom-left" />
  </QueryClientProvider>
)
