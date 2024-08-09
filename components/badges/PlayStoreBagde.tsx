import Image from 'next/image'
import React from 'react'
import { Link } from 'react-scroll'
import { handlePrevent } from '@/lib/utils'

const PlayStoreBagde = () => {
  return (
    <Link
      to='https://play.google.com/store/apps/details?id=it.cwk.enlu'
      onClick={() => handlePrevent}
    >
      <Image
        alt='Tải nội dung trên Google Play'
        src='https://play.google.com/intl/en_us/badges/static/images/badges/vi_badge_web_generic.png'
        width={200}
        height={80}
        className={'object-cover'}
      />
    </Link>
  )
}

export default PlayStoreBagde
