import type { MDXComponents } from 'mdx/types'
import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import type { ComponentProps } from 'react'
import { compile } from '@mdx-js/mdx'
import rehypeStarryNight from 'rehype-starry-night'


const compileCode = async (properties: ComponentProps<'code'>) => {
    const match = /language-(\w+)/.exec(properties.className || '')

    console.log('match', match)
    return match
        ? await compile(properties.children as string, { rehypePlugins: [rehypeStarryNight] })
        : <code {...properties} />
}

export const useMDXComponents = (components: MDXComponents): MDXComponents => {

    return {
        p: (props) => <p className='break-words leading-8' {...(props)} />,

        code: (props) => compileCode(props),

        a: (props) => (
            <Link
                target='_blank'
                {...(props)}
            />
        ),
        img: (props) => (
            <Image
                sizes="(min-width: 820px) calc(16.06vw + 615px), 93.6vw"
                width={700}
                height={400}
                className='rounded-lg object-contain w-full bg-[#ffffff43]'
                {...(props as ImageProps)}
                alt='__unspecified__'
            />
        ),
        ...components,
    }
}