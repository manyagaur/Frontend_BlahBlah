import React from "react";
import dp from '../../assets/dp.jpg'
import frens from '../../assets/frens.jpg'

function Stories(){

    const currentUser = {profilePic: dp, name:" Luna Lovegood"}
    const stories = [{
        id:1,
        name: "Penelope Clearwaters",
        img: frens
    },

    {
        id:2,
        name: "Penelope Clearwaters",
        img: frens
    },

    {
        id:3,
        name: "Penelope Clearwaters",
        img: frens
    },

    {
        id:4,
        name: "Penelope Clearwaters",
        img: frens
    },

    {
        id:5,
        name: "Penelope Clearwaters",
        img: frens
    },

    {
        id:6,
        name: "Penelope Clearwaters",
        img: frens
    },

    {
        id:7,
        name: "Penelope Clearwaters",
        img: frens
    }];
    
    return(
        <>
        
        <div className="stories flex gap-[10px] mb-[30px]">
            <div className="story flex-1 relative"> 
                <img className="w-full h-full object-cover rounded-lg shadow-lg shadow-indigo-500/40 border border-white" src={currentUser.profilePic}></img>
                <span className="absolute bottom-[10px] left-[10px] text-white font-semibold">{currentUser.name}</span>
                <button className="absolute left-[10px] bottom-[60px] flex items-center justify-center w-[25px] h-[25px] rounded-xl text-white font-semibold text-[30px] bg-blue-600">+</button>
            </div>
        {stories.map(story =>
            (  <div className=" story flex-1 border-r-[10px] overflow-hidden relative">
                <img className="w-full h-full object-cover rounded-lg shadow-lg shadow-green-500/40 border border-white"  src={story.img} alt=""></img>
                <span className="absolute bottom-[10px] left-[10px] text-white font-semibold">{story.name}</span>
                </div>
            
        ))}
        </div>
        </>
    )
}

export default Stories