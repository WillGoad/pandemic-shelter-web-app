'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'


export default function NavBar() {
    const pathname = usePathname();

    return (
        <nav className='flex justify-between rounded-xl p-4 shadow-[rgba(0,0,15,0.3)_0px_-5px_40px_-10px]'>
            <Link href="/forums" className='flex items-center justify-between flex-col'><img src='HomeButton.svg' className='max-h-4' /><p className='text-[10px]'>Forums</p>{(pathname == "/forums" || pathname == "/") && <img src='SelectedTabBar.svg' />}</Link>
            <Link href="/updates" className='flex items-center justify-between flex-col'><img src='UpdatesButton.svg' className='max-h-4' /><p className='text-[10px]'>Updates</p>{pathname == "/updates" && <img src='SelectedTabBar.svg' />}</Link>
            <Link href="/guidance" className='flex items-center justify-between flex-col'><img src='GuidanceButton.svg' className='max-h-4' /><p className='text-[10px]'>Guidance</p>{pathname == "/guidance" && <img src='SelectedTabBar.svg' />}</Link>
            <Link href="/profile" className='flex items-center justify-between flex-col'><img src='ProfileButton.svg' className='max-h-4' /><p className='text-[10px]'>Profile</p>{pathname == "/profile" && <img src='SelectedTabBar.svg' />}</Link>
        </nav>
    );
}