'use client'

import { DataTable } from '@/app/tool/_components/DataTable'
import LoginForm from '@/app/tool/_components/LoginForm'
import { deleteCookie, getCookie } from 'cookies-next'
import React, { useEffect, useState } from 'react'
import { decodeToken, isTokenExpired } from '@/lib/utils'
import { columns, Course } from '@/app/tool/_components/Columns'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import {
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable, VisibilityState
} from '@tanstack/react-table'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { getCourses, registerCourse } from '@/app/tool/action'

type RegisterResult = {
  result: 'success' | 'error' | 'registering'
  message: string
}

const Tool = () => {
  const { toast } = useToast()

  const [loading, setLoading] = useState(false)
  const [loggedInUser, setLoggedInUser] = useState<JwtPayload | null>(null)
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
  const [data, setData] = useState<Course[]>([])
  const [registerResults, setRegisterResults] = useState<Map<string, RegisterResult>>(new Map())

  useEffect(() => {
    const token = getCookie('token')
    if (token) {
      setLoggedInUser(decodeToken(token))
    }
  }, [])

  const table = useReactTable({
    data,
    columns,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      columnFilters,
      columnVisibility,
      rowSelection
    }
  })

  const handleGetCourses = async () => {
    const token = getCookie('token')

    if (!token) {
      toast({
        variant: 'destructive',
        title: 'Chưa đăng nhập',
        description: 'Vui lòng đăng nhập để lấy dữ liệu'
      })
      return
    }

    if (isTokenExpired(token)) {
      toast({
        variant: 'destructive',
        title: 'Phiên đăng nhập đã hết hạn',
        description: 'Vui lòng đăng nhập lại'
      })
      return
    }

    setLoading(true)
    const response = await getCourses(token)
    if (response.isSuccess) {
      setData(response.data.ds_nhom_to)
      toast({
        description: 'Lấy dữ liệu thành công'
      })
    } else {
      if (response.code == 401 || response.code == 403) {
        deleteCookie('token')
        setLoggedInUser(null)
      }
      toast({
        variant: 'destructive',
        title: 'Lấy dữ liệu thất bại',
        description: response.message
      })
    }
    setLoading(false)
  }

  const handleRegisterCourse = async (courseId: string) => {
    registerResults.set(courseId, { result: 'registering', message: 'Đang đăng ký...' })
    setRegisterResults(new Map(registerResults))
    const token = getCookie('token')

    if (!token) {
      toast({
        variant: 'destructive',
        title: 'Chưa đăng nhập',
        description: 'Vui lòng đăng nhập để đăng ký môn học'
      })
      registerResults.set(courseId, { result: 'error', message: '' })
      setRegisterResults(new Map(registerResults))
      return
    }

    if (isTokenExpired(token)) {
      toast({
        variant: 'destructive',
        title: 'Phiên đăng nhập đã hết hạn',
        description: 'Vui lòng đăng nhập lại'
      })
      registerResults.set(courseId, { result: 'error', message: '' })
      setRegisterResults(new Map(registerResults))
      return
    }

    const response = await registerCourse(token, courseId)
    registerResults.set(courseId, { result: response.isSuccess ? 'success' : 'error', message: response.message })
    setRegisterResults(new Map(registerResults))
  }

  return (
    <section className='overflow-y-auto py-8'>
      <div className='container mx-auto space-y-8'>
        <div className='flex flex-col gap-4'>
          <p>
            Tên sinh viên: <span className='font-bold'>{loggedInUser?.name}</span>
          </p>
          <p>
            Trạng thái: <span className='font-bold'>{loggedInUser ? 'Đã đăng nhập' : 'Chưa đăng nhập'}</span>
          </p>
        </div>
        <div className='w-full flex flex-col md:flex-row md:justify-between gap-8'>
          {/* Login Form */}
          <LoginForm className='flex-1' setLoggedInUser={setLoggedInUser} />

          {/* Course Form */}
          <div className='flex-1' />
        </div>
        <div className='w-full'>
          <div className='flex items-center py-4 gap-4'>
            <Input
              placeholder='Tìm kiếm môn học...'
              value={(table.getColumn('ma_mon')?.getFilterValue() as string) ?? ''}
              onChange={(event) =>
                table.getColumn('ma_mon')?.setFilterValue(event.target.value)
              }
              className='max-w-sm'
            />

            <Button onClick={handleGetCourses} className='w-fit'>
              {loading ? 'Đang tải...' : 'Lấy dữ liệu'}
            </Button>
          </div>
          <DataTable table={table} />
          <div className='flex items-center justify-end space-x-2 py-4'>
            <div className='flex-1 text-sm text-muted-foreground'>
              {table.getFilteredSelectedRowModel().rows.length} of{' '}
              {table.getFilteredRowModel().rows.length} row(s) selected.
            </div>
            <div className='space-x-2'>
              <Button
                variant='outline'
                size='sm'
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Previous
              </Button>
              <Button
                variant='outline'
                size='sm'
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <p className='text-lg'>
            Danh sách môn học đã chọn
          </p>
          <Table className='border'>
            <TableHeader>
              <TableRow>
                <TableHead className='text-center'>Mã môn</TableHead>
                <TableHead className='text-center'>
                  Nhóm
                </TableHead>
                <TableHead className='text-center'>
                  Tổ
                </TableHead>
                <TableHead className='text-center'>
                  Thời khóa biểu
                </TableHead>
                <TableHead className='text-center'>
                  Phản hồi
                </TableHead>
                <TableHead className='text-center'>
                  Thao tác
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {table.getSelectedRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className='text-center'>{row.getValue('ma_mon')}</TableCell>
                  <TableCell className='text-center'>{row.getValue('nhom_to')}</TableCell>
                  <TableCell className='text-center'>{row.getValue('to')}</TableCell>
                  <TableCell>{row.getValue('tkb')}</TableCell>
                  <TableCell>
                    {registerResults.get(row.original.id_to_hoc)?.message}
                  </TableCell>
                  <TableCell className='text-center'>
                    <Button
                      variant='accent'
                      size='sm'
                      onClick={() => handleRegisterCourse(row.original.id_to_hoc)}
                    >
                      Đăng ký
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  )
}
export default Tool
