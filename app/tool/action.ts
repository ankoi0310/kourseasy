'use server'

import { apiEndpoint } from '@/lib/constants'

export const login = async (username: string, password: string) => {
  const response = await fetch(
    `${apiEndpoint}/auth/login`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        username,
        password,
        'grant_type': 'password'
      })
    }
  )

  const data = await response.json()
  return {
    isSuccess: response.ok,
    ...data
  }
}

export const getCourses = async (token: string) => {
  const response = await fetch(
    `${apiEndpoint}/dkmh/w-locdsnhomto`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'additional': {
          'ordering': [
            {
              'name': '',
              'order_type': ''
            }
          ],
          'paging': {
            'limit': 8000,
            'page': 1
          }
        },
        'is_CVHT': false
      })
    }
  )

  if (!response.ok) {
    return {
      isSuccess: false,
      message: response.statusText
    }
  }

  const data = await response.json()
  return {
    isSuccess: response.ok,
    ...data
  }
}
