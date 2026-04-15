import React from 'react'
import AuthForm from '../components/AuthForm'
import { api, safeCall } from '../services/api'


export default function Register({ onRegister }) {
async function handleSubmit(values) {
const data = await safeCall(() => api.register(values), { id: 'local-1', ...values, role: 'user' })
onRegister((data.user || data))
}


return (
<div className="max-w-lg mx-auto bg-white p-6 rounded shadow">
<h2 className="text-xl font-semibold mb-4">Register</h2>
<AuthForm mode="register" onSubmit={handleSubmit} />
</div>
)
}
