'use client'

import { columns, Course } from '@/app/tool/columns'
import { DataTable } from '@/app/tool/data-table'
import LoginForm from '@/app/tool/_components/LoginForm'
import { getCourses } from '@/app/tool/action'
import { Button } from '@/components/ui/button'
import { getCookie } from 'cookies-next'
import { useState } from 'react'

const Tool = () => {
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(false)

  const handleGetCourses = async () => {
    const token = getCookie('token')

    if (!token) {
      console.error('Token is not found')
      return
    }

    setLoading(true)
    await getCourses(token).then((response) => {
      if (response.isSuccess) {
        setCourses(response.data.ds_nhom_to)
      } else {
        console.error(response.message)
      }

      setLoading(false)
    })
  }

  return (
    <section className='flex justify-center items-center overflow-y-auto py-8'>
      <div className='container mx-auto flex flex-col justify-center items-center'>
        <div className='w-full flex flex-col items-center justify-center gap-8'>
          <div className='w-full flex flex-col md:flex-row md:justify-between gap-8'>
            {/* Login Form */}
            <LoginForm className='flex-1' />

            {/* Course Form */}
            <div className='flex-1' />
          </div>
          <div className='flex flex-col items-end w-full gap-4'>
            <Button onClick={handleGetCourses} className='w-fit'>
              {loading ? 'Đang tải...' : 'Lấy dữ liệu'}
            </Button>
            <DataTable columns={columns} data={courses} />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Tool
