// Lightweight axios wrapper + mock fallback for local dev
import axios from 'axios'



const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000/api'


const client = axios.create({ baseURL: API_BASE, timeout: 10000 })


// Example endpoints used by frontend
export const api = {
register: (payload) => client.post('/auth/register', payload),
login: (payload) => client.post('/auth/login', payload),
getUser: (id) => client.get(`/users/${id}`),
recordCollection: (payload) => client.post('/collections', payload),
getCollectionsForUser: (userId) => client.get(`/users/${userId}/collections`),
getRewardsForUser: (userId) => client.get(`/users/${userId}/rewards`),
requestPickup: (payload) => client.post('/pickups', payload),
adminListUsers: () => client.get('/admin/users'),
adminApproveReward: (userId) => client.post(`/admin/rewards/${userId}/approve`),
reportSummary: (params) => client.get('/reports/summary', { params }),
}

// A simple mock helper used when API fails (local dev)
export async function safeCall(fn, fallback) {
try {
const res = await fn()
return res.data
} catch (err) {
console.error(err)
return fallback
}
}
