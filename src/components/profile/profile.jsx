import Leftbar from "../leftbar/leftbar";
import Navbar from "../navbar/navbar";
import Rightbar from "../rightbar/rightbar";
import Content from "../content/content";
import { useNavigate } from "react-router-dom";

function Profile(){

    const nav = useNavigate()
    return(
        <>
        <Navbar/>
        <hr className="border border-gray-400"/>
        <div className="h-screen grid grid-cols-12">
            <div className="hidden md:block h-screen bg-white col-span-2">
                <Leftbar/>
            </div>
            <div className="mainpage col-span-12 md:col-span-7 h-screen bg-gray-200 overflow-scroll lg:p-4">
                <Content/>
            </div>
            <div className="hidden md:block h-screen col-span-3 lg:p-4 lg:bg-white">
                <Rightbar/>
            </div>
        </div>
        </>
    )
}

export default Profile;