import { useState } from "react";
import LeftBoard from "./Leftside/LeftBoard"
import Rightside from "./Rightside/Rightside";
 
 
export const Inboxcontainer = () => {
  const [selectedItem, setSelectedItem] = useState("Inbox");


  return (
    <div className=" w-full">
    <h3 className="text-[#202224] font-nunito text-[32px] leading-[43.65px] tracking-[0.11px] pb-[30px]">Inbox</h3>
      <div className="md:flex ">
      <div className="md:w-[300px]">
      <LeftBoard onSelect={(item) => setSelectedItem(item)} />
      </div>
      <div className="flex-1">
      <Rightside selectedItem={selectedItem} />
      </div>
    </div>
    </div>
  )
}
