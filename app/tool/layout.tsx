import type { Metadata } from 'next'
import { Be_Vietnam_Pro } from 'next/font/google'
import '../globals.css'
import { cn } from '@/lib/utils'
import React from 'react'
import { Toaster } from '@/components/ui/toaster'
import PageTransition from '@/components/layout/PageTransition'
import { SpeedInsights } from "@vercel/speed-insights/next"

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

export default function ToolLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={cn(beVietnamPro.className, 'bg-background')}>
                <PageTransition>
                    {children}
                </PageTransition>
                <Toaster />
                <SpeedInsights />
            </body>
        </html>
    )
}
