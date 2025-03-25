import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/navbar";
import Leftbar from "../leftbar/leftbar";
import Rightbar from "../rightbar/rightbar";
import Posts from "../posts/posts";
import Stories from "../Stories/Stories";
import dp from '../../assets/dp.jpg'

function Home() {
    const nav = useNavigate();

    return (
        <>
            <Navbar />
            <hr className="border border-blue-300" />
            <div className="h-screen grid grid-cols-12">
                {/* Left Sidebar (Visible only on medium and larger screens) */}
                <div className="hidden md:block h-screen bg-white col-span-2">
                    <Leftbar />
                </div>

                {/* Main Content */}
                <div className="mainpage col-span-12 md:col-span-7 h-screen bg-gray-200 overflow-scroll lg:p-4">
                    <Stories />
                    <div className="grid gap-6 p-6">
                        <div className = "add bg-white shadow-lg rounded-lg p-6 gap-4">
                            <div className="flex">
                                <img
                                className="h-10 w-10 rounded-full" 
                                src={dp}>
                                </img>
                                <span className="text-gray-600">What's on your mind?</span>
                            </div>
                            <textarea
                                className="h-auto w-full border p-2 mt-2 border-gray-300 rounded resize-none overflow-auto"
                                placeholder="Type your thoughts here..."
                                rows={4}  // Initial height of 3 rows, can be adjusted
                            ></textarea>
                            <div className="flex mt-4 gap-2">
                                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                    Add Image
                                </button>
                                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                    Add Place
                                </button>
                                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                    Add Location
                                </button>
                            </div>
                        </div>
                    </div>
                    <Posts />
                </div>

                {/* Right Sidebar (Visible only on medium and larger screens) */}
                <div className="hidden md:block h-screen col-span-3 lg:p-4 lg:bg-white">
                    <Rightbar />
                </div>
            </div>
        </>
    );
}

export default Home;
