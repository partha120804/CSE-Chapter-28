import React from "react";
import logo from '../../assets/logo/logocse.svg'
import { NavLink} from "react-router-dom";
import "./header.css"
function header() {
  return (
    <div>
      <nav>
        <div className=" w-screen flex flex-wrap justify-between">
          <div>
            <img className=" ml-5 w-28 h-20"  src={logo}/>
          </div>
          <div>
          <ul className="flex flex-col mt-6 mr-5 font-medium lg:flex-row lg:space-x-8  h-20">
                            <li>
                                <NavLink to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 text-3xl ${isActive?"textcolor underline":"lightcolor"}  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                            <NavLink
                                to="/Gallery"
                                className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 text-3xl ${isActive?"textcolor underline":"lightcolor"}  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0`
                                }
                                >
                                    Gallery
                                </NavLink>

                            </li>
                            <li>
                            <NavLink
                                to="/Batches"
                                className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 text-3xl ${isActive?"textcolor underline":"lightcolor"}  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0`
                                }
                                >
                                    Batches
                                </NavLink>

                            </li>
                            <li>
                            <NavLink
                                to="/Login"
                                className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 text-3xl ${isActive?"textcolor underline":"lightcolor"}  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0`
                                }
                                >
                                    Login
                                </NavLink>

                            </li>
                        </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default header;
