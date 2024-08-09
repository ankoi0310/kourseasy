import { cn } from '@/lib/utils'

const Logo = () => {
    return (
        <span className={cn(
            'text-2xl md:text-3xl lg:text-4xl font-semibold',
            'text-accent'
        )}>Kourseasy</span>
    )
}

export default Logo
