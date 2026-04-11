
import React from 'react'


export default function AdminUserList({ users = [], onApprove }) {
return (
<div className="space-y-2">
{users.map(u => (
<div key={u.id} className="p-3 border rounded flex justify-between items-center">
<div>
<div className="font-medium">{u.name}</div>
<div className="text-sm text-gray-600">Total: {u.totalKg || 0} kg</div>
</div>
<div className="flex gap-2">
<button className="px-3 py-1 bg-blue-600 text-white rounded">View</button>
<button onClick={() => onApprove(u.id)} className="px-3 py-1 bg-green-600 text-white rounded">Approve reward</button>
</div>
</div>
))}
</div>
)
}