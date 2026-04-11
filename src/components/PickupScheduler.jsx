import React, { useState } from 'react'
import { api, safeCall } from '../services/api'


export default function PickupScheduler({ user }) {
const [date, setDate] = useState('')
const [note, setNote] = useState('')
const [status, setStatus] = useState(null)


async function handle(e) {
e.preventDefault()
const payload = { userId: user.id, date, note }
const data = await safeCall(() => api.requestPickup(payload), { id: 'mock-pickup-'+Date.now(), ...payload })
setStatus('requested')
}


return (
<div className="mt-3">
<form onSubmit={handle} className="space-y-2">
<input type="date" value={date} onChange={e=>setDate(e.target.value)} className="w-full border p-2 rounded" required />
<input placeholder="Notes" value={note} onChange={e=>setNote(e.target.value)} className="w-full border p-2 rounded" />
<button className="w-full py-2 mt-1 bg-yellow-600 text-white rounded">Request Pickup</button>
</form>
{status === 'requested' && <div className="mt-2 text-sm text-green-600">Pickup requested — admin will confirm.</div>}
</div>
)
}