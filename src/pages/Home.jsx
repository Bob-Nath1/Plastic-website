import React from 'react'
import { Link } from 'react-router-dom'
import RewardCard from '../components/RewardCard'


export default function Home() {
return (
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<section className="col-span-2 bg-white p-6 rounded-lg shadow">
<h2 className="text-3xl text-blue-950 font-bold mb-8">Turn your plastic into rewards</h2>
<p className="mb-4 text-sm">Register, log your plastic contributions, schedule pickups, and claim periodic rewards when you reach the threshold.</p>
<Link
  to="/register"
  className="inline-block mt-3 px-4 py-2 bg-green-600 text-white font-bold rounded-tl-xl rounded-br-xl"
>
  Get Started
</Link>
<img src="/peg bottles.webp" alt="Peg bottles" />


<div className="mt-6">
<h3 className="font-medium mb-2 text-blue-950 text-lg">How it works</h3>
<ol className="list-decimal list-inside space-y-1">
<li>Register and verify your household.</li>
<li>Log plastic weights whenever you bring or have a pickup.</li>
<li>Watch your progress toward reward thresholds.</li>
<li>Redeem rewards every 3–4 months.</li>
</ol>
</div>
</section>

<aside className="bg-white p-6 rounded-lg shadow ">
<h3 className="font-semibold mb-3 text-lg text-blue-950">Sample Rewards</h3>
<RewardCard title="Grocery Pack" threshold={15} description="Rice, oil and staples" />
<RewardCard title="Household Kit" threshold={30} description="Cleaning supplies" />
</aside>
</div>
)
}