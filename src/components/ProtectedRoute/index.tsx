import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { authContext } from '@/providers/AuthProvider/context'

const ProtectedRoute = () => {
  const { user } = useContext(authContext)

  if (user == null) {
    return <Navigate to='/' replace />
  }

  return <Outlet />
}

export default ProtectedRoute
