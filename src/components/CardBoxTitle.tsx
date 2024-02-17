import { Paragraph } from "./Paragraph";

interface infoType {
  name: string | undefined
}

export function CardBoxTitle({ name }: infoType) {
  return (
    <>
      <div className="relative text-center border-[1px] border-white/50 h-9 md:w-full md:h-[3.75rem]">
        <div className=" bg-black bg-opacity-60 absolute text-center border-[1px] border-white/50 h-9 w-28 rotate-3 md:w-full md:h-[3.75rem]" />
        <div className="p-1 absolute w-28 text-xs h-full md:text-lg md:w-full md:h-[3.75rem]">
          <Paragraph text={name} color="white" />
        </div>
        <div className="absolute border-[1px] border-white/50 h-9 w-28 -rotate-3 md:w-full md:h-[3.75rem]" />
      </div>
    </>
  );
}
