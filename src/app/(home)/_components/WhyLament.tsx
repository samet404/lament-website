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
        <div className={cn('flex w-[50rem] flex-row-reverse items-center justify-between', {
            'flex-row': direction === 0,
        })}>
            <div className='flex flex-col gap-4 max-w-[40rem]'>
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