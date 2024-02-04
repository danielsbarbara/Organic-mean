interface ParagraphProps {
    text: string;
    color?: 'white' | 'black';
}

export function Paragraph({ text, color = 'white' }: ParagraphProps){

    const textColorClass = color === 'white' ? 'text-white' : 'text-black';


    return (
        <>
            <p className={`p-3 ${textColorClass}`}>{text}</p>
        </>
    )
}