// src/components/PrivateRoute.tsx
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { RootState } from '../stores'

interface PrivateRouteProps {
  children: JSX.Element
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const location = useLocation()
  const authToken = useSelector((state: RootState) => state.authToken.token)

  if (!authToken) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

export default PrivateRoute
