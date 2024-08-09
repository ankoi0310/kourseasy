import { handlePrevent } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { Link } from 'react-scroll'

const AppStoreBagde = () => {
  return (
    <Link
      to='https://play.google.com/store/apps/details?id=it.cwk.enlu'
      onClick={() => handlePrevent}
    >
      <Image
        alt='Tải ứng dụng trên App Store'
        src='/assets/icons/app-store.svg'
        width={200}
        height={80}
        className={'object-cover'}
      />
    </Link>
  )
}
export default AppStoreBagde
