import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import UserDashboard from './pages/UserDashboard'
import AdminDashboard from './pages/AdminDashboard'
import Topbar from './components/Topbar'
import { useAuth } from './hooks/useAuth'


export default function App() {
const auth = useAuth()


return (
<div className="min-h-screen bg-gray-100">
<Topbar user={auth.user} onLogout={auth.logout} />
<main className="container mx-auto p-4">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/register" element={<Register onRegister={auth.login} />} />
<Route path="/login" element={<Login onLogin={auth.login} />} />


<Route path="/user" element={auth.user ? <UserDashboard user={auth.user} /> : <Navigate to="/login" replace />} />
<Route path="/admin" element={auth.user?.role === 'admin' ? <AdminDashboard user={auth.user} /> : <Navigate to="/login" replace />} />


<Route path="*" element={<div className="py-20 text-center">Page not found</div>} />
</Routes>
</main>
</div>
)
}
