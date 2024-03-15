import { Logo } from "./Logo";
import { NavItem } from "./NavItem";
import { toLocalTranslation } from "../i18n/toLocalTranslation";
import { Link } from "react-router-dom";
import { LanguageSwitch } from "./LanguageSwitch";
import { FooterItem } from "./FooterItem";

export function NavBar() {
  const navItemArr = [
    <NavItem description="About me" />,
    <NavItem description="Products" />,
    <NavItem description="Contacts" />,
  ];

  return (
    <>
      {/* all the other elements */}
      <div className="pl-2 pr-2 md:p-4 bg-darkTransparent h-28 flex justify-evenly items-center md:justify-between ">
        <Logo text={toLocalTranslation("landing_page_title")} />
        <div className="flex flex-col">
          <div className="flex mb-2 self-end mr-2 gap-6">
            <div className="flex flex-col items-center mt-1.5 hover:scale-110 transition-transform duration-150 ease-in-out">
              <Link to={"/FAQPage"}>
                <FooterItem title="FAQ" />
              </Link>
            </div>
            <LanguageSwitch />
          </div>
          <div className="flex gap-2 self-end justify-self-end p-2 md:self-center">
            <Link to={"/aboutme"}>
              <NavItem description={toLocalTranslation("nav_bar_title_1")} />
            </Link>
            <Link to={"/products"}>
              <NavItem description={toLocalTranslation("nav_bar_title_2")} />
            </Link>
            <Link to={"/contacts"}>
              <NavItem description={toLocalTranslation("nav_bar_title_3")} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
