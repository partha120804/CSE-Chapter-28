<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======
import React from "react";
import { useEffect,useState ,useRef} from "react";
>>>>>>> 2144507b400857188dd58c77622294c3b83ab8cb
import logo from '../../assets/logo/logocse.svg'
import { NavLink} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<<<<<<< HEAD
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
=======
import {faBars} from "@fortawesome/free-solid-svg-icons";
function header() {
    const {user,loginWithRedirect,isAuthenticated,logout}=useAuth0();
    if(isAuthenticated){
        const email=user.email;
        if(email.slice(0,2)!='b1'){
            alert("Email Invailid");
            logout();
        }
    }
    let hamRef=useRef();
    const [hamburger,setHamburger]=useState('invisible');
    let EnableBar=()=>{
        if(hamburger=='invisible')
        setHamburger('visible');
        else
        setHamburger('invisible');
    }
    let DisableBar=()=>{
        console.log(hamburger)
        if(hamburger=='visible')
        setHamburger('invisible');
    }
  return (
    <div onClick={DisableBar}>
      <nav>
        <div className=" w-screen flex justify-between">
          <div>
            <img className=" ml-5 w-28 h-20"  src={logo}/>
          </div>
          <div className='header flex'>
          <ul className={`flex ${hamburger} fixed top-0 right-0 sm:visible sm:static z-20 flex-col sm:flex-row text-[2.25rem] mt-6 mr-8 font-bold lg:space-x-8 h-20 max-w-[600px] max-h-20`}>
                            <li >
                                <NavLink to="/"
                                    className={({isActive}) =>
                                        `block pr-4 pl-3 duration-200 ${isActive?"textcolor underline":"lightcolor"}    hover:bg-transparent border-0  lg:p-0`
                                    }
                                >
                                    HOME
>>>>>>> 2144507b400857188dd58c77622294c3b83ab8cb
                                </NavLink>
                            </li>
                            <li>
                            <NavLink
                                to="/Gallery"
                                className={({isActive}) =>
<<<<<<< HEAD
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive?"textcolor underline":"lightcolor"}  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0`
                                }> GALLERY
=======
                                    `block pr-4 pl-3 duration-200 ${isActive?"textcolor underline":"lightcolor"}   hover:bg-transparent border-0  lg:p-0`
                                }
                                >
                                    GALLERY
>>>>>>> 2144507b400857188dd58c77622294c3b83ab8cb
                                </NavLink>

                            </li>
                            <li>
                            <NavLink
                                to="/Batches"
                                className={({isActive}) =>
<<<<<<< HEAD
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive?"textcolor underline":"lightcolor"}  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0`
                                } >  BATCHES
=======
                                    `block pr-4 pl-3 duration-200 ${isActive?"textcolor underline":"lightcolor"}   hover:bg-transparent border-0  lg:p-0`
                                }
                                >
                                    BATCHES
>>>>>>> 2144507b400857188dd58c77622294c3b83ab8cb
                                </NavLink>

                            </li>
                            <li>
                                <NavLink
                                to="/About"
                                className={({isActive}) =>
<<<<<<< HEAD
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive?"textcolor underline":"lightcolor"}  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0`
                                }>  ABOUT
=======
                                    `block pr-4 pl-3 duration-200 ${isActive?"textcolor underline":"lightcolor"}   hover:bg-transparent border-0  lg:p-0`
                                }
                                >
                                    ABOUT
>>>>>>> 2144507b400857188dd58c77622294c3b83ab8cb
                                </NavLink>
                            </li>
                            
                            {isAuthenticated?<li>
                            <NavLink
                                to="/Profile"
                                className={({isActive}) =>
<<<<<<< HEAD
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
=======
                                    `block pr-4 pl-3 duration-200 ${isActive?"textcolor underline":"lightcolor"}   hover:bg-transparent border-0  lg:p-0`
                                }
                                >
                                    PROFILE
                                </NavLink>

                            </li>:
                            <li>
                                <button onClick={(e)=>loginWithRedirect()}>LOGIN</button>
                            </li>}
                            
                        </ul>
                
          <FontAwesomeIcon icon={faBars} style={{color: "#0c360f",}} className="mt-[1.8rem] mx-4 h-10 sm:hidden" onClick={EnableBar}/>
>>>>>>> 2144507b400857188dd58c77622294c3b83ab8cb
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
