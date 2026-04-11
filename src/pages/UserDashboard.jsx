import React, { useEffect, useState } from 'react'
import ProgressBar from '../components/ProgressBar'
import CollectionForm from '../components/CollectionForm'
import PickupScheduler from '../components/PickupScheduler'
import RewardCard from '../components/RewardCard'
import { REWARD_THRESHOLDS } from '../utils/constants'
import { api, safeCall } from '../services/api'


export default function UserDashboard({ user }) {
const [collections, setCollections] = useState([])
const totalKg = collections.reduce((s, c) => s + (c.kg || 0), 0)


useEffect(() => {
async function load() {
const data = await safeCall(() => api.getCollectionsForUser(user.id), [{ id: 'mock-1', kg: 2, date: new Date().toISOString() }])
setCollections(data)
}
load()
}, [user.id])

return (
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<section className="col-span-2 bg-white p-6 rounded shadow">
<h2 className="text-xl font-semibold">Welcome, {user.name || 'member'}</h2>
<p className="text-sm text-gray-600">Total collected: <strong>{totalKg.toFixed(2)} kg</strong></p>


<div className="mt-4">
<h4 className="font-medium">Progress toward rewards</h4>
<div className="space-y-3 mt-3">
{REWARD_THRESHOLDS.map(t => (
<div key={t}>
<div className="flex items-center justify-between text-sm mb-1"><span>Reward for {t} kg</span><span>{Math.min(100, (totalKg / t) * 100).toFixed(0)}%</span></div>
<ProgressBar value={Math.min(100, (totalKg / t) * 100)} />
</div>
))}
</div>
</div>

<div className="mt-6">
<h4 className="font-medium mb-2">Record a collection</h4>
<CollectionForm userId={user.id} onRecorded={(c) => setCollections([c, ...collections])} />
</div>


<div className="mt-6">
<h4 className="font-medium mb-2">Your past collections</h4>
<ul className="space-y-2">
{collections.map(c => (
<li key={c.id} className="p-2 bg-gray-50 rounded flex justify-between"><div>{new Date(c.date).toLocaleDateString()} — {c.kg} kg</div><div className="text-sm">{c.note || ''}</div></li>
))}
</ul>
</div>
</section>

<aside className="bg-white p-6 rounded shadow">
<h4 className="font-semibold">Pickup & Rewards</h4>
<PickupScheduler user={user} />
<div className="mt-4">
<h5 className="font-medium">Available rewards</h5>
<RewardCard title="Starter Pack" threshold={5} description="Small staple bundle" />
</div>
</aside>
</div>
)
}