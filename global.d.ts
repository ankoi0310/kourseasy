import React from 'react'

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

type SubjectProps = {
  ma: string
  ten: string
}

type JwtPayloadProps = {
  name: string
  principal: string
  exp: number
}

declare global {
  type PricingItem = ReadonlyProps<PricingItemProps>
  type FeatureItem = ReadonlyProps<FeatureItemProps>
  type Subject = ReadonlyProps<SubjectProps>
  type JwtPayload = ReadonlyProps<JwtPayloadProps>
}
