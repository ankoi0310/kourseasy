import React from 'react'
import { featureItems } from '@/lib/constants'
import { Card, CardContent } from '@/components/ui/card'

const Features = () => {
  return (
    <section id='features' className={'container mx-auto bg-accent'}>
      <div className={'flex flex-col items-center gap-4'}>
        <h3 className={'uppercase font-bold'}>
          Tính năng
        </h3>
      </div>
      <div className={'grid grid-cols-3 gap-4'}>
        {featureItems.map((item, index) => (
            <FeatureCard
              key={index}
              {...item}
            />
        ))}
      </div>
    </section>
  )
}

const FeatureCard = ({ title, icon, description }: FeatureItem) => {
    return (
        <Card className={'hover:shadow-card-foreground hover:-translate-y-1 duration-300'}>
            <CardContent className={'p-8'}>
                <div className={'flex flex-col gap-6'}>
                    <div className={'w-fit bg-primary p-5 rounded-lg'}>
                        {icon}
                    </div>
                    <div className={'flex flex-col gap-4'}>
                        <h6>{title}</h6>
                        <p>{description}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default Features
