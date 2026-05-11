import { useState, useEffect } from 'react'


const STORAGE_KEY = 'pr_user'


export function useAuth() {
const [user, setUser] = useState(null)

const login = (userData) => setUser(userData)
const logout = () => setUser(null)


return { user, login, logout }
}