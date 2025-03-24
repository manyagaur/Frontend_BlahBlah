import React, { useState } from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { DarkModeOutlined, EmailOutlined, GridViewOutlined, NotificationsOutlined, PersonOutlineOutlined } from '@mui/icons-material';
import dp from '../../assets/dp.jpg'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from 'axios';


function Navbar(){

    const nav = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleLogout = async () => {
        try {
          const response = await axios.post("http://localhost:8800/api/auth/logout", {}, {
            withCredentials: true, 
          });
          if (response.status === 200) {
            alert("User logged out successfully!");
            nav("/login"); 
          }
        } catch (error) {
          console.error("Error during logout:", error);
          alert("Logout failed! Please try again.");
        }
      };
    
    return(
        <>
        <div className='navbar flex items-center justify-items-center pl-[10px] pt-[12px] pr-[12px] h-[50px] relative'>
            <div className='left flex items-center gap-[40px]'>
                <span className='text-blue-950 font-bold font-rubikRegular pl-2'>
                    <Link to="/home" className="hover:underline text-blue-600">
                        BlahBlah
                    </Link>
                </span>
                <HomeRoundedIcon/>
                <DarkModeOutlined/>
                <GridViewOutlined/>
                <div className='flex items-center gap-[10px] pb-[8px] search'>
                    <SearchRoundedIcon/>
                    <input className='hidden md:w-[300px] lg:block border rounded-[3px] border-solid border-gray-500 px-[5px] w-[400px]' type ="text" placeholder='Search....'/>
                </div>
            </div>
            <div className='right hidden sm:flex items-center gap-[20px] px-4 absolute right-0'>
                <PersonOutlineOutlined/>
                <EmailOutlined/>
                <NotificationsOutlined/>
                <div className='relative'>
                    <div 
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className='user flex items-center gap-[10px] text-500 cursor-pointer'>
                        <img className='w-[30px] h-[30px] rounded-3xl object-cover' src={dp} alt = 'User image'></img>
                        <span className="hover:underline text-blue-600">
                                Luna Lovegood
                        </span>
                    </div>
                    {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className='absolute right-0 mt-2 w-40 bg-white shadow-lg border rounded-md'>
                <Link to="/profile" className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
                  Profile
                </Link>
                <Link to="/settings" className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
                  Settings
                </Link>
                <button
                  onClick={handleLogout}
                  className='block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100'
                >
                  Logout
                </button>
              </div>
            )}
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar; 