import { BackButtonIcon } from "./BackIcon";
import { DropFilterText } from "./DropFilterText";
import { Paragraph } from "./Paragraph";
import { toLocalTranslation } from "../i18n/toLocalTranslation"
import { DropFilterItem } from "./DropFilterItem";



export function DropFilter() {
  return (
    <div className="animate-opacityA z-10 border-t-2 border-black border-b-2 items-center bg-white/60 w-full p-1.5 flex md:gap-4">
      <div className="flex border-t-2 border-black border-b-2">
        <DropFilterText description={toLocalTranslation("drop_filter_title")} />
      </div>

      <div className="flex gap-2 md:gap-7">
        <div className="flex flex-col-reverse justify-end items-center gap-2 md:flex-row-reverse">
          <input type="checkbox" />
          <DropFilterItem description={toLocalTranslation("drop_filter_item_1")} />
        </div>
        <div className="flex flex-col-reverse justify-end gap-2 md:flex-row-reverse items-center">
          <input type="checkbox" />
          <DropFilterItem description={toLocalTranslation("drop_filter_item_2")} />
        </div>
        <div className="flex flex-col-reverse justify-end gap-2 md:flex-row-reverse items-center">
          <input type="checkbox" />
          <DropFilterItem description={toLocalTranslation("drop_filter_item_3")} />
        </div>
        <div className="flex flex-col-reverse justify-end gap-2 md:flex-row-reverse items-center">
          <input type="checkbox" />
          <DropFilterItem description={toLocalTranslation("drop_filter_item_4")} />
        </div>
      </div>


    </div>
  );
}
