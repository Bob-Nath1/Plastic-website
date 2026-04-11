import { useState, useEffect } from 'react'


const STORAGE_KEY = 'pr_user'


export function useAuth() {
const [user, setUser] = useState(() => {
try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) } catch { return null }
})


useEffect(() => {
if (user) localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
else localStorage.removeItem(STORAGE_KEY)
}, [user])


const login = (userData) => setUser(userData)
const logout = () => setUser(null)


return { user, login, logout }
}