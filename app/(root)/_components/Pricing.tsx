'use client'

import React from 'react'
import { pricingItems } from '@/lib/constants'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'
import { cn, formatCurrency } from '@/lib/utils'

const Pricing = () => {
    return (
        <section id={'pricing'} className={'bg-slate-200'}>
            <div className='container mx-auto'>
                <div className={'flex flex-col items-center gap-4'}>
                    <h3 className={'uppercase text-primary font-bold'}>
                        Bảng giá
                    </h3>
                    <p>
                        Hãy chọn gói phù hợp với nhu cầu sử dụng của bạn để tiết kiệm chi phí
                    </p>
                </div>
                <div className={'grid grid-cols-3 gap-x-6 gap-y-8'}>
                    {
                        pricingItems.map((item, index) => (
                            <PricingCard
                                key={index}
                                {...item}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

const PricingCard = ({ title, subtitle, price, features }: PricingItem) => {
    return (
        <Card className={'hover:shadow-xl'}>
            <CardHeader>
                <CardTitle className={'text-xl uppercase font-bold'}>
                    {title}
                </CardTitle>
                <CardDescription className={'text-md'}>
                    {subtitle}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className={'flex flex-col gap-4'}>
                    <div className={'inline-flex items-end gap-1'}>
                        <h4 className={'font-bold'}>
                        {formatCurrency(price)}
                        </h4>
                        <h5 className={'font-normal'}>
                            /
                        </h5>
                        <p className={'font-light'}>code</p>
                    </div>
                    <Button className={'w-full bg-foreground'}>
                        Mua ngay
                    </Button>
                </div>
            </CardContent>
            {
                features && (
                    <CardFooter className={'flex flex-col items-start gap-4 border-t-2 p-5'}>
                        <p className={'uppercase font-semibold'}>
                            Bao gồm những gì?
                        </p>
                        <ul className={'pricing-card__list'}>
                            {
                                features.map((feature, index) => (
                                    <li key={index}>
                                        <CheckCircle className={cn(
                                            'pricing-card__list-icon',
                                            'text-primary'
                                        )}/>
                                        <p>{feature}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </CardFooter>
                )
            }
        </Card>
    )
}

export default Pricing
