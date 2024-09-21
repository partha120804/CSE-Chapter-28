import React from "react";
import { useEffect } from "react";
import logo from '../../assets/logo/logocse.svg'
import { NavLink} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./header.css";
function header() {
    const {user,loginWithRedirect,isAuthenticated,logout}=useAuth0();
    console.log(user);
    if(isAuthenticated){
        console.log(user.email);
        const email=user.email;
        if(email.slice(0,2)!='b1'){
            logout();
            alert("Email Invailid");
        }
    }
  return (
    <div>
      <nav>
        <div className=" w-screen flex flex-wrap justify-between">
          <div>
            <img className=" ml-5 w-28 h-20"  src={logo}/>
          </div>
          <div className='header'>
          <ul className="flex flex-col text-[2.25rem] mt-6 mr-8 font-bold lg:flex-row lg:space-x-8 h-20">
                            <li >
                                <NavLink to="/"
                                    className={({isActive}) =>
                                        `block py-2  pr-4 pl-3 duration-200 ${isActive?"textcolor underline":"lightcolor"}  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0`
                                    }
                                >
                                    HOME
                                </NavLink>
                            </li>
                            <li>
                            <NavLink
                                to="/Gallery"
                                className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive?"textcolor underline":"lightcolor"}  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0`
                                }
                                >
                                    GALLERY
                                </NavLink>

                            </li>
                            <li>
                            <NavLink
                                to="/Batches"
                                className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive?"textcolor underline":"lightcolor"}  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0`
                                }
                                >
                                    BATCHES
                                </NavLink>

                            </li>
                            <li>
                                <NavLink
                                to="/About"
                                className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive?"textcolor underline":"lightcolor"}  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0`
                                }
                                >
                                    ABOUT
                                </NavLink>
                            </li>
                            <li>
                                <button onClick={(e)=>loginWithRedirect()}>Login</button>
                            </li>
                            {isAuthenticated?<li>
                            <NavLink
                                to="/Login"
                                className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive?"textcolor underline":"lightcolor"}  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0`
                                }
                                >
                                    LOGIN
                                </NavLink>

                            </li>:''}
                            
                        </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default header;
