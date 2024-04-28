'use client'
import SquareButton from "@/components/squareButton";
import { useAppSelector } from "@/lib/hooks";
import { colourPalette } from "@/utils/enums";
import Image from "next/image";

export default function Guidance() {
  const shelters = useAppSelector((state) => state.shelters);
  const budget = useAppSelector((state) => state.budget);
  const pets = useAppSelector((state) => state.pets);

  return (
    <>
      <Image src="Pin.svg" className="absolute max-w-28 ml-36 mb-16" alt="" width={112} height={112} />
      <main className="flex flex-col justify-start items-center gap-4  flex basis-11/12 mx-4 mt-10  max-h-[26rem]">
        <header className="flex self-start">
          <h1 className="font-bold">Guidance</h1>
        </header>
        <div className="flex flex-col justify-start items-center gap-4 overflow-y-auto max-h-full w-full">
          <section>
            <Image src="Map.svg" alt="" width={240} height={120} />
          </section>
          <section className="flex flex-col gap-2 w-full">
          <div className="font-bold text-xs">Shelters for You</div>
            <div className="flex gap-2 overflow-x-auto">
              {shelters.filter(shelter => shelter.price < budget.budget && (pets.requiresPets === "false" || shelter.doesSupportPets === true)).map((shelter) => <SquareButton key={shelter.id} description={shelter.name} colour={colourPalette.indigo} />)}
            </div>
            <div className="font-bold text-xs">Nearest Shelters</div>
            <div className="flex gap-2 overflow-x-auto">
              {shelters.filter(shelter => shelter.distance < 10).map((shelter) => <SquareButton key={shelter.id} description={shelter.name} colour={colourPalette.indigo} />)}
            </div>
            <div className="font-bold text-xs">Cost-effective Shelters</div>
            <div className="flex gap-2 overflow-x-auto">
              {shelters.filter(shelter => shelter.price < budget.budget).map((shelter) => <SquareButton key={shelter.id} description={shelter.name} colour={colourPalette.teal} />)}
            </div>
            <div className="font-bold text-xs">Shelters with Pet Support</div>
            <div className="flex gap-2 overflow-x-auto">
            {shelters.filter(shelter => shelter.doesSupportPets === true).map((shelter) => <SquareButton key={shelter.id} description={shelter.name} colour={colourPalette.purple} />)}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}