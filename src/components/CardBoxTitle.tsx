import { Paragraph } from "./Paragraph";

interface infoType {
  namePt: string | undefined;
  nameEng: string | undefined;
}

export function CardBoxTitle({ namePt, nameEng }: infoType) {
  return (
    <>
      <div className=" border-[1px] border-white/50 h-9 md:w-full md:h-[3.75rem]">
        <div className="  bg-black bg-opacity-60 absolute border-[1px] border-white/50 h-9 w-28 rotate-3 md:w-full md:h-[3.75rem]" />
        <div className=" absolute -translate-y-3 text-xs w-28 h-auto text-center md:text-lg md:w-full md:h-[3.75rem]">
          <Paragraph text={namePt} color="white" />
        </div>
        <div className="absolute border-[1px] border-white/50 h-9 w-28 -rotate-3 md:w-full md:h-[3.75rem]" />
      </div>
    </>
  );
}
