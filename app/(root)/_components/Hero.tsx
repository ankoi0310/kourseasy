'use client'

import { Button } from '@/components/ui/button'
import { Link } from 'react-scroll'
import React from 'react'
import { ArrowRightCircle, CircleDollarSign } from 'lucide-react'

const Hero = () => {
  return (
    <section id={'home'} className={'bg-accent'}>
      <div className='container mx-auto'>
        <div className='min-h-screen flex justify-between items-center gap-12'>
          <div className={'flex-1 flex flex-col justify-center gap-8'}>
            <h3 className={'h3 font-bold drop-shadow-md'}>
              Giải pháp đăng ký môn học tự động
            </h3>
            <h6>
              Dành cho sinh viên Đại học Nông Lâm TP.HCM
            </h6>
            <div className={'flex flex-row gap-4'}>
              <Button className={'flex items-center justify-center gap-2 p-6'}>
                <p className='font-bold'>
                  Sử dụng
                </p>
                <ArrowRightCircle className={'w-5 h-5'} />
              </Button>
              <Link
                  to={'pricing'}
                  spy
                  smooth
                  duration={300}
              >
                <Button className={'flex items-center justify-center gap-2 p-6'}>
                  Bảng giá
                  <CircleDollarSign className={'w-5 h-5'} />
                </Button>
              </Link>
            </div>
          </div>

          <div className='flex-1 items-start'>image</div>
        </div>
      </div>
    </section>
  )
}
export default Hero
