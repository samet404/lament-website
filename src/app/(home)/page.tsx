import Link from 'next/link';
import { WhyLament } from './_components/WhyLament';
import { Leaf, PlugZap, Settings2, Sticker, Zap } from 'lucide-react';

const Home = () => {
  return (
    <div
      style={{
        scrollbarWidth: 'none',
        backgroundImage: 'radial-gradient(at 100% 0%, hsla(346,74%,80%,1) 0px, transparent 50%),radial-gradient(at 0% 0%, hsla(197,92%,69%,1) 0px, transparent 50%)'
      }}
      className='overflow-y-scroll w-full h-full bg-[#212121]'>
      <div className="flex w-full flex-col items-center pt-40 gap-40">
        <div className='flex items-center justify-center flex-col gap-10'>
          <div className='flex flex-col gap-2 items-center justify-center'>
            <div className='text-[5rem] bg-gradient-to-r drop-shadow-[0_0px_5px_rgba(255,255,255,0.55)] from-[#f2a7b8] via-white to-[#68cef9] inline-block text-transparent bg-clip-text font-outfit'>Lament</div>
            <div className='text-2xl font-outfit max-w-[40rem]'>
              <span className='text-[#f0acbe]'>L</span>efty <span className='text-[#f0acbe]'>A</span>pplication, <span className='text-[#f0acbe]'>M</span>odification, <span className='text-[#82d3f8]'>E</span>diting and <span className='text-[#82d3f8]'>N</span>otification <span className='text-[#82d3f8]'>T</span>ool
            </div>
            <div className='text-1xl font-outfit max-w-[40rem] text-center'>
              LAMENT is a simple command line utility that edits system configuration files in a declarative manner. While providing declarativity, it also respects external changes made to the config files and integrates them to the declarative config.
            </div>
          </div>
          <div className='flex flex-row gap-4 items-center drop-shadow-[0_0px_2px_rgba(255,255,255,0.55)]'>
            <Link href={''} className='from-[#84d4f9] to-[#e79fb2] bg-gradient-to-tr  text-black font-outfit text-[1.2rem] py-2 px-5 rounded-full'>
              Go to docs
            </Link>
            <Link href={''} className='from-black to-gray-600  bg-gradient-to-tr  text-white font-outfit text-[1.2rem] py-2 px-5 rounded-full'>
              Give us a star ⭐️
            </Link>
          </div>
        </div>

        <div className='flex flex-col items-center w-full py-20 gap-20'>
          <WhyLament
            title='Easy to use'
            description='NixOS, Ansible, and a number of other programs provide various ways to configure a system declaratively. However, these programs either break or override when a config file under their responsibility is edited manually. This causes a lot of issues while troubleshooting because a huge amount of tutorials, forum posts, manual pages, GitHub issue comments, and even LLM generated answers involve direct editing of config files.'
            icon={<Leaf className='size-20 text-[#de9aac]' />}
            direction={0}
          />
          <WhyLament
            title='Easy to use'
            description='NixOS, Ansible, and a number of other programs provide various ways to configure a system declaratively. However, these programs either break or override when a config file under their responsibility is edited manually. This causes a lot of issues while troubleshooting because a huge amount of tutorials, forum posts, manual pages, GitHub issue comments, and even LLM generated answers involve direct editing of config files.'
            icon={<Settings2 className='size-20 text-[#de9aac]' />}
            direction={1}
          />
          <WhyLament
            title='Easy to use'
            description='NixOS, Ansible, and a number of other programs provide various ways to configure a system declaratively. However, these programs either break or override when a config file under their responsibility is edited manually. This causes a lot of issues while troubleshooting because a huge amount of tutorials, forum posts, manual pages, GitHub issue comments, and even LLM generated answers involve direct editing of config files.'
            icon={<Sticker className='size-20 text-[#de9aac]' />}
            direction={0}
          />
        </div>
      </div>
      <footer>

      </footer>
    </div>
  )
}

export default Home
