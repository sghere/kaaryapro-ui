import { Navigate, Route } from 'react-router'

const ProtectedRoute = (props) => {
    const isAuthenticated = false
    return isAuthenticated ? <Route {...props}/> : <Navigate to="/login"/>
}

export default ProtectedRoute