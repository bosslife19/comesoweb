import { IoMdArrowDropup } from "react-icons/io";
import Dropdown from "../../Ul/DropDown/components/DropDown";

interface ChartBoxProps {
  title: string;
  amount: string;
  chartData: number[];
  color: string;
  description: string;
  ChartComponent: React.ComponentType<{ data: number[]; color: string }>;
}

const ChartBox: React.FC<ChartBoxProps> = ({
  title,
  amount,
  chartData,
  color,
  description,
  ChartComponent,
}) => {
  const currencyOptions = ["Net Profit", "Gross Profit"]; // Example currencies

  return (
    <div className="w-full md:w-[250px] bg-[#fff] hover:bg-[#0D54B1] cursor-pointer rounded-[8px] hover:text-white  ">
      <div className="border border-[#6B788E1F] border-opacity-10 rounded-md w-full">
        <div className="flex justify-between items-center gap-3 p-4">
          <span className="font-normal text-[16px]  hover:text-white ">
            {title}
          </span>
          {/* Conditionally render Dropdown for "Profit" only */}
          {title === "Profit" && (
            <div className="text-sm text-[#000]">
              <Dropdown
                options={currencyOptions}
                onChange={(e) => console.log("Currency Selected:", e.value)}
                value={currencyOptions[0]} // Default value: "NGN"
                placeholder="Gross Profit"
              />
            </div>
          )}
        </div>

        <div className="border-t-[1px] w-full border-gray border-opacity-10"></div>

        <div className="p-4 justify-between flex items-center w-full hover:text-white">
          <p className="text-[20px]   text-center font-[750] leading-[18px] mt-5 mb-8 ">
            NGN {amount}
          </p>
          <div className="text-[#000]">
          <ChartComponent data={chartData} color={color}  />
          </div>
        </div>

        <span className="font-normal flex items-center text-[12px] leading-[18px] pb-3 ml-[10px]  ">
          <IoMdArrowDropup size={20} color="#2FC271" />
          <span className="text-[#2FC271]">+0.00% </span>
          {description}
        </span>
      </div>
    </div>
  );
};

const DashbordBox = () => {
  const chartData = [16, 15, 2, 47, 32, 14, 14, 55, 41, 69];
  const chartDatas = [16, 15, 2, 47, 32, 14, 14, 55, 41, 69];

  return (
    <div className="flex justify-center items-center gap-4 mb-4 flex-wrap">
      <ChartBox
        title="Total Businesses"
        amount="50.00"
        chartData={chartData}
        color="#17B26A"
        description="compared to last 90 days"
        ChartComponent={BussinessChart}
      />
      <ChartBox
        title="Sales"
        amount="50.00"
        chartData={chartData}
        color="#17B26A"
        description="compared to last 90 days"
        ChartComponent={SalesChart}
      />
      <ChartBox
        title="Expenses"
        amount="50.00"
        chartData={chartData}
        color="#17B26A"
        description="compared to last 90 days"
        ChartComponent={InvoicePd}
      />
      <ChartBox
        title="Profit"
        amount="50.00"
        chartData={chartDatas}
        color="#17B26A"
        description="compared to last 90 days"
        ChartComponent={UnPdChart}
      />
      <ChartBox
        title="Purchase"
        amount="50.00"
        chartData={chartDatas}
        color="#17B26A"
        description="compared to last 90 days"
        ChartComponent={InventoryValue}
      />
      <ChartBox
        title="Customers"
        amount="50.00"
        chartData={chartDatas}
        color="#17B26A"
        description="compared to last 90 days"
        ChartComponent={Purchase}
      />
      <ChartBox
        title="Suppliers"
        amount="50.00"
        chartData={chartDatas}
        color="#17B26A"
        description="compared to last 90 days"
        ChartComponent={Customers}
      />
      <ChartBox
        title="Inventory Value"
        amount="50.00"
        chartData={chartDatas}
        color="#17B26A"
        description="compared to last 90 days"
        ChartComponent={Suppliers}
      />
    </div>
  );
};

export default DashbordBox;
