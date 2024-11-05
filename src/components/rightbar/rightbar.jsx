import './rightbar.css'
import dp from '../../assets/dp.jpg'

function Rightbar(){
    return(
        <>
        <div className="rightbar h-screen bg-white overflow-scroll">
            <div className="container p-[20px]">
            <div className="rightbar-box">
    <span className="text-gray-400">Suggestions For You</span>
    <div className="user flex flex-col lg:flex-row items-start justify-between my-[20px] gap-2">
        <div className="userInfo flex items-center gap-[20px]">
            <img
                className="w-[40px] h-[40px] rounded-3xl object-cover"
                src={dp}
                alt="profile"
            />
            <span className="text-gray-400">Luna Lovegood</span>
        </div>
        <div className="buttons flex flex-col gap-2 items-start sm:mt-2 md:mt-2 lg:flex-row lg:items-center lg:gap-[10px]">
            <button className="p-[5px] bg-blue-500 cursor-pointer text-white rounded">
                Follow
            </button>
            <button className="p-[5px] bg-red-500 cursor-pointer text-white rounded">
                Dismiss
            </button>
        </div>
    </div>
    <div className="user flex flex-col lg:flex-row items-start justify-between my-[20px] gap-2">
        <div className="userInfo flex items-center gap-[20px]">
            <img
                className="w-[40px] h-[40px] rounded-3xl object-cover"
                src={dp}
                alt="profile"
            />
            <span className="text-gray-400">Luna Lovegood</span>
        </div>
        <div className="buttons flex flex-col gap-2 items-start sm:mt-2 md:mt-2 lg:flex-row lg:items-center lg:gap-[10px]">
            <button className="p-[5px] bg-blue-500 cursor-pointer text-white rounded">
                Follow
            </button>
            <button className="p-[5px] bg-red-500 cursor-pointer text-white rounded">
                Dismiss
            </button>
        </div>
    </div>
</div>

                <div className="rightbar-box">
                    <span className='text-gray-400'>Latest Activities</span>
                        <div className="user flex items-center justify-between my-[20px]">
                            <div className="userInfo flex items-center gap-[20px]">
                                <img className='w-[40px] h-[40px] rounded-3xl object-cover'
                                src={dp}></img>
                                <p className='text-gray-400'>
                                    <span className='text-black'>Jane Doe</span> changed their cover picture
                                </p>
                            </div>
                            <span className='text-gray-400'>1 min ago</span>
                        </div>
                        <div className="user flex items-center justify-between my-[20px]">
                            <div className="userInfo flex items-center gap-[20px]">
                                <img className='w-[40px] h-[40px] rounded-3xl object-cover'
                                src={dp}></img>
                                    <p className='text-gray-400'>
                                        <span className='text-black'>Jane Doe</span> changed their cover picture
                                    </p>
                            </div>
                            <span className='text-gray-400'>1 min ago</span>
                        </div>
                        <div className="user flex items-center justify-between my-[20px]">
                            <div className="userInfo flex items-center gap-[20px]">
                                <img className='w-[40px] h-[40px] rounded-3xl object-cover'
                                src={dp}></img>
                                    <p className='text-gray-400'>
                                        <span className='text-black'>Jane Doe</span> changed their cover picture
                                    </p>
                            </div>
                            <span className='text-gray-400'>1 min ago</span>
                        </div>
                        <div className="user flex items-center justify-between my-[20px]">
                            <div className="userInfo flex items-center gap-[20px]">
                                <img className='w-[40px] h-[40px] rounded-3xl object-cover'
                                src={dp}></img>
                                    <p className='text-gray-400'>
                                        <span className='text-black'>Jane Doe</span> changed their cover picture
                                    </p>
                            </div>
                            <span className='text-gray-400'>1 min ago</span>
                        </div>
                        <div className="user flex items-center justify-between my-[20px]">
                            <div className="userInfo flex items-center gap-[20px]">
                                <img className='w-[40px] h-[40px] rounded-3xl object-cover'
                                src={dp}></img>
                                    <p className='text-gray-400'>
                                        <span className='text-black'>Jane Doe</span> changed their cover picture
                                    </p>
                            </div>
                            <span className='text-gray-400'>1 min ago</span>
                        </div>
                </div> 
                <div className="rightbar-box">
                    <span className='text-gray-400'>Online Friends</span>
                        <div className="user flex items-center justify-between my-[20px]">
                            <div className="userInfo flex items-center gap-[20px] relative">
                                <img className='w-[40px] h-[40px] rounded-3xl object-cover'
                                src={dp}></img>
                                    <div className="online w-[12px] h-[12px] rounded-2xl bg-lime-600 absolute top-0 left-[30px]"></div>
                                    <span className='text-black'>Jane Doe</span>
                            </div>
                        </div>
                        <div className="user flex items-center justify-between my-[20px]">
                        <div className="userInfo flex items-center gap-[20px] relative">
                                <img className='w-[40px] h-[40px] rounded-3xl object-cover'
                                src={dp}></img>
                                    <div className="online w-[12px] h-[12px] rounded-2xl bg-lime-600 absolute top-0 left-[30px]"></div>
                                    <span className='text-black'>Jane Doe</span>
                            </div>
                        </div>
                        <div className="user flex items-center justify-between my-[20px]">
                        <div className="userInfo flex items-center gap-[20px] relative">
                                <img className='w-[40px] h-[40px] rounded-3xl object-cover'
                                src={dp}></img>
                                    <div className="online w-[12px] h-[12px] rounded-2xl bg-lime-600 absolute top-0 left-[30px]"></div>
                                    <span className='text-black'>Jane Doe</span>
                            </div>
                        </div>
                        <div className="user flex items-center justify-between my-[20px]">
                        <div className="userInfo flex items-center gap-[20px] relative">
                                <img className='w-[40px] h-[40px] rounded-3xl object-cover'
                                src={dp}></img>
                                    <div className="online w-[12px] h-[12px] rounded-2xl bg-lime-600 absolute top-0 left-[30px]"></div>
                                    <span className='text-black'>Jane Doe</span>
                            </div>
                        </div>
                        <div className="user flex items-center justify-between my-[20px]">
                        <div className="userInfo flex items-center gap-[20px] relative">
                                <img className='w-[40px] h-[40px] rounded-3xl object-cover'
                                src={dp}></img>
                                    <div className="online w-[12px] h-[12px] rounded-2xl bg-lime-600 absolute top-0 left-[30px]"></div>
                                    <span className='text-black'>Jane Doe</span>
                            </div>
                        </div>
                        <div className="user flex items-center justify-between my-[20px]">
                        <div className="userInfo flex items-center gap-[20px] relative">
                                <img className='w-[40px] h-[40px] rounded-3xl object-cover'
                                src={dp}></img>
                                    <div className="online w-[12px] h-[12px] rounded-2xl bg-lime-600 absolute top-0 left-[30px]"></div>
                                    <span className='text-black'>Jane Doe</span>
                            </div>
                        </div>
                        <div className="user flex items-center justify-between my-[20px]">
                        <div className="userInfo flex items-center gap-[20px] relative">
                                <img className='w-[40px] h-[40px] rounded-3xl object-cover'
                                src={dp}></img>
                                    <div className="online w-[12px] h-[12px] rounded-2xl bg-lime-600 absolute top-0 left-[30px]"></div>
                                    <span className='text-black'>Jane Doe</span>
                            </div>
                        </div>
                        <div className="user flex items-center justify-between my-[20px]">
                        <div className="userInfo flex items-center gap-[20px] relative">
                                <img className='w-[40px] h-[40px] rounded-3xl object-cover'
                                src={dp}></img>
                                    <div className="online w-[12px] h-[12px] rounded-2xl bg-lime-600 absolute top-0 left-[30px]"></div>
                                    <span className='text-black'>Jane Doe</span>
                            </div>
                        </div>
                        <div className="user flex items-center justify-between my-[20px]">
                        <div className="userInfo flex items-center gap-[20px] relative">
                                <img className='w-[40px] h-[40px] rounded-3xl object-cover'
                                src={dp}></img>
                                    <div className="online w-[12px] h-[12px] rounded-2xl bg-lime-600 absolute top-0 left-[30px]"></div>
                                    <span className='text-black'>Jane Doe</span>
                            </div>
                        </div>
                        <div className="user flex items-center justify-between my-[20px]">
                        <div className="userInfo flex items-center gap-[20px] relative">
                                <img className='w-[40px] h-[40px] rounded-3xl object-cover'
                                src={dp}></img>
                                    <div className="online w-[12px] h-[12px] rounded-2xl bg-lime-600 absolute top-0 left-[30px]"></div>
                                    <span className='text-black'>Jane Doe</span>
                            </div>
                        </div>
                        <div className="user flex items-center justify-between my-[20px]">
                        <div className="userInfo flex items-center gap-[20px] relative">
                                <img className='w-[40px] h-[40px] rounded-3xl object-cover'
                                src={dp}></img>
                                    <div className="online w-[12px] h-[12px] rounded-2xl bg-lime-600 absolute top-0 left-[30px]"></div>
                                    <span className='text-black'>Jane Doe</span>
                            </div>
                        </div>
                </div> 
            </div>
        </div>
        </>
    )
}

export default Rightbar;