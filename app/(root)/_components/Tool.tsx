'use client'

import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { cn } from '@/lib/utils'
import { ArrowRightCircle } from 'lucide-react'
import React from 'react'
import PlayStoreBagde from '@/components/badges/PlayStoreBagde'
import AppStoreBagde from '@/components/badges/AppStoreBagde'

const Tool = () => {
  const { toast } = useToast()
  
  const handleDownload = () => {
    toast({
      className: cn('my-1'),
      variant: 'destructive',
      duration: 1500,
      // @ts-ignore
      title: (
        <p>
          Thông báo
        </p>
      ),
      description: (
        <p>
          Chức năng này đang được phát triển.
        </p>
      ),
    })
  }
  
  return (
    <section id={'tool'} className='container mx-auto'>
      <div className={'flex flex-col items-center gap-4'}>
        <h3 className={'uppercase text-primary font-bold'}>
          Công cụ
        </h3>
        <p>
          Bạn có thể sử dụng trực tiếp trên trang web hoặc tải về thiết bị của bạn
        </p>
      </div>
      <div className={'flex flex-row justify-between gap-4'}>
        <div className={'flex flex-col items-center gap-8'}>
          <h5 className={'uppercase font-bold'}>
            Trực tuyến
          </h5>
          <Button
            className={'flex flex-row items-center justify-center gap-2 p-6 bg-foreground'}
            onClick={handleDownload}
          >
            <p>
              Sử dụng ngay
            </p>
            <ArrowRightCircle />
          </Button>
        </div>
        <div className={'flex flex-col items-center gap-8'}>
          <h5 className={'uppercase font-bold'}>
            Windows
          </h5>
          <div className={'flex flex-col gap-4'}>
            <Button
              className={'p-6 bg-foreground'}
              onClick={handleDownload}
            >
              <p>
                Tải về
              </p>
            </Button>
            <Button
              className={'p-6 bg-foreground'}
              onClick={handleDownload}
            >
              <p>
                Link dự phòng
              </p>
            </Button>
          </div>
        </div>
        <div className={'flex flex-col items-center gap-8'}>
          <h5 className={'uppercase font-bold'}>
            Thiết bị di động
          </h5>
          <div className={'flex flex-col gap-2'}>
            <PlayStoreBagde />
            <AppStoreBagde />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Tool
