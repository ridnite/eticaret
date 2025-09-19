import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { users } from '@/data/users'

interface User {
  id: number
  name: string
  email: string
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => boolean
  logout: () => void
  isLoading: boolean
  setLoading: (loading: boolean) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      
      login: (email, password) => {
        const foundUser = users.find(u => u.email === email && u.password === password)
        if (foundUser) {
          const { password: _, ...userWithoutPassword } = foundUser
          set({ 
            user: userWithoutPassword, 
            isAuthenticated: true 
          })
          return true
        }
        return false
      },
      
      logout: () => set({ 
        user: null, 
        isAuthenticated: false 
      }),
      
      setLoading: (loading) => set({ isLoading: loading }),
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ 
        user: state.user, 
        isAuthenticated: state.isAuthenticated 
      }),
    }
  )
)