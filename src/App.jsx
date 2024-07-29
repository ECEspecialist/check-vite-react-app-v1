import { BrowserRouter, Routes, Route} from 'react-router-dom'

import useId from './Auth/Id.jsx';
import Login from './Windows/Login/Login.jsx'
import AdminDashboard from './Windows/Admin/AdminDashboard.jsx'
import UserDashboard from './Windows/User/Dashboard.jsx'
import NoPage from './Windows/Info/NoPage.jsx';
import Password from './Windows/Login/Password.jsx'
import AllEmployeeComponent from './Components/AllEmployeeComponent/AllEmployeeComponent.jsx';
import DashboardComponent from './Components/DashboardComponent/DashboardComponent.jsx';
const App = () => {
  const isAdmin=useId((state)=>state.isAdmin);
  const isLogin=useId((state)=>state.isLogin);
  
  return (
    <BrowserRouter>
      <Routes>
        {!isLogin?(
          <>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login/>} />
            <Route path= "/forgot-password" element = {<Password/>}/>
            <Route path="*" element={<NoPage/>}/>
          </>
        ):isAdmin?(
          <>
            <Route path='/' element={<AdminDashboard/>}/>
            <Route path='/admin' element={<AdminDashboard/>}>
              <Route index element={<DashboardComponent/>}/>
              <Route path='dashboard' element={<DashboardComponent/>}/>
              <Route path='all-employee' element={<AllEmployeeComponent/>}/>
            </Route>
            <Route path="*" element={<NoPage/>}/>
          </>
        ):(
          <>
            <Route path='/' element={<UserDashboard/>}/>
            <Route path='/user' element={<UserDashboard/>}/>
            <Route path="*" element={<NoPage/>}/>
          </>
        )}
        
      </Routes>
    </BrowserRouter>
  );
};
export default App;