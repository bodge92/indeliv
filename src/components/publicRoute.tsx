// src/components/RequireNoAuth.tsx
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { RootState } from '../stores'

interface RequireNoAuthProps {
  children: JSX.Element
}

const RequireNoAuth: React.FC<RequireNoAuthProps> = ({ children }) => {
  const authToken = useSelector((state: RootState) => state.authToken.token)

  if (authToken) {
    return <Navigate to="/dashboard/invoices" replace />
  }

  return children
}
export default RequireNoAuth
