// Simulasi API calls
// Dalam production, ganti dengan axios atau fetch ke backend

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api'

// Auth
export const authAPI = {
  login: async (email, password) => {
    console.log('Login with:', email, password)
    // return await fetch(`${API_BASE_URL}/auth/login`, {...})
  },
  logout: async () => {
    console.log('Logout')
  },
  signup: async (data) => {
    console.log('Signup with:', data)
  },
}

// Drivers
export const driverAPI = {
  getAll: async () => {
    console.log('Fetching all drivers')
  },
  getOne: async (id) => {
    console.log('Fetching driver:', id)
  },
  create: async (data) => {
    console.log('Creating driver:', data)
  },
  update: async (id, data) => {
    console.log('Updating driver:', id, data)
  },
  delete: async (id) => {
    console.log('Deleting driver:', id)
  },
}

// Bookings
export const bookingAPI = {
  getAll: async () => {
    console.log('Fetching all bookings')
  },
  getOne: async (id) => {
    console.log('Fetching booking:', id)
  },
  create: async (data) => {
    console.log('Creating booking:', data)
  },
  update: async (id, data) => {
    console.log('Updating booking:', id, data)
  },
  cancel: async (id) => {
    console.log('Cancelling booking:', id)
  },
}

// Analytics
export const analyticsAPI = {
  getStats: async () => {
    console.log('Fetching analytics stats')
  },
  getReports: async (dateRange) => {
    console.log('Fetching reports:', dateRange)
  },
}
