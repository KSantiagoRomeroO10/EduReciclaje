import { create } from 'zustand'

const UseUserStore = create((set) => ({
  user:{
    user: null,
    names: null,
    lastNames: null,
    email: null,
    phone: null,
    password: null,
    birthDate: null,
    location: null,
    role: null
  },
  updateUser: (newUser) => set((state) =>({
    user: {
      user: newUser.user !== undefined ? newUser.user : state.user.user,
      names: newUser.names !== undefined ? newUser.names : state.user.names,
      lastNames: newUser.lastNames !== undefined ? newUser.lastNames : state.user.lastNames,
      email: newUser.email !== undefined ? newUser.email : state.user.email,
      phone: newUser.phone !== undefined ? newUser.phone : state.user.phone,
      password: newUser.password !== undefined ? newUser.password : state.user.password,
      birthDate: newUser.birthDate !== undefined ? newUser.birthDate : state.user.birthDate,
      location: newUser.location !== undefined ? newUser.location : state.user.location,
      role: newUser.role !== undefined ? newUser.role : state.user.role
    }
  })),
  resetUser: () => set({
    user:{
      user: null,
      names: null,
      lastNames: null,
      email: null,
      phone: null,
      password: null,
      birthDate: null,
      location: null,
      role: null
  }})
}))

export default UseUserStore