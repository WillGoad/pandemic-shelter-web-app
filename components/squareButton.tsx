import { formatNumber } from "@/utils/strings";

type SquareButtonProps = {
    description: string;
    colour: string;
}

const SquareButton = ({ description, colour }: SquareButtonProps) => {
    return (
        <div className={`flex justify-center items-center min-w-[5.3rem] w-[5.3rem] h-[4.3rem] ${colour} rounded-xl p-2`}>
            <p className="text-[10px]">{description}</p>
        </div>
    );
}

export default SquareButton;