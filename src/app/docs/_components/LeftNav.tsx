import Link from 'next/link'

export const LeftNav = () => {
    return (
        <div
            style={{
                scrollbarWidth: 'thin',
            }}
            className='flex flex-col h-full w-[14rem] drop-shadow-[0_0px_3px_rgba(255,255,255,1)] p-3 bg-[#f1a9bb]  overflow-y-scroll'>
            <NavGroup title='Getting Started' />
            <NavItem title='Welcome' href='/docs/welcome' />
            <Divider />
        </div>
    )
}

const NavItem = ({ title, href }: { title: string, href: string }) => {
    return (
        <Link href={href} className='flex flex-row hover:opacity-65 hover:underline items-center text-[1.1rem] text-black font-outfit gap-4 cursor-pointer'>
            {title}
        </Link>
    )
}

const NavGroup = ({ title }: { title: string }) => {
    return (
        <div className='flex flex-col gap-2 text-[1.4rem] font-semibold text-black font-outfit'>
            {title}
        </div>
    )
}

const Divider = () => {
    return (
        <div className='py-5' />
    )
}