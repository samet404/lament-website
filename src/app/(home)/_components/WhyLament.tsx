import { cn } from '@/utils/cn'
import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

export const WhyLament = ({
    title,
    description,
    icon,
    direction = 1
}: {
    title: string,
    description: string,
    icon: ReactNode,
    direction: 0 | 1
}) => {
    return (
        <div className={cn('flex max-w-[50rem] p-5 gap-4 md:gap-8 flex-col-reverse md:flex-row-reverse md:items-center justify-between', {
            ' md:flex-row': direction === 0,
        })}>
            <div className='flex flex-col gap-4 max-w-[30rem]'>
                <div className='text-3xl font-sans font-semibold'>
                    {title}
                </div>
                <p>
                    {description}
                </p>
            </div>
            {icon}
        </div>
    )
}