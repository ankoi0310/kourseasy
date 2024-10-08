import type { Metadata } from 'next'
import { Be_Vietnam_Pro } from 'next/font/google'
import '../globals.css'
import { cn } from '@/lib/utils'
import React from 'react'
import { Toaster } from '@/components/ui/toaster'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PageTransition from '@/components/layout/PageTransition'

const beVietnamPro = Be_Vietnam_Pro({
    subsets: ['vietnamese'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
    title: 'Kourseasy - Đăng ký môn học dễ dàng',
    description: 'Kourseasy là nền tảng giúp sinh viên đăng ký môn học dễ dàng',
    creator: 'Code With Koi',
    keywords: [
        'Koi',
        'Code With Koi',
        'Kourseasy',
        'Kourseasy - Đăng ký môn học dễ dàng',
        'kourseasy',
        'đăng ký môn học',
        'dkmh'
    ]
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={cn(beVietnamPro.className, 'bg-background')}>
                <Header />
                {/* Loading Transition  */}
                <PageTransition>
                    {children}
                </PageTransition>
                <Footer />
                <Toaster />
            </body>
        </html>
    )
}
