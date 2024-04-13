'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image';
import { useAppSelector } from '@/lib/hooks';


export default function NavBar() {
    const pathname = usePathname();
    const updates = useAppSelector((state) => state.updates);

    return (
        <nav className='flex justify-between rounded-xl p-4 shadow-[rgba(0,0,15,0.3)_0px_-5px_40px_-10px]'>
            <Link href="/forums" className='flex items-center justify-between flex-col'><Image src='HomeButton.svg' className='max-h-4' alt="" width={32} height={32} /><p className='text-[10px]'>Forums</p>{(pathname == "/forums" || pathname == "/") && <Image src='SelectedTabBar.svg' alt="" width={32} height={32} />}</Link>
            <div className='flex items-center gap-2'>
                <Link href="/updates" className='flex items-center justify-between flex-col'>
                    <div>
                        <Image src='UpdatesButton.svg' className='max-h-4' alt="" width={32} height={32} />
                        {updates.filter(update => update.isEmergency).length > 0 && pathname !== "/updates" && <Image src="Ellipse.svg" className="absolute ml-6 mt-[-18px] max-w-1.5" alt="" width={112} height={112} />}
                    </div>
                    <p className='text-[10px]'>Updates</p>
                    {pathname == "/updates" && <Image src='SelectedTabBar.svg' alt="" width={32} height={32} />}
                </Link>
            </div>
            <Link href="/guidance" className='flex items-center justify-between flex-col'><Image src='GuidanceButton.svg' className='max-h-4' alt="" width={32} height={32} /><p className='text-[10px]'>Guidance</p>{pathname == "/guidance" && <Image src='SelectedTabBar.svg' alt="" width={32} height={32} />}</Link>
            <Link href="/profile" className='flex items-center justify-between flex-col'><Image src='ProfileButton.svg' className='max-h-4' alt="" width={32} height={32} /><p className='text-[10px]'>Profile</p>{pathname == "/profile" && <Image src='SelectedTabBar.svg' alt="" width={32} height={32} />}</Link>
        </nav>
    );
}