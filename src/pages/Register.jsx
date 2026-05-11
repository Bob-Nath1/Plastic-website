import React from 'react'
import AuthForm from '../components/AuthForm'
import { api, safeCall } from '../services/api'
import { useNavigate } from 'react-router-dom'

export default function Register({ onRegister }) {

    const navigate = useNavigate()

  async function handleSubmit(values) {
    console.log('Register form submitted with values:', values);
    try {
   const response = await api.post('/auth/register', values)
  const data = response.data

      // safely handle response
      const user = data?.user ||
       data?.data?.user || data

     onRegister?.(user)


       navigate('/user')

    } catch (err) {
      console.error('Register error:', err)
    }
  }

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Register
        console.log('Register payload:', values);
      </h2>
      <AuthForm mode="register" onSubmit={handleSubmit} />
      console.log('Register payload:', values);
    </div>
  )
}








