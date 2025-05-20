import type { ReactNode } from 'react'
import { LeftNav } from './_components/LeftNav'

const Layout = ({
    children
}: {
    children: ReactNode
}) => {
    return (
        <div className='flex w-full h-full flex-row gap-4 bg-[#242424]'>
            <LeftNav />
            <div
                style={{
                    scrollbarWidth: 'none',
                }}
                className='font-outfit rounded-lg prose-strong:text-white grow overflow-y-scroll pt-5 prose-headings:text-white prose-a:text-[#ffffff4b] prose-code:text-[#ffffff8c] prose-code:selection:bg-[#ffffff4b]  prose prose-li:marker:text-[#ffffff] text-[#ffffffa2]'>
                {children}
            </div>
        </div>
    )
}

export default Layout
