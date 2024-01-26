'use client';
import { Task } from "@/app/page";
import SwiperCarousel from "./SwiperCarousel";
import Link from "next/link";
import Image from 'next/image';
import backgroundImage from '@/images/background-auth.jpg'

export default function MainContent({ task }: { task: Task }) {

  const banners = ['/banner1.jpg', '/banner2.jpg', '/banner3.jpg']

  const generateContent = () => {
    return task.images.map((item, index) => {
      return (
        <Link href={item.link} key={item.name + index}
          className='flex flex-col items-center justify-center'
        >
          <div style={{ width: '50px', height: '50px', position: 'relative' }}>
            <Image src={item.pic || backgroundImage} layout="fill" objectFit="cover" className='rounded-[8px]' alt={item.name} />
          </div>
          <div>{item.name}</div>
        </Link>

      )
    })
  }

  return <>
    <div className='w-full h-[200px]'>
      <SwiperCarousel images={banners} />
    </div>
    <div>
      <div className='text-[16px] font-bold text-red-600 my-[10px] mx-[10px]'>热门推荐</div>
      <div className='p-[10px] grid  grid-cols-5 gap-4'>
        {generateContent()}
      </div>
    </div>
  </>
}