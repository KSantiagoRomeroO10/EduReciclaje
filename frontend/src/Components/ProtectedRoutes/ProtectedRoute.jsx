import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = ({ IsAllowed, redirectTo = '/', children }) => {
  if(!IsAllowed){
    return <Navigate to={redirectTo} replace />
  }
  return children ? children : <Outlet />
}

export default ProtectedRoute