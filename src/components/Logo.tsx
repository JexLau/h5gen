import Image from 'next/image'
import logo from '@/images/logo.svg'
export function Logo(props: { className?: string }) {
  return (
    <div className='flex items-center w-[250px]'>
      <Image src={logo} alt={'Free Maps Scraper'} unoptimized  {...props} />
      <p className='text-blue-600 text-lg font-bold w-[200px] ml-4'>Free Maps Scraper</p>
    </div>
  )
}
