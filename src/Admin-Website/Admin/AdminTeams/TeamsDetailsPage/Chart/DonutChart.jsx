import ReactApexChart from 'react-apexcharts';

const DonutCharts = () => {
  const donutChartOptions = {
    chart: {
      type: 'donut',
    },
    colors: ['#FF0000', '#0000FF', '#FFA500'], // Colors: Red, Blue, Orange
    legend: {
      position: 'bottom', // Position the legend below the chart
      horizontalAlign: 'center', // Align legend centrally
      floating: false,
      itemMargin: {
        vertical: 5, // Add vertical spacing between legend items
      },
      formatter: (seriesName, opts) =>
        `${seriesName}: ${opts.w.globals.series[opts.seriesIndex]}`,  
    },
    labels: ['Health Status', 'Send Voucher', 'Search Facility'], // Legend labels
    series: [14, 55, 23], // Chart data
    dataLabels: {
      enabled: false, // Disable percentage display
    },
  };

  return (
    <div className="py-[20px] bg-[#fff] shadow-md border rounded-[10px] text-center w-full md:w-[323px] font-sans">
      {/* Text above the chart */}
      <div className="flex w-full border-b pb-3 items-center mb-4 px-[10px] justify-between">
        <h3 className="text-[16px] leading-[24px] font-[500] text-[#191B1C]">Most Visited Page</h3>
        <select className="border outline-none font-alata p-1 text-[12px] rounded-[4px] text-[#4A5154] bg-[#F5F6F7]">
          <option>This Month</option>
        </select>
      </div>
      <div>
        <ReactApexChart
          options={donutChartOptions}
          series={donutChartOptions.series}
          type="donut"
        />
      </div>
      <div>
        <h3 className="bg-[#F5F6F7] py-[10px] text-[#4A5154] font-[500] text-[11px] leading-[10px]">
          Page name
        </h3>
        <div className="text-[#4A5154] flex justify-around py-1 font-[400] text-[12px] leading-[20px]">
          <span>12 / 20 Hrs</span> <span>12 / 20 Hrs</span> <span>12 / 20 Hrs</span>
        </div>
        <h3 className="bg-[#F5F6F7] py-[10px] text-[#4A5154] font-[500] text-[11px] leading-[10px]">
          Total Hours
        </h3>
      </div>
    </div>
  );
};

export default DonutCharts;
