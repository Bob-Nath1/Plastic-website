import React from 'react'
import AuthForm from '../components/AuthForm'
import { api, safeCall } from '../services/api'
import { useNavigate } from 'react-router-dom'


export default function Login({ onLogin }) {

const navigate = useNavigate()

async function handleSubmit(values) {
  try {
    const response = await api.post('/auth/login', values)

    const data = response.data.user

    console.log("LOGIN SUCCESS:", data)

    onLogin(data)

    navigate('/user')

  } catch (err) {
    console.error("LOGIN ERROR:", err)
  }
}


return (
<div className="max-w-md mx-auto bg-white p-6 rounded shadow">
<h2 className="text-xl font-semibold mb-4">Login</h2>
<AuthForm mode="login" onSubmit={handleSubmit} />
</div>
)
}