import { formatNumber } from "@/utils/strings";
import Image from "next/image";

type RectInfoProps = {
    quantity: number;
    unit: string;
    colour: string;
}

const RectInfo = ({ quantity, unit, colour }: RectInfoProps) => {
    return (
        <div>

            <div className={`flex justify-end items-center w-full h-[6.2rem] ${colour} rounded-xl gap-1 px-1`}>
                <div className="flex flex-col justify-center items-center gap-2">
                    <p className="text-5xl font-medium">{formatNumber(quantity)}</p>
                    <p className="text-xs">{unit}</p>
                </div>
                <Image src={"Chart.svg"} alt="" width={112} height={112} />
            </div>
        </div>
    );
}

export default RectInfo;