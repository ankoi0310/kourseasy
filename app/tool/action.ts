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
    let message: string

    switch (response.status) {
      case 401:
        message = 'Phiên đăng nhập đã hết hạn'
        break
      case 403:
        message = 'Không thể lấy dữ liệu'
        break
      case 503:
        message = 'Hệ thống đang bảo trì'
        break
      default:
        message = response.statusText
        break
    }
    return {
      isSuccess: false,
      code: response.status,
      message: message
    }
  }

  const data = await response.json()
  return {
    isSuccess: response.ok,
    ...data
  }
}

export const registerCourse = async (token: string, courseId: string) => {
  const httpResponse = await fetch(
    `${apiEndpoint}/dkmh/w-xulydkmhsinhvien`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'filter': {
          'id_to_hoc': courseId,
          'is_checked': true
        }
      })
    }
  )

  if (!httpResponse.ok) {
    let message: string
    switch (httpResponse.status) {
      case 401:
        message = 'Phiên đăng nhập đã hết hạn'
        break
      case 403:
        message = 'Không thể đăng ký học phần'
        break
      case 503:
        message = 'Hệ thống đang bảo trì'
        break
      default:
        message = httpResponse.statusText
        break
    }
    return {
      isSuccess: false,
      message
    }
  }

  const response = await httpResponse.json()
  if (!response.data.is_thanh_cong) {
    return {
      isSuccess: false,
      message: response.data.thong_bao_loi
    }
  }

  return {
    isSuccess: true,
    message: 'Đăng ký học phần thành công'
  }
}
