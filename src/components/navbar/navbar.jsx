import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { DarkModeOutlined, EmailOutlined, GridViewOutlined, NotificationsOutlined, PersonOutlineOutlined } from '@mui/icons-material';
import dp from '../../assets/dp.jpg'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Navbar(){

    const nav = useNavigate();
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
                <div className='user flex items-center gap-[10px] text-500'>
                    <img className='w-[30px] h-[30px] rounded-3xl object-cover' src={dp} alt = 'User image'></img>
                    <Link to="/profile" className="hover:underline text-blue-600">
                            Luna Lovegood
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar; 