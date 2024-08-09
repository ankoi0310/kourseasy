import React from 'react'

declare module 'tailwindcss/lib/util/flattenColorPalette'

type ReadonlyProps<T> = {
    readonly [P in keyof T]: T[P]
}

type PricingItemProps = {
    title: string
    subtitle: string
    price: int
    features: string[]
}

type FeatureItemProps = {
    title: string
    icon: React.ReactElement
    description: string
}

declare global {
    type FeatureItem = ReadonlyProps<FeatureItemProps>
    type PricingItem = ReadonlyProps<PricingItemProps>
}
