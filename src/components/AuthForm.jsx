import React, { useState } from 'react'

export default function AuthForm({ mode = 'login', onSubmit }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  })

  function change(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    console.log("FORM SUBMITTED")

    if (onSubmit) {
      await onSubmit(form)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      {mode === 'register' && (
        <div>
          <label className="block text-sm">
            Full name
          </label>

          <input
            name="name"
            value={form.name}
            onChange={change}
            className="w-full border p-2 rounded"
          />
        </div>
      )}

      <div>
        <label className="block text-sm">
          Email
        </label>

        <input
          name="email"
          type="email"
          value={form.email}
          onChange={change}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block text-sm">
          Password
        </label>

        <input
          name="password"
          type="password"
          value={form.password}
          onChange={change}
          className="w-full border p-2 rounded"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-blue-600 text-white rounded cursor-pointer"
      >
        {mode === 'register' ? 'Create account' : 'Login'}
      </button>

    </form>
  )
}