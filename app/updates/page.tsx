import PostButton from "@/components/postButton";
import { colourPalette } from "@/utils/enums";

export default function Updates() {
  return (
    <>
      <img src="Bell.svg" className="absolute max-w-28 ml-36 mb-16" />
      <main className="flex flex-col justify-start gap-4 items-center flex basis-11/12 mx-5 my-10">

        <header className="flex self-start">
          <h1 className="font-bold">Updates</h1>
        </header>
        <section className="flex flex-col gap-2 w-full">
          <div className="flex items-center gap-2"><div className="font-medium text-xs">Emergency Notifications</div><img src="Ellipse.svg" className="max-w-1.5" /></div>
          <PostButton title="Exposure Alert" date="20-01-21" colour={colourPalette.red} />
        </section>
        <section className="flex flex-col gap-2 w-full">
          <div className="font-medium text-xs">Real-time Shelter Updates </div>
          <PostButton title="New Quarantine Protocol" date="28-02-21" colour={colourPalette.lightBlue} />
          <PostButton title="Incident Report 25-02-21" date="25-02-21" colour={colourPalette.lightBlue} />
          <PostButton title="Incident Report 01-03-21" date="01-03-21" colour={colourPalette.lightBlue} />
        </section>
      </main>
    </>
  );
}