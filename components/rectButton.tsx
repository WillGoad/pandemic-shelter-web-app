type RectButtonProps = {
    description: string;
    colour: string;
    onClick?: () => void;
}

const RectButton = ({ description, colour, onClick }: RectButtonProps) => {
    return (
        <div onClick={onClick} className={`flex justify-center items-center min-w-[6.3rem] w-[6.3rem] h-[4.3rem] ${colour} rounded-xl p-2`}>
            <p className="text-[10px]">{description}</p>
        </div>
    );
}

export default RectButton;