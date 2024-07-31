
import Header from '../../Components/SidebarHeader/Header';
import SidebarUser from '../../Components/SidebarHeader/SidebarUser';
import { Outlet } from 'react-router-dom';
SidebarUser
const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <SidebarUser/>
      <div className="main-container">
        <Header/>
        <Outlet/>
      </div>
      
    </div>
  );
}
export default AdminDashboard;