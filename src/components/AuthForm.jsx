import React, { useState } from 'react'


export default function AuthForm({ mode = 'login', onSubmit }) {
const [form, setForm] = useState({ name: '', email: '', password: '' })
const submitting = false


function change(e) { setForm({ ...form, [e.target.name]: e.target.value }) }


return (
<form onSubmit={(e) => { e.preventDefault(); onSubmit(form) }} className="space-y-4">
{mode === 'register' && (
<div>
<label className="block text-sm">Full name</label>
<input name="name" value={form.name} onChange={change} className="w-full border p-2 rounded" />
</div>
)}
<div>
<label className="block text-sm">Email</label>
<input name="email" type="email" value={form.email} onChange={change} className="w-full border p-2 rounded" />
</div>
<div>
<label className="block text-sm">Password</label>
<input name="password" type="password" value={form.password} onChange={change} className="w-full border p-2 rounded" />
</div>
<button disabled={submitting} className="w-full py-2 bg-blue-600 text-white rounded">{mode === 'register' ? 'Create account' : 'Login'}</button>
</form>
)
}
