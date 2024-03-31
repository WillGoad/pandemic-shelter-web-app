'use client'
import PostButton from "@/components/postButton";
import { useAppSelector } from "@/lib/hooks";
import { colourPalette } from "@/utils/enums";
import Image from "next/image";

export default function Updates() {
  const updates = useAppSelector((state) => state.updates);

  return (
    <>
      <Image src="Bell.svg" className="absolute max-w-28 ml-36 mb-16" alt="" width={112} height={112}/>
      <main className="flex flex-col justify-start gap-4 items-center flex basis-11/12 mx-4 my-10">
        <header className="flex self-start">
          <h1 className="font-bold">Updates</h1>
        </header>
        <section className="flex flex-col gap-2 w-full">
          <div className="flex items-center gap-2"><div className="font-medium text-xs">Emergency Notifications</div>{updates.filter(update => update.isEmergency).length > 0 && <Image src="Ellipse.svg" className="max-w-1.5" alt="" width={112} height={112}/>}</div>
          {updates.filter(update => update.isEmergency).map((update) => <PostButton key={update.id} title={update.title} date={update.date} colour={colourPalette.red} />)}
        </section>
        <section className="flex flex-col gap-2 w-full">
          <div className="font-medium text-xs">Real-time Shelter Updates </div>
          {updates.filter(update => !update.isEmergency).map((update) => <PostButton key={update.id} title={update.title} date={update.date} colour={colourPalette.lightBlue} />)}
        </section>
      </main>
    </>
  );
}