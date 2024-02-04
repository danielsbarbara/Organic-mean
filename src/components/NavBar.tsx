import { Logo } from "./Logo";
import { NavItem } from "./NavItem";
import { toLocalTranslation } from "../i18n/toLocalTranslation";
import { Link } from "react-router-dom";
import { LanguageSwitch } from "./LanguageSwitch";

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
        <div className="flex gap-2 self-end p-3 md:self-center">
          <Link to={"/aboutme"}>
            <NavItem description={toLocalTranslation("nav_bar_title_1")} />
          </Link>
          <Link to={"/products"}>
            <NavItem description={toLocalTranslation("nav_bar_title_2")} />
          </Link>
          <Link to={"/contacts"}>
            <NavItem description={toLocalTranslation("nav_bar_title_3")} />
          </Link>
          <div className="ml-3 mb-">
            <LanguageSwitch/>
          </div>
                
        </div>
  
      </div>
    </>
  );
}
