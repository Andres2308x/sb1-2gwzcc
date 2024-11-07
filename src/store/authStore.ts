import { create } from 'zustand';
import { AuthState, User } from '../types/auth';

// Simulated users database
const users: User[] = [];

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async (email: string, password: string) => {
    // Simulate API call
    const user = users.find(u => u.email === email);
    if (!user) throw new Error('Invalid credentials');
    
    set({ user, isAuthenticated: true });
  },
  register: async (name: string, email: string, password: string) => {
    // Simulate API call
    if (users.some(u => u.email === email)) {
      throw new Error('Email already exists');
    }
    
    const newUser: User = {
      id: Math.random().toString(36).slice(2),
      email,
      name,
    };
    
    users.push(newUser);
    set({ user: newUser, isAuthenticated: true });
  },
  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
}));