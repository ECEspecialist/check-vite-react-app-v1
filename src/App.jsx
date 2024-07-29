import { BrowserRouter, Routes, Route} from 'react-router-dom'


import useId from './Auth/Id.jsx';
import Login from './Windows/Login/Login.jsx'
import AdminDashboard from './Windows/Admin/AdminDashboard.jsx'
import UserDashboard from './Windows/User/Dashboard.jsx'
import NoPage from './Windows/Info/NoPage.jsx';
import Password from './Windows/Login/Password.jsx'

const App = () => {
  const isAdmin=useId((state)=>state.isAdmin);
  const isLogin=useId((state)=>state.isLogin);
  
  return (
    <BrowserRouter>
      <Routes>
        {!isLogin&&(
          <>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login/>} />
            <Route path= "/forgot-password" element = {<Password/>}/>
            <Route path="*" element={<NoPage/>}/>
          </>
        )}

        {isLogin&&isAdmin&&(
          <>
            <Route path='/' element={<AdminDashboard/>}/>
            <Route path='/admin-dashboard' element={<AdminDashboard/>}/>
            <Route path="*" element={<NoPage/>}/>
          </>
        )}
        {isLogin&&!isAdmin&&(
          <>
            <Route path='/' element={<UserDashboard/>}/>
            <Route path='/user-dashboard' element={<UserDashboard/>}/>
            <Route path="*" element={<NoPage/>}/>
          </>
        )}
        
      </Routes>
    </BrowserRouter>
  );
};
export default App;