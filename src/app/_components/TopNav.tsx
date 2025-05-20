import Link from 'next/link'

export const TopNav = () => {
    return (
        <div className='w-full p-4 bg-[#1f1f1f] flex items-center justify-center'>
            <Link href={'/'} className='bg-white text-black p-2 rounded-full'>
                Logo
            </Link>
        </div>
    )
}