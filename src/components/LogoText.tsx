interface ITextProps {
  description: string;
}

export function LogoText({ description }: ITextProps) {
  return (
    <>
      <div>
        <p className=" flex flex-wrap text-sm w-20  text-white font-cinzel text-center md:text-2xl">
          {description}
        </p>
      </div>
    </>
  );
}
