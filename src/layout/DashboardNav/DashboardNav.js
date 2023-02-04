import React, { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiAppsFill } from "react-icons/ri";
import { AiOutlineCalendar, AiFillFileAdd, AiOutlineShoppingCart, AiOutlineMail, AiFillProject } from "react-icons/ai";
import { BsChatDotsFill } from "react-icons/bs";
import { BiBookAlt } from "react-icons/bi";
import { RiContactsFill } from "react-icons/ri";
import { SiGnuprivacyguard } from "react-icons/si";
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowRight } from "react-icons/md";



const DashboardNav = ({ close, setClose }) => {

    const [DropdownEnter, setDropdownEnter] = useState(-1)


    const main_menu = [
        {
            Route: 'Dashboard',
            Path: '/',
            icon: <RiAppsFill />,
            height: '11rem',
        },
        {
            Route: 'Categories list',
            Path: '/calendar',
            height: '7.4rem',
            icon: <AiOutlineCalendar />,
            Service: [
                {
                    ServicePath: '/',
                    ServiceRoute: 'Primeam',
                },
                {
                    ServicePath: '/',
                    ServiceRoute: 'Golden',
                },
                {
                    ServicePath: '/',
                    ServiceRoute: 'Silver',
                },
                {
                    ServicePath: '/',
                    ServiceRoute: 'Branz',
                }
            ]
        },
        {
            Route: 'Customer list',
            Path: '/chat',
            height: '11rem',
            icon: <BsChatDotsFill />,
            Service: [
                {
                    ServicePath: '/',
                    ServiceRoute: 'Loyal',
                },
                {
                    ServicePath: '/',
                    ServiceRoute: 'Discount',
                },
                {
                    ServicePath: '/',
                    ServiceRoute: 'Impulse ',
                }
            ]
        },
        {
            Route: 'Boocking list',
            Path: '/',
            height: '11rem',
            icon: <AiFillFileAdd />,
        },
        {
            Route: 'Inbox',
            Path: '/',
            height: '11rem',
            icon: <AiOutlineShoppingCart />,
            Service: [
                {
                    ServicePath: '/',
                    ServiceRoute: 'Company Chat',
                },
                {
                    ServicePath: '/',
                    ServiceRoute: 'Customer Chat',
                }
            ]
        },
        {
            Route: 'Active account',
            Path: '/email',
            icon: <AiOutlineMail />
        },
        {
            Route: 'Company owner list',
            Path: '/invoices',
            icon: <BiBookAlt />
        },
        {
            Route: 'Propertys',
            Path: '/projects',
            icon: <AiFillProject />,
            height: '11rem',
            Service: [
                {
                    ServicePath: '/',
                    ServiceRoute: 'Public',
                },
                {
                    ServicePath: '/',
                    ServiceRoute: 'Privet',
                }
            ]
        },
        {
            Route: 'Customer Review',
            Path: '/contacts',
            icon: <RiContactsFill />
        },
        {
            Route: 'LogOut',
            Path: '/authentication',
            icon: <SiGnuprivacyguard />
        }
    ]

    return (
        <div className=' h-full '>
            {/* <!-- Component Start --> */}
            <div class={`flex flex-col  items-center justify-between h-full overflow-x-hidden scrollbar overflow-y-auto transition-all duration-300  ease-in-out  bg-[#3A302F] text-white shadow-[0_0_15px_0_rgba(0,0,0,0.11)] rounded ${close ? 'w-16 duration-500' : 'w-80 '}`}>
                <div className=' w-full flex flex-col justify-between '>
                    <NavLink to='/' className={`w-full  ${close ? 'px-0' : 'px-4'}`}>
                        <div class={` w-full items-center mt-3 h-12  ${close ? '  flex  items-center w-full ml-3' : 'flex flex-row '}`}>
                            <div className={`${close ? '' : 'py-1'}`}>
                                <svg onClick={() => { setClose(!close); setDropdownEnter(-1) }} class={`w-8 h-8  fill-current text-red-500 ${close && 'mx-auto ml-1'} `} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                                </svg>
                            </div>

                            <div className=' overflow-hidden'>
                                <span className={`transition-all duration-300 ease-out overflow-hidden text-sm font-semibold ${close ? ' translate-x-[-24rem] -ml-20  ' : ' translate-x-0 pl-2'}`}  >The App</span>
                            </div>
                        </div>
                    </NavLink>

                    {/* Menu Items */}

                    <div class="w-full px-2">
                        <div class="flex flex-col  items-center w-full mt-3 border-t border-gray-300">
                            {
                                main_menu.map((menu, index) =>
                                    <>
                                        <NavLink to={menu?.Path} className='w-full' >
                                            <div class={`flex w-full items-center h-12 px-3 mt-2 rounded transition-all duration-150 ease-in hover:pl-5   ${menu?.Service ? (DropdownEnter == index) ? 'bg-[#5a4e4c] rounded-t-2xl rounded-b-none' : null : (DropdownEnter == index) ? 'bg-[#5a4e4c]' : null} `}>
                                                <div className={` ${close ? ' py-1 ' : 'py-1'}`}>
                                                    <div class={` text-xl p-1 bg-red-500 rounded text-white  stroke-current  ${close && 'mx-auto '} `}>
                                                        {menu?.icon}
                                                    </div>
                                                </div>
                                                <div onClick={() => setDropdownEnter(DropdownEnter >= 0 ? -1 : index)} className=' overflow-hidden flex h-6 w-[80%]  '>
                                                    <span className={`transition-all  w-[80%]  duration-500 ease-out overflow-hidden text-sm font-semibold ${close ? ' translate-x-[-24rem] -ml-28  ' : 'duration-500 translate-x-0 pl-2'}`}  >{menu?.Route}</span>
                                                    <div className={`inline-flex h-full mt-1 float-right ${(menu?.Service) ? 'block' : 'hidden'}  `}>
                                                        {
                                                            (DropdownEnter == index) ? <MdKeyboardArrowDown className=' text-lg' /> : <MdOutlineKeyboardArrowRight className=' text-lg' />
                                                        }
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={`overflow-hidden bg-[#5a4e4c] rounded-b-2xl transition-all duration-500 ease-in  ${(menu?.Service) ? 'block' : 'hidden'}  ${(DropdownEnter == index) ? 'h-auto py-2 pb-5' : 'h-0'}`}>
                                                {menu?.Service?.map(dropmenu =>
                                                    <div>
                                                        <NavLink to={dropmenu?.ServicePath}>
                                                            <div class="flex w-full items-center  text-white bg-gradient-to-r  h-12 pl-10 mt-2 rounded transition-all duration-150 ease-in  justify-center ">

                                                                <div className='overflow-hidden h-6 w-[80%]'>
                                                                    <span className={`transition-all  w-[80%]  duration-500 ease-out overflow-hidden text-sm font-semibold ${close ? ' translate-x-[-24rem] -ml-28 ' : 'duration-500 translate-x-0 pl-2'}`} >{dropmenu?.ServiceRoute}</span>
                                                                </div>
                                                            </div>
                                                        </NavLink>
                                                    </div>

                                                )}
                                            </div>
                                        </NavLink>
                                    </>
                                )
                            }
                        </div>
                    </div>
                    {/* Menu Items */}
                </div>
            </div>
            {/* <!-- Component End  --> */}
        </div>
    );
};

export default DashboardNav;