import { FaChevronDown } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
function Header(){
               const [headerShowAction, setHeaderShowAction] = useState("header-show-action header-show-action-invisible");
               const [chechShowActionStatus, setCheckActionStatus]=useState(false);
               const [headerLanguageOptions,setHeaderLanguageOptions] = useState("header-language-options header-language-options-invisible");
               const [headerNotificationOption,setHeaderNotificationOption] = useState("header-notification-option header-notification-option-invisible");
               
               const handleLanguageClick = ()=>{
                              if(!chechShowActionStatus){
                                setHeaderShowAction("header-show-action");
                                setCheckActionStatus(true);
                                setHeaderLanguageOptions("header-language-options");
                                setHeaderNotificationOption("header-notification-option header-notification-option-invisible")
                              }
                              else{
                                setHeaderNotificationOption("header-notification-option header-notification-option-invisible")
                                setHeaderShowAction("header-show-action header-show-action-invisible");
                                setCheckActionStatus(false);
                                setHeaderLanguageOptions("header-language-options header-language-options-invisible");
                              }
                              
                            }
                            const handleNotificationClick = ()=>{
                              if(!chechShowActionStatus){
                                setHeaderShowAction("header-show-action");
                                setCheckActionStatus(true);
                                setHeaderLanguageOptions("header-language-options header-language-options-invisible");
                                setHeaderNotificationOption("header-notification-option")
                              }
                              else{
                                setHeaderShowAction("header-show-action header-show-action-invisible");
                                setCheckActionStatus(false);
                                setHeaderLanguageOptions("header-language-options header-language-options-invisible");
                                setHeaderNotificationOption("header-notification-option header-notification-option-invisible")
                              }
                              
                            }
                            const [headerLanguageChangeEnglish, setHeaderLanguageChangeEnglish]=useState("header-english-option header-language-option-active");
                            const [headerLanguageChangeRussian, setHeaderLanguageChangeRussian]=useState("header-english-option");
                            const [headerLanguageChangeUzbek, setHeaderLanguageChangeUzbek]=useState("header-english-option");
                            const [headerLanguageChangeContent, setHeaderLanguageChangeContent]=useState("English");
                            const handleHeaderLanguageChangeRussian=()=>{
                              setHeaderLanguageChangeContent("Russian");
                              setHeaderLanguageChangeEnglish("header-english-option");
                              setHeaderLanguageChangeRussian("header-english-option header-language-option-active")
                              setHeaderLanguageChangeUzbek("header-english-option");
                            }
                            const handleHeaderLanguageChangeUzbek=()=>{
                              setHeaderLanguageChangeContent("Uzbek");
                              setHeaderLanguageChangeEnglish("header-english-option");
                              setHeaderLanguageChangeRussian("header-english-option")
                              setHeaderLanguageChangeUzbek("header-english-option header-language-option-active");
                            }
                            const handleHeaderLanguageChangeEnglish=()=>{
                              setHeaderLanguageChangeContent("English");
                              setHeaderLanguageChangeEnglish("header-english-option header-language-option-active");
                              setHeaderLanguageChangeRussian("header-english-option")
                              setHeaderLanguageChangeUzbek("header-english-option");
                            }
                          

               return(
                              <header className="main-container-header">
                              <div className="main-container-language-icon-wrap">
                                <FaChevronDown className='header-language-icon' onClick={handleLanguageClick}/>
                                <span className="language-icon-text">
                                  {headerLanguageChangeContent}
                                </span>
                              </div>
                              <IoMdNotificationsOutline className='header-notification-icon' onClick={handleNotificationClick}/>
                              <CgProfile className='header-profile-icon'/>
                              <div className={headerShowAction}>
                                <ul className={headerLanguageOptions}>
                                  <li className={headerLanguageChangeEnglish} onClick={handleHeaderLanguageChangeEnglish}>English</li>
                                  <li className={headerLanguageChangeRussian} onClick={handleHeaderLanguageChangeRussian}>Russian</li>
                                  <li className={headerLanguageChangeUzbek} onClick={handleHeaderLanguageChangeUzbek}>Uzbek</li>
                                </ul>
                                <span className={headerNotificationOption}>You have got a new message!</span>
                              </div>
                            </header>     
               )
}

export default Header