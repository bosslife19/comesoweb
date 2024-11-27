 import DashboardMain from '../../components/Dashboard/DashboardMain';
import SalesboardList from '../../components/sales/invoice/SalesboardOverview';
import SalesboardTitle from '../../components/sales/invoice/SalesboardTitle'
import SalesbordBox from '../../components/sales/invoice/SalesbordBox';

export const SalesPage = () => {
    const resList = [
        {
          firstName: "John",
          lastName: "Doe",
           businessName: "Sales Management",
        },
         
      ];
      
  return (
   <>
   <SalesboardTitle resList={resList} />  
     <SalesbordBox/>
     <DashboardMain/>
     <SalesboardList/>
   </>
  )
}
