import Bussiness from "../../../../Screens/Website/Kyc/Bussiness";
import Finanicial from "../../../../Screens/Website/Kyc/Finanicial";
import Operational from "../../../../Screens/Website/Kyc/Operational";
import Regulatory from "../../../../Screens/Website/Kyc/Regulatory";
import Technical from "../../../../Screens/Website/Kyc/Technical";
 
const Rightside = ({ selectedItem, menuItems,handleNext  }) => {
  const pages = {
    "Regulatory Requirements": {
      div: <Regulatory handleNext={handleNext} />,
    },
    "Technical Requirements": {
       div: <Technical  handleNext={handleNext} />, 
     },
    "Operational Requirements": {
      div: <Operational handleNext={handleNext} />
    },
    "Financial Requirements": {
      div: <Finanicial handleNext={handleNext} />
    },
    "Business Documentation": {
       div: <Bussiness handleNext={handleNext}/>
    },
  };

  // Default to "Regulatory Requirements" if no item is selected
  const currentPage = pages[selectedItem] || pages["Regulatory Requirements"];

  return (
    <div className="p-5 bg-white rounded-md ">
      <h2 className="text-[24px] font-nunito font-bold text-[#202224] mb-4">
        {selectedItem}
      </h2>
      <div className="text-[#555] mb-4">{currentPage.div}</div>
    </div>
  );
};

export default Rightside;
