export const API_URL = process.env.NODE_ENV === 'production'
    ? 'https://rentgh-backend.up.railway.app/api'
    : 'http://localhost:8000/api'

export const BASE_URL = process.env.NODE_ENV === 'production'
    ? 'https://rentgh-backend.up.railway.app'
    : 'http://localhost:8000'

export const PROPERTY_AMENITIES = [
    { name: 'Toilet' },
    { name: 'Bath' },
    { name: 'Car Park' },
    { name: 'Security' },
]

export const PROPERTY_CATEGORIES = [
    { name: 'Office', id: 1 },
    { name: 'Single Room', id: 2 },
    { name: 'Apartment', id: 3 },
    { name: 'House', id: 4 },
]

export const ADDRESSES = [
    { name: 'Ghana', id: 1 },
    { name: 'Nigeria', id: 2 },
    { name: 'Togo', id: 3 },
    { name: 'Benin', id: 4 },
]

