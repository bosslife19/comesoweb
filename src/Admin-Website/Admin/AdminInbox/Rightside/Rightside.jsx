import { InboxContents } from "../SelectedContents/InboxContents";

// eslint-disable-next-line react/prop-types
const Rightside = ({ selectedItem }) => {
  const content = {
    Inbox: <InboxContents/> ,
    Starred: "Here are your Starred emails.",
    Sent: "All your Sent emails are displayed here.",
    Draft: "Your Draft emails are listed here.",
    Spam: "Check your Spam emails here.",
    Important: "Important emails are shown here.",
    Bin: "Deleted emails appear in the Bin.",
  };

  return (
    <div className=" bg-white md:m-[20px] rounded-[10px] border-[0.3px] border-[#EBEBEC] shadow-md">
      {/* <h1 className="text-[24px] font-bold mb-4">{selectedItem}</h1> */}
      <div>{content[selectedItem]}</div>
    </div>
  );
};

export default Rightside;
