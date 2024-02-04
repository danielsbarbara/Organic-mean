import { Link } from "react-router-dom";
import { LogoText } from "./LogoText";

interface ILogo {
  text?: string;
}

export function Logo({ text }: ILogo) {
  return (
    <>
      <div>
        <Link to={" "}>
          <div className="flex items-center">
            <img src="/icons/Logo.png" className="h-20"></img>
            {text && <LogoText description={text} />}
          </div>
        </Link>
      </div>
    </>
  );
}
