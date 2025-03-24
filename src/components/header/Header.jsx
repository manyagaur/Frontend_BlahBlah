import React, { useState } from 'react';
import img from '../../assets/8976.jpg'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../assets/logo.png';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(true);
  const hideSidebar = () => setSidebar(false);

  return (
    <>
      <div className="grid grid-cols-12 h-[75px] bg-cover" 
        style={{
          backgroundImage: `linear-gradient(to right, rgba(700, 1090, 514, 0.2), rgba(0, 0, 0, 0.1)), url(${img})`,
          backgroundSize: 'cover',
        }}
      >
        <div className="col-span-2 flex items-center">
          <img src={logo} alt="Logo" className="h-28 w-[180px] mx-3" />
        </div>
        <div className="col-span-4 hidden sm:flex items-center sm:mb-[27px]">
          <div className="relative w-full">
            <input
              type="search"
              className="hidden sm:block pl-10 rounded-md border border-gray-400 w-full"
              placeholder="Search..."
            />
            <button className="absolute left-2 top-0" aria-label="Search">
              <SearchIcon />
            </button>
          </div>
        </div>
        <div className="col-span-10 sm:col-span-6 m-7 flex justify-start">
          <div className="hidden sm:flex flex-grow sm:col-span-2">
            <a href="#" className="mx-4">
              Explore
            </a>
            <a href="#" className="mx-4">
              Home
            </a>
          </div>
          <div className="col-span-8 sm:col-span-2 flex flex-grow">
            <a href="#" className="relative mx-4 " aria-label="Profile">
              <PersonIcon />
              <span className="absolute top-0 left-4 text-white text-[12px] bg-red-600 rounded-full h-4 w-4 flex items-center justify-center">2</span>
            </a>
            <a href="#" className="relative mx-4" aria-label="Messages">
              <MessageIcon />
              <span className="absolute top-0 left-4 text-white text-[12px] bg-red-600 rounded-full h-4 w-4 flex items-center justify-center">7</span>
            </a>
            <a href="#" className="relative mx-4" aria-label="Notifications">
              <NotificationsIcon />
              <span className="absolute top-0 left-4 text-white text-[12px] bg-red-600 rounded-full h-4 w-4 flex items-center justify-center">4</span>
            </a>
          </div>
          <div className="sm:hidden col-span-2">
            <a onClick={showSidebar} className="mx-4 flex justify-end" aria-label="Menu">
              <MenuIcon />
            </a>
          </div>
        </div>
      </div>
      {sidebar && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50">
          <div className="sidebar fixed top-0 right-0 shadow-xl h-screen w-64 bg-gray-200/[0.6] backdrop-blur-xl z-999">
            <div className="flex flex-col p-4">
              <button onClick={hideSidebar} className="mb-4" aria-label="Close Menu">
                <CloseIcon />
              </button>
              <a href="#" className="h-12 hover:shadow-lg w-full mb-2">
                Notifications
              </a>
              <a href="#" className="h-12 hover:shadow-lg w-full mb-2">
                Messages
              </a>
              <a href="#" className="h-12 hover:shadow-lg w-full mb-2">
                Friends
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
