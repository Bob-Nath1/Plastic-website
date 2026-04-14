import React from 'react'
import AuthForm from '../components/AuthForm'



export default function Login({ onLogin }) {
async function handleSubmit(values) {
const data = await safeCall(() => api.login(values), { id: 'local-1', name: 'Demo User', role: values.email === 'admin@x.com' ? 'admin' : 'user' })
onLogin(data)
}


return (
<div className="max-w-md mx-auto bg-white p-6 rounded shadow">
<h2 className="text-xl font-semibold mb-4">Login</h2>
<AuthForm mode="login" onSubmit={handleSubmit} />
</div>
)
}