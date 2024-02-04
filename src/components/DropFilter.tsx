import { BackButtonIcon } from "./BackIcon";
import { DropFilterText } from "./DropFilterText";
import { Paragraph } from "./Paragraph";
import { toLocalTranslation } from "../i18n/toLocalTranslation"
import { DropFilterItem } from "./DropFilterItem";



export function DropFilter() {
  return (
    <div className=" z-10 border-t-2 border-black border-b-2 justify-self-start bg-white/60 w-full p-1.5 flex gap-4">
      <div className="flex border-t-2 border-black border-b-2">
        <DropFilterText description={toLocalTranslation("drop_filter_title")} />
      </div>
      <div>
        <div className="flex gap-2 ">
          <input type="checkbox" />
          <DropFilterItem description={toLocalTranslation("drop_filter_item_1")}/>
          <input type="checkbox" />
          <DropFilterItem description={toLocalTranslation("drop_filter_item_2")}/>
          <input type="checkbox" />
          <DropFilterItem description={toLocalTranslation("drop_filter_item_3")}/>
          <input type="checkbox" />
          <DropFilterItem description={toLocalTranslation("drop_filter_item_4")}/>
        </div>
   </div>
      
    </div>
  );
}
