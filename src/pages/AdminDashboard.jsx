import React, { useEffect, useState } from 'react'
import AdminUserList from '../components/AdminUserList'
import { api, safeCall } from '../services/api'


export default function AdminDashboard({ user }) {
const [users, setUsers] = useState([])


useEffect(() => {
async function load() {
const data = await safeCall(() => api.adminListUsers(), [{ id: 'u1', name: 'Demo', totalKg: 12 }])
setUsers(data)
}
load()
}, [])


return (
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<section className="col-span-2 bg-white p-6 rounded shadow">
<h2 className="text-xl font-semibold">Admin — manage users & rewards</h2>
<div className="mt-4">
<AdminUserList
  users={users}
  onApprove={async (id) => {
    await safeCall(() => api.adminApproveReward(id))
    console.log('approved user', id)
  }}
/>
</div>
</section>
<aside className="bg-white p-6 rounded shadow">
<h4 className="font-semibold">Reports</h4>
<div className="mt-3 text-sm">Quick stats and export features go here (volume by period, top contributors).</div>
</aside>
</div>
)
}
