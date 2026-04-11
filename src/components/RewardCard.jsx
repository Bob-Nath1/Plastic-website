import React from 'react'


export default function RewardCard({ title, threshold, description }) {
return (
<div className="border p-3 rounded mb-3">
<div className="flex justify-between items-start">
<div>
<h4 className="font-medium">{title}</h4>
<p className="text-sm text-gray-600">{description}</p>
</div>
<div className="text-sm font-semibold">{threshold} kg</div>
</div>
<div className="mt-3 text-xs text-gray-500">Rewards are distributed every 3–4 months; admin will notify via email.</div>
</div>
)
}
