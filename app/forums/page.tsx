'use client'
import PostButton from "@/components/postButton";
import RectInfo from "@/components/rectInfo";
import SquareInfo from "@/components/squareInfo";
import { useAppSelector } from "@/lib/hooks";
import { colourPalette } from "@/utils/enums";
import Image from "next/image";
import { useState } from "react";

export default function Forums() {
  const [seeMore, setSeeMore] = useState(false);

  const toggleSeeMore = () => {
    setSeeMore(!seeMore);
  }

  return (
    <>
      <Image src="Postbox.svg" className="absolute max-w-28 ml-36 mb-16 z-[-1]" alt="" width={112} height={112} />
      <main className="flex flex-col justify-start items-center basis-11/12 mx-5 mt-10 max-h-[26rem]">

        <header className="flex self-start">
          <h1 className="font-bold">Forums</h1>
        </header>
        <div className="flex flex-col justify-start items-center mt-4 overflow-y-auto max-h-[calc(95%-3rem)]">
          <section className="flex flex-col gap-4 w-full">
            <RectInfo quantity={14} unit="Posts today" colour={colourPalette.lightBlue} />
            <div className="flex justify-between">
              <SquareInfo quantity={2} unit="Replies to you" colour={colourPalette.green} />
              <SquareInfo quantity={1} unit="New Follower" colour={colourPalette.pink} />
            </div>
          </section>
          <section className="flex flex-col gap-1 w-full mt-4">
            <div className="font-medium">Latest Posts</div>
            <div className="flex flex-col gap-1">
              {useAppSelector((state) => state.posts).slice(0, seeMore ? 10 : 2).map((post) => <PostButton key={post.id} title={post.title} date={post.date} colour={colourPalette.blue} />)}
            </div>
            {!seeMore && <div className="self-center text-[8px] font-semibold" onClick={toggleSeeMore}>See More →</div>}
            {seeMore && <div className="self-center text-[8px] font-semibold" onClick={toggleSeeMore}>See Less →</div>}
          </section>
        </div>
      </main>
    </>
  );
}
