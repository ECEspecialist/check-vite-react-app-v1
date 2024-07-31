import { MdKeyboardArrowRight } from "react-icons/md";
import im1 from "../../Image/im1.png";
import im2 from "../../Image/im2.png";
import im3 from "../../Image/im3.png";
import im4 from "../../Image/im4.png";
import approvalData from '../../Data/Approval'
import CalendarApp from "../Calendar/Calendar";
function DashboardComponent(){
               return(
                              <div className="dashboard-component">
                                             <div className="dashboard-component-top">
                                                            <div className="dashboard-component-top-item">
                                                                           <div className="dashboard-component-top-top">
                                                                                          <div className="dashboard-component-top-title">
                                                                                                         <span className="dashboard-component-top-title-l1">Company</span>
                                                                                                         <span className="dashboard-component-top-title-l2">8 departments</span>
                                                                                          </div>
                                                                                          {/* <FcDepartment className="dashboard-component-top-icon"/> */}
                                                                                          <img src={im1} className="dashboard-component-top-image" alt="company image" />
                                                                           </div>
                                                                           <div className="dashboard-component-view-link-wrap">
                                                                                          <span className="dashboard-component-view-text">
                                                                                                         view all
                                                                                          </span>
                                                                                          <MdKeyboardArrowRight className="dashboard-component-icon"/>
                                                                           </div>
                                                            </div>
                                                            <div className="dashboard-component-top-item">
                                                                           <div className="dashboard-component-top-top">
                                                                                          <div className="dashboard-component-top-title">
                                                                                                         <span className="dashboard-component-top-title-l1">Employees</span>
                                                                                                         <span className="dashboard-component-top-title-l2">750 employees</span>
                                                                                          </div>
                                                                                          {/* <FcDepartment className="dashboard-component-top-icon"/> */}
                                                                                          <img src={im2} className="dashboard-component-top-image" alt="company image" />
                                                                           </div>
                                                                           <div className="dashboard-component-view-link-wrap">
                                                                                          <span className="dashboard-component-view-text">
                                                                                                         view all
                                                                                          </span>
                                                                                          <MdKeyboardArrowRight className="dashboard-component-icon"/>
                                                                           </div>
                                                            </div>
                                                            <div className="dashboard-component-top-item">
                                                                           <div className="dashboard-component-top-top">
                                                                                          <div className="dashboard-component-top-title">
                                                                                                         <span className="dashboard-component-top-title-l1">Users</span>
                                                                                                         <span className="dashboard-component-top-title-l2">400 users</span>
                                                                                          </div>
                                                                                          {/* <FcDepartment className="dashboard-component-top-icon"/> */}
                                                                                          <img src={im3} className="dashboard-component-top-image" alt="company image" />
                                                                           </div>
                                                                           <div className="dashboard-component-view-link-wrap">
                                                                                          <span className="dashboard-component-view-text">
                                                                                                         view all
                                                                                          </span>
                                                                                          <MdKeyboardArrowRight className="dashboard-component-icon"/>
                                                                           </div>
                                                            </div>
                                                            <div className="dashboard-component-top-item">
                                                                           <div className="dashboard-component-top-top">
                                                                                          <div className="dashboard-component-top-title">
                                                                                                         <span className="dashboard-component-top-title-l1">Training</span>
                                                                                                         <span className="dashboard-component-top-title-l2">7 trainings</span>
                                                                                          </div>
                                                                                          {/* <FcDepartment className="dashboard-component-top-icon"/> */}
                                                                                          <img src={im4} className="dashboard-component-top-image" alt="company image" />
                                                                           </div>
                                                                           <div className="dashboard-component-view-link-wrap">
                                                                                          <span className="dashboard-component-view-text">
                                                                                                         view all
                                                                                          </span>
                                                                                          <MdKeyboardArrowRight className="dashboard-component-icon"/>
                                                                           </div>
                                                            </div>
                                             </div>
                                             <div className="dashboard-component-middle">
                                                            <div className="dashboard-component-middle-left">
                                                                           <span className="dashboard-middle-left-title">Approval</span>
                                                                           <ul className="middle-left-list-top">
                                                                                          <li className="left-list-top-item">DATE OF APPLICATION</li>
                                                                                          <li className="left-list-top-item left-list-top-item-status1"></li>
                                                                                          <li className="left-list-top-item left-list-top-item-status2"></li>
                                                                                          <li className="left-list-top-item left-list-top-item-status3"></li>
                                                                           </ul>
                                                                           {/* {approvalData.map((row, rowIndex) => (
                                                                           <ul className={`middle-left-list-top ${rowIndex % 2 === 0 ? 'background-blue' : ''}`} key={rowIndex}>
                                                                           {row.map(item => (
                                                                           <li className="left-list-top-item list-top-contents" key={item.id}>
                                                                           {item.date || item.type || item.duration || item.status || 'N/A'}
                                                                           </li>
                                                                           ))}
                                                                           </ul>
                                                                           ))} */}
                                                                           {approvalData.map((row, rowIndex)=>(
                                                                                          <ul className={`middle-left-list-top ${rowIndex%2==0?'background-blue':''}`} key={rowIndex}>
                                                                                                         {row.map(item=>(
                                                                                                                        <li className={`left-list-top-item list-top-contents ${item.status==='Approved'?'list-top-special-approved':item.status==='Pending'?'list-top-special-pending':item.status==='Rejected'?'list-top-special-rejected':''}`} key={item.id}>
                                                                                                                                       {item.date||item.duration||item.type|| ' '}
                                                                                                                        </li>
                                                                                                         ))}
                                                                                          </ul>
                                                                           ))}
                                                                           <ul className="left-side-top-item-bottom">
                                                                                          <li className="left-side-top-item-bottom-approved">Approved</li>
                                                                                          <li className="left-side-top-item-bottom-rejected">Rejected</li>
                                                                                          <li className="left-side-top-item-bottom-pending">Pending</li>
                                                                           </ul>
                                                            </div>
                                                            <div className="dashboard-component-middle-right">
                                                                           <CalendarApp/>     
                                                            </div>
                                             </div>
                              </div>
               )
}

export default DashboardComponent