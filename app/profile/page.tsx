'use client'
import RectButton from "@/components/rectButton";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { colourPalette } from "@/utils/enums";
import Image from "next/image";
import { setLanguage } from "@/lib/features/languages/languagesSlice";

export default function Profile() {
  const languages = useAppSelector((state) => state.languages);
  const feedback = useAppSelector((state) => state.feedback);

  const dispatch = useAppDispatch();

  return (
    <>
      <Image src="House.svg" className="absolute max-w-28 ml-36 mb-16" alt="" width={112} height={112} />
      <main className="flex flex-col gap-4 items-center flex basis-11/12 mx-5 my-10">

        <header className="flex self-start">
          <h1 className="font-bold">Profile</h1>
        </header>
        <section className="flex flex-col gap-2 w-full">
          <div className="font-medium text-xs">Language</div>
          <div className="flex gap-2 overflow-x-auto">
            {languages.languageOptions.map((language) => <RectButton key={language} onClick={() => dispatch(setLanguage(language))} description={language} colour={languages.currentLanguage === language ? colourPalette.blue : colourPalette.gray} />)}
          </div>
        </section>
        <section className="flex flex-col gap-2 w-full">
          <div className="font-medium text-xs">Feedback</div>
          <div className="flex gap-2 overflow-x-auto">
            <RectButton key="GiveFeedbackButton" description="Give Feedback" colour={colourPalette.green} />
            {feedback.map((feedback) => <RectButton key={feedback.id} description={feedback.title} colour={colourPalette.gray} />)}
          </div>
        </section>
        <div className="self-center text-[8px] font-semibold mt-16">Log out →</div>
      </main>
    </>
  );
}