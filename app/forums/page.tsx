import PostButton from "@/components/postButton";
import RectInfo from "@/components/rectInfo";
import SquareInfo from "@/components/squareInfo";
import { colourPalette } from "@/utils/enums";
import Image from "next/image";

export default function Forums() {
  return (
    <>
      <Image src="Postbox.svg" className="absolute max-w-28 ml-36 mb-16 z-[-1]" alt="" width={112} height={112}/>
      <main className="flex flex-col justify-between items-center flex basis-11/12 mx-5 my-10">

        <header className="flex self-start">
          <h1 className="font-bold">Forums</h1>
        </header>
        <section className="flex flex-col gap-4 w-full">
          <RectInfo quantity={14} unit="Posts today" colour={colourPalette.lightBlue} />
          <div className="flex justify-between">
            <SquareInfo quantity={2} unit="Replies to you" colour={colourPalette.green} />
            <SquareInfo quantity={1} unit="New Follower" colour={colourPalette.pink} />
          </div>
        </section>
        <section className="flex flex-col gap-1 w-full">
          <div className="font-medium">Latest Posts</div>
          <PostButton title="Help getting to shelter!!!" date="01-03-21" colour={colourPalette.blue} />
          <PostButton title="Does shelter support dogs?" date="28-02-21" colour={colourPalette.blue} />
          <div className="self-center text-[8px] font-semibold">See More →</div>
        </section>
      </main>
    </>
  );
}
