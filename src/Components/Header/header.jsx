import React, { useEffect, useState } from "react";
import logo from '../../assets/logo/logocse.svg'
import { NavLink} from "react-router-dom";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars,faXmark } from "@fortawesome/free-solid-svg-icons";
function header() {

    const Navlinks=()=>{
        
       
        return(
            <>
            
                            <li >
                                <NavLink to="/"
                                    className={({isActive}) =>
                                        `block py-2  pr-4 pl-3 duration-200 ${isActive?"textcolor underline":"lightcolor"}  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0`
                                    } > HOME
                                </NavLink>
                            </li>
                            <li>
                            <NavLink
                                to="/Gallery"
                                className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive?"textcolor underline":"lightcolor"}  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0`
                                }> GALLERY
                                </NavLink>

                            </li>
                            <li>
                            <NavLink
                                to="/Batches"
                                className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive?"textcolor underline":"lightcolor"}  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0`
                                } >  BATCHES
                                </NavLink>

                            </li>
                            <li>
                                <NavLink
                                to="/About"
                                className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive?"textcolor underline":"lightcolor"}  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0`
                                }>  ABOUT
                                </NavLink>
                            </li>
                            <li>
                            <NavLink
                                to="/Login"
                                className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive?"textcolor underline":"lightcolor"}  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0`
                                }>
                                    LOGIN
                                </NavLink>

                            </li>
                        
            </>
        );
    };

  
    const[isOpen,setisOpen]=useState(false);
    const click=()=>{
        setisOpen(!isOpen);
    } 
       
  return (
    <div>
      <nav>
        <div className=" w-screen flex flex-wrap justify-between ">
          <div>
            <img className=" ml-5 w-28 h-20"  src={logo}/>
          </div>
          <div className='header'>
          <ul className="hidden lg:flex flex-row text-[2.25rem] mt-6 mr-8 font-bold  space-x-8 h-20 ">
         <Navlinks/>
         </ul>
          </div>
          <div className="lg:hidden md:justify-end p-4 ">
            <button className="text-4xl " onClick={click}>
                {!isOpen  ?  <FontAwesomeIcon  icon={faBars} style={{color: "#003802",}} /> : <FontAwesomeIcon icon={faXmark} />}
                </button>
          </div>
         
        </div>
        {isOpen && (
            <div className='header flex justify-center '>
            <ul className="flex- col lg:flex lg:flex-row text-[2.25rem] mt-6 mr-8 font-bold  space-x-8 h-20 ">
           <Navlinks/>
           </ul>
            </div>
          )

          }
      </nav>
    </div>

  );
}

export default header;
