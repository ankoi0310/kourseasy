'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Checkbox } from '@/components/ui/checkbox'

export type Course = {
  id_to_hoc: string
  ma_mon: string
  nhom_to: string
  to: string
  ds_lop: string[]
  sl_cp: number
  sl_cl: number
  tkb: string
}

export const columns: ColumnDef<Course>[] = [
  {
    accessorKey: 'id_to_hoc',
    header: '',
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: 'ma_mon',
    header: 'Mã môn'
  },
  {
    accessorKey: 'nhom_to',
    header: 'Nhóm'
  },
  {
    accessorKey: 'to',
    header: 'Tổ'
  },
  {
    accessorKey: 'ds_lop',
    header: 'Lớp'
  },
  {
    accessorKey: 'sl_cp',
    header: 'Số lượng'
  },
  {
    accessorKey: 'sl_cl',
    header: 'Còn lại'
  },
  {
    accessorKey: 'tkb',
    header: 'Thời khóa biểu'
  }
]
