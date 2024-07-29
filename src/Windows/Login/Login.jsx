import logoImg from '../../Image/logo_1.png'
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { IoMdCheckbox } from "react-icons/io";
import { IoIosCheckboxOutline } from "react-icons/io";
import { useState } from 'react';
import useId from '../../Auth/Id';

import { useNavigate } from 'react-router-dom';


function Login(){
//   const keepMeLogin = useId((state)=>state.keepMeLogin);
  const navigate = useNavigate();
  const setKeepMeLogin = useId((state)=>state.setKeepMeLogin);
  const setIsLogin = useId((state)=>state.setIsLogin);
  const setIsAdmin = useId((state)=>state.setIsAdmin);
  const [openIcon, setOpenIcon]=useState("eye-open-icon password-icon");
  const [closeIcon, setCloseIcon]=useState("eye-close-icon password-icon eye-icon-invisible");
  const [passwordType, setPasswordType]=useState("password");
  const [checkboxClose, setCheckboxClose]=useState("checkbox-icon checkbox-invisible")
  const [checkboxOpen, setCheckboxOpen]=useState("checkbox-icon");
  const handlePasswordIconClose = ()=>{
    setOpenIcon("eye-open-icon password-icon");
    setCloseIcon("eye-close-icon password-icon eye-icon-invisible");
    setPasswordType("password");
  }
  const handlePasswordIconOpen = ()=>{
    setOpenIcon("eye-open-icon password-icon eye-icon-invisible");
    setCloseIcon("eye-close-icon password-icon");
    setPasswordType("text");
  }
  const [ValueForKeep,setValueForKeep]=useState(false);
  const handleCheckboxClose=()=>{
    setCheckboxClose("checkbox-icon checkbox-invisible");
    setCheckboxOpen("checkbox-icon");
    setValueForKeep(false);
  }
  const handleCheckboxOpen=()=>{
    setCheckboxClose("checkbox-icon");
    setCheckboxOpen("checkbox-icon checkbox-invisible");
    setValueForKeep(true);
  }
  const handleSubmitForm = (e)=>{
    if(username===''||password===''){
      e.preventDefault();
      alert("Please, fill in the required fields");
    }
    else if(username==='whoami'&&password==='user'){
      alert("Welcome User");
      setIsLogin(true);
      setIsAdmin(false);
      navigate('/user-dashboard');
      setKeepMeLogin(ValueForKeep);
    }
    else if(username==='whoami'&&password==='admin'){
      alert("Welcome Admin");
      setIsLogin(true);
      setIsAdmin(true);
      navigate('/admin-dashboard');
      setKeepMeLogin(ValueForKeep);
    }
    else{
      alert("Username or password is not correct !")
    }
  }
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleUsername = (e)=>{
    setUsername(e.target.value);
  }
  const handlePassword = (e)=>{
    setPassword(e.target.value);
  }
  return (
    <div className="login-container">
      <div className="form-container">
        <div className="logo-container">
          <img className='logo-img' src={logoImg} alt="logo" />
          <span className='logo-text'>EAST TELECOM</span>
        </div>
        <form className='form-container' onSubmit={handleSubmitForm}>
          <label htmlFor="username" className="label">Username</label>
          <input type="text" value={username} onChange={handleUsername} name="username" autoComplete='name' id="username" className="input" placeholder="Username"/>
          <div className='forgot-password-container'>
            <label htmlFor="password" className="label">Password</label>
            <a href="/forgot-password" className="forgot-password">Forgot password?</a>
          </div>
          <div className='icon-container'>
            <input type={passwordType} value={password} onChange={handlePassword} name='password' className="input" placeholder="Password"/>
            <FaEyeSlash className={closeIcon} onClick={handlePasswordIconClose}/>
            <FaRegEye className={openIcon} onClick={handlePasswordIconOpen}/>
          </div>
          <div>
            <div className='checkbox-icon-container'>
              <IoMdCheckbox className={checkboxClose} onClick={handleCheckboxClose}/>
              <IoIosCheckboxOutline className={checkboxOpen} onClick={handleCheckboxOpen}/>
            </div>
            <span className='checkbox-text'>Keep me logged in for 2 hours</span>
          </div>
          <button type='submit' className='button'>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;