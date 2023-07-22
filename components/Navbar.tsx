import Link from 'next/link';
import Image from 'next/image';
import { NavLinks } from '@/constants';
import AuthProviders from './AuthProviders';

const Navbar = () => {
  const session = {}
  return (
    <nav className='flexBetween navbar sticky top-0 z-50 bg-white'>
      <div className='flex-1 flexStart gap-10'>
        <Link href={'/'}>
          <Image src={'/logo.png'} width={115} height={40} alt='Logo' className='w-[115px] h-[40px]' />
        </Link>
        <ul className='xl:flex hidden text-small gap-7'>
          {NavLinks.map((nav) => (
            <Link href={nav.href} key={nav.key}>{nav.text}</Link>
          ))}
        </ul>
      </div>
      <div className='flexCenter gap-4'>
        {session ? (
          <>
          UserPhoto
          <Link href={'/create'}>Share Your Work</Link>
          </>
        ): (
          <AuthProviders />
        )}
      </div>
    </nav>
  )
}

export default Navbar