'use client';
import { Task } from "@/app/page";
import SwiperCarousel from "./SwiperCarousel";
import Link from "next/link";
import Image from 'next/image';
import backgroundImage from '@/images/background-auth.jpg'
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { SITE_URL } from "@/constants";

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
          <div className="mt-[6px]">{item.name}</div>
          <button className="bg-white flex items-center text-red-600 font-bold py-[4px] px-[8px] text-[10px] rounded-[20px] border border-red-600 hover:bg-red-100 mt-[6px]">
            <ArrowDownTrayIcon className="mr-[4px] w-[16px]" />
            <span>下载</span>
          </button>
        </Link>

      )
    })
  }

  return <>
    <div className="bg-white text-red-600 px-2 py-2 w-full text-center">永久地址：{SITE_URL}</div>
    <div className='w-full h-[200px]'>
      <SwiperCarousel images={banners} />
    </div>
    <div className="pb-[140px]">
      <div className='text-[16px] font-bold text-red-600 my-[10px] mx-[10px]'>热门推荐</div>
      <div className='p-[10px] grid  grid-cols-4 gap-4'>
        {generateContent()}
      </div>
    </div>
    <div className="fixed bottom-0 w-full h-[140px]">
      <Image src={'/ad.gif'} layout="fill" objectFit="cover" alt='ad' />
    </div>
  </>
}