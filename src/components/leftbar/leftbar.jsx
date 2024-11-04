import Friends from '../../assets/1.png';
import Groups from '../../assets/2.png';
import Market from '../../assets/3.png';
import Watch from '../../assets/4.png';
import Memories from '../../assets/5.png';
import Events from '../../assets/6.png';
import Gaming from '../../assets/7.png';
import Gallery from '../../assets/8.png';
import Videos from '../../assets/9.png';
import Messages from '../../assets/10.png';
import Tutorials from '../../assets/11.png';
import Courses from '../../assets/12.png';
import Fund from '../../assets/13.png';
import '../leftbar/leftbar.css'
import dp from '../../assets/dp.jpg'

function Leftbar(){
    return(
        <>
        <div className="leftbar h-screen bg-white p-[6px]"> 
            <div className="container p-[8px]">
                <div className="menu flex flex-col gap-[20px]">
                    <div className="user flex items-center gap-[12px]">
                        <img 
                        className='w-[30px] h-[30px] rounded-3xl object-cover' 
                        src={dp} 
                        alt="User image">
                        </img>
                        <span className='text-[14px]'>Luna Lovegood</span>
                    </div>
                    <div className='item flex items-center gap-[12px]'>
                        <img 
                        className='w-[30px] h-[30px] rounded-xl object-cover'
                        src={Friends} alt = ''></img>
                        <span className='text-[14px]'>Friends</span>
                    </div>
                    <div className='item flex items-center gap-[12px]'>
                        <img 
                        className='w-[30px] h-[30px] rounded-xl object-cover'
                        src={Groups} alt = ''></img>
                        <span className='text-[14px]'>Groups</span>
                    </div>
                    <div className='item flex items-center gap-[12px]'>
                        <img 
                        className='w-[30px] h-[30px] rounded-xl object-cover'
                        src={Market} alt = ''></img>
                        <span className='text-[14px]'>Marketplace</span>
                    </div>
                    <div className='item flex items-center gap-[12px]'>
                        <img
                        className='w-[30px] h-[30px] rounded-xl object-cover'
                        src={Watch} alt = ''></img>
                        <span className='text-[14px]'>Watch</span>
                    </div>
                    <div className='item flex items-center gap-[12px]'>
                        <img 
                        className='w-[30px] h-[30px] rounded-xl object-cover'
                        src={Memories} alt = ''></img>
                        <span className='text-[14px]'>Memories</span>
                    </div>
                </div>
                
                <hr className='border border-blue-200 my-[12px]'/>
                <div className="menu flex flex-col gap-[20px]">
                    <span className='text-[12px]'>Your shortcuts</span>
                    <div className="user flex items-center gap-[12px]">
                        <img 
                        className='w-[30px] h-[30px] rounded-xl object-cover' 
                        src={Events} 
                        alt="User image">
                        </img>
                        <span className='text-[14px]'>Events</span>
                    </div>
                    <div className='item flex items-center gap-[12px]'>
                        <img 
                        className='w-[30px] h-[30px] rounded-xl object-cover'
                        src={Gaming} alt = ''></img>
                        <span className='text-[14px]'>Gaming</span>
                    </div>
                    <div className='item flex items-center gap-[12px]'>
                        <img 
                        className='w-[30px] h-[30px] rounded-xl object-cover'
                        src={Gallery} alt = ''></img>
                        <span className='text-[14px]'>Gallery</span>
                    </div>
                    <div className='item flex items-center gap-[12px]'>
                        <img 
                        className='w-[30px] h-[30px] rounded-xl object-cover'
                        src={Videos} alt = ''></img>
                        <span className='text-[14px]'>Videos</span>
                    </div>
                    <div className='item flex items-center gap-[12px]'>
                        <img
                        className='w-[30px] h-[30px] rounded-xl object-cover'
                        src={Messages} alt = ''></img>
                        <span className='text-[14px]'>Messages</span>
                    </div>
                    <div className='item flex items-center gap-[12px]'>
                        <img 
                        className='w-[30px] h-[30px] rounded-xl object-cover'
                        src={Tutorials} alt = ''></img>
                        <span className='text-[14px]'>Tutorials</span>
                    </div>
                </div>
                <hr className='border border-blue-200 my-[12px]'/>
                <div className="menu flex flex-col gap-[20px]">
                    <span className='text-[12px]'>Others</span>
                    <div className="user flex items-center gap-[12px]">
                        <img 
                        className='w-[30px] h-[30px] rounded-xl object-cover' 
                        src={Courses} 
                        alt="User image">
                        </img>
                        <span className='text-[14px]'>Courses</span>
                    </div>
                    <div className='item flex items-center gap-[12px]'>
                        <img 
                        className='w-[30px] h-[30px] rounded-xl object-cover'
                        src={Fund} alt = ''></img>
                        <span className='text-[14px]'>Fundraiser</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Leftbar;