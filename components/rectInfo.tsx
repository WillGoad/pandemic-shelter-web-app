import { formatNumber } from "@/utils/strings";

type RectInfoProps = {
    quantity: number;
    unit: string;
    colour: string;
}

const RectInfo = ({quantity, unit, colour}: RectInfoProps) => {
    return (
        <div className={`flex flex-col justify-center items-center w-full h-[6.2rem] ${colour} rounded-xl gap-2`}>
            <p className="text-5xl font-medium">{formatNumber(quantity)}</p>
            <p className="text-xs">{unit}</p>
        </div>
    );
}

export default RectInfo;