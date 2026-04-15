
import React, { useState } from 'react'
import { api, safeCall } from '../services/api'


export default function CollectionForm({ userId, onRecorded }) {
const [kg, setKg] = useState('')
const [note, setNote] = useState('')


async function submit(e) {
e.preventDefault()
const payload = { userId, kg: parseFloat(kg) || 0, note, date: new Date().toISOString() }
const data = await safeCall(() => api.recordCollection(payload), { id: 'local-c-'+Date.now(), ...payload })
onRecorded(data)
setKg('')
setNote('')
}


return (
<form onSubmit={submit} className="space-y-3">
<div>
<label className="block text-sm">Kilograms</label>
<input value={kg} onChange={e=>setKg(e.target.value)} className="w-full border p-2 rounded" type="number" step="0.1" min="0" required />
</div>
<div>
<label className="block text-sm">Note (optional)</label>
<input value={note} onChange={e=>setNote(e.target.value)} className="w-full border p-2 rounded" />
</div>
<button className="px-4 py-2 bg-green-600 text-white rounded">Record</button>
</form>
)
}


