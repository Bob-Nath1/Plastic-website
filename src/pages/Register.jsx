import React from 'react'
import AuthForm from '../components/AuthForm'
import { api, safeCall } from '../services/api'

export default function Register({ onRegister }) {

  async function handleSubmit(values) {
    try {
      const data = await safeCall(
        () => api.post('/auth/register', values),
        { id: 'local-1', ...values, role: 'user' }
      )

      // safely handle response
      const user = data?.user ||
       data?.data?.user || data

      if (onRegister) {
        onRegister(user)
      }

    } catch (err) {
      console.error('Register error:', err)
    }
  }

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Register</h2>
      <AuthForm mode="register" onSubmit={handleSubmit} />
    </div>
  )
}