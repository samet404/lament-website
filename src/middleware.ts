import { NextResponse, type NextRequest } from 'next/server';

const middleware = async (req: NextRequest) => {
    const { pathname } = req.nextUrl
    console.log('pathname', pathname)
    if (pathname === '/docs') return NextResponse.redirect(new URL('/docs/welcome', req.url))
    return NextResponse.next()
}

export default middleware