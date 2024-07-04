import React,{useState} from 'react'
import {Link, NavLink} from 'react-router-dom'

export default function Header(){
    const [showSignUp, setShowSignUp] = useState(true);

    const handleToggle = () => {
    setShowSignUp(!showSignUp);
  };
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white  px-4 lg:px-6 py-2">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <span className="font-bold text-2xl">My Website</span>
                <div className="flex items-center lg:order-2">
    
                        {showSignUp ? (
                    <div className="flex items-center lg:order-2">
                        <Link 
                            to='./Signup'
                            className="text-white bg-gray-800  hover:bg-gray-400  font-medium rounded-lg text-sm px-3 lg:px-4 py-1 lg:py-2 mr-1 shadow-2xl "onClick={handleToggle}>
                                SignUp
                        </Link>
                    </div>
                    ) : (
                   <div className="flex items-center lg:order-2">
              
                      <Link 
                     to='./'
                       className="text-white bg-gray-800  hover:bg-gray-400  font-medium rounded-lg text-sm  px-3 lg:px-4 py-1 lg:py-2 mr-1 shadow-2xl "onClick={handleToggle}> 
                        Login</Link>
                    </div>
                       )}

                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/About"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-gray-400 lg:p-0`
                                    }
                                >
                                    About 
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/Contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-gray-400 lg:p-0`
                                    }
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="+"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-gray-400 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>   
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}