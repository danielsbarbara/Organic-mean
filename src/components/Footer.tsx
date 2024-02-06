import { Link } from "react-router-dom";
import { FooterItem } from "./FooterItem";
import { FooterMenu } from "./FooterMenu";
import { Logo } from "./Logo";
import { toLocalTranslation } from "../i18n/toLocalTranslation";

export function Footer() {
  return (
    <div className="flex justify-around md:gap-44 w-full md:h-[150px] h-32 bg-darkTransparent">
      <div className="p-1 flex flex-col justify-center mt-2">
        <FooterMenu title={toLocalTranslation("footer_title_1")} />
        <div className="gap-2">
          {/* # para por na mesma página */}

          <Link to={"/aboutme"}>
            <FooterItem title={toLocalTranslation("footer_title_1_item_1")} />
          </Link>

          <Link to={"/products"}>
            <FooterItem title={toLocalTranslation("footer_title_1_item_2")} />
          </Link>

          <Link to={"/contacts"}>
            <FooterItem title={toLocalTranslation("footer_title_1_item_3")} />
          </Link>
        </div>
      </div>

      <div className=" flex justify-center  flex-col  items-center opacity-50">
        <Logo />
      </div>

      <div className="p-1 flex flex-col items-center mt-2 md:mt-5 ">
        <FooterMenu title={toLocalTranslation("footer_title_2")} />
        <div className="flex flex-wrap md:flex-nowrap w-16 md:w-32 mt-2 gap-2">
          <a href="https://www.whatsapp.com/">
            <img
              className="w-7 h-8 md:w-[40px] md:h-[40px]"
              src="./icons/WhatsAppLogo.svg"
              alt="WhatsApp"
            />
          </a>
          <a href="https://www.gmail.com/">
            <img
              className=" w-7 h-8 md:w-[50px] md:h-[40px] "
              src="./icons/EmailLogo.svg"
              alt="Email"
            />
          </a>
          <a href="https://www.instagram.com/">
            <img
              className=" w-7 h-8 md:w-[40px] md:h-[40px] "
              src="./icons/InstagramLogo.svg"
              alt="Instagram"
            />
          </a>
          <a href="https://www.etsy.com/">
            <img
              className="w-6 h-8 md:w-[65px] md:h-[40px]"
              src="./icons/EtsyLogo.svg"
              alt="Etsy"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
