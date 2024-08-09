import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import React from 'react'
import { jwtDecode } from 'jwt-decode'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const handlePrevent = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  event.preventDefault()
  event.stopPropagation()
}

export const formatCurrency = (value: number) => {
  return value.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
  })
}

type JwtPayload = {
  exp: number
}

export const isTokenExpired = (token: string): boolean => {
  try {
    const decoded = jwtDecode<JwtPayload>(token)
    return Date.now() >= decoded.exp * 1000
  } catch (error) {
    return true
  }
}
