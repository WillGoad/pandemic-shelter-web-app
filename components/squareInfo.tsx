import { formatNumber } from "@/utils/strings";

type SquareInfoProps = {
    quantity: number;
    unit: string;
    colour: string;
}

const SquareInfo = ({quantity, unit, colour}: SquareInfoProps) => {
    return (
        <div className={`flex flex-col justify-center items-center w-[6.3rem] h-[6.3rem] ${colour} rounded-xl gap-2`}>
            <p className="text-4xl font-medium">{formatNumber(quantity)}</p>
            <p className="text-xs">{unit}</p>
        </div>
    );
}

export default SquareInfo;