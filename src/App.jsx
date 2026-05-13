import React from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'

import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import UserDashboard from './pages/UserDashboard'
import AdminDashboard from './pages/AdminDashboard'
import Topbar from './components/Topbar'
import { useAuth } from './hooks/useAuth'

export default function App() {
  const auth = useAuth()
  const location = useLocation()

  const isHome = location.pathname === "/"
  const isUser = location.pathname.startsWith("/user")
  const isAdmin = location.pathname.startsWith("/admin")

  return (
    <div className="min-h-screen bg-gray-100">

      {/* ✅ TOPBAR IS BACK */}
      <Topbar isHome={isHome} />

      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/register" element={<Register onRegister={auth.login} />} />

          <Route path="/login" element={<Login onLogin={auth.login} />} />

          <Route
            path="/user"
            element={
              auth.user
                ? <UserDashboard user={auth.user} onLogout={auth.logout} />
                : <Navigate to="/login" replace />
            }
          />

          <Route
            path="/admin"
            element={
              auth.user?.role === 'admin'
                ? <AdminDashboard user={auth.user} onLogout={auth.logout} />
                : <Navigate to="/login" replace />
            }
          />

          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </main>
    </div>
  )
}