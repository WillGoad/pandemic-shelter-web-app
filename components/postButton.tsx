import { colourPalette } from "@/utils/enums";
import { shortenString } from "@/utils/strings";

type PostButtonProps = {
    title: string;
    date: string;
    colour: colourPalette;
}

const PostButton = ({title, date, colour}: PostButtonProps) => {
    return (
        <button className={`flex justify-between items-center w-full ${colour} py-2 pl-4 pr-2 rounded-xl`}>
            <p className="text-xs">{shortenString(title,23)}</p>
            <p className="font-extralight text-slate-500 text-[8px]">{date}</p>
        </button>
    );
}

export default PostButton;