import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PrivateLayout from '@/layouts/PrivateLayout'
import Dashboard from '@/pages/dashboard'
import Login from '@/pages/login'
import Maintenance from '@/pages/maintenance'
import UserAppInstalled from '@/pages/user-app-installed'
import Register from '@/pages/register'
import ForgotPassword from './pages/forgot-password'
import ResetPassword from './pages/reset-password'

const router = createBrowserRouter([
  {
    element: <Login />,
    path: '/login'
  },
  {
    element: <Register />,
    path: '/register'
  },
  {
    element: <ForgotPassword />,
    path: '/forgot-password'
  },
  {
    element: <ResetPassword />,
    path: '/reset-password'
  },
  {
    element: <Maintenance />,
    path: '/maintenance'
  },
  {
    children: [
      {
        element: <UserAppInstalled />,
        path: '/user-app-installed'
      },
      {
        element: <Dashboard />,
        path: '/'
      }
    ],
    element: <PrivateLayout />,
    path: '/'
  },
  {
    element: <div>404</div>,
    path: '*'
  }
])

function App(): JSX.Element {
  return <RouterProvider router={router} />
}

export default App
