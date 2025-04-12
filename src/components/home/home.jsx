import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/navbar";
import Leftbar from "../leftbar/leftbar";
import Rightbar from "../rightbar/rightbar";
import Posts from "../posts/posts";
import Stories from "../Stories/Stories";
import dp from '../../assets/dp.jpg'


function Home() {
    const nav = useNavigate();

    const [caption, setCaption] = useState('');
    const [image, setImage] = useState(null);

    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0]; 
        if (file) {
            setImage(file);
            setImagePreview(URL.createObjectURL(file)); // Generate preview URL
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('caption', caption);
        formData.append('image', image);
    
        try {
          const res = await axios.post('http://localhost:8800/api/posts', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
            withCredentials: true,  // Enable cookies
          });
    
          alert('Post added successfully!');
        } catch (err) {
          console.error('Error uploading post:', err);
        }
      };

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
                    <form onSubmit={handleSubmit} className="grid gap-6 p-6">
                        <div className="add bg-white shadow-lg rounded-lg p-6 gap-4">
                            <div className="flex">
                                <img className="h-10 w-10 rounded-full" src={dp} alt="User" />
                                <span className="text-gray-600">What's on your mind?</span>
                            </div>

                            <div className="mt-4">
                                <textarea
                                    className="h-auto w-full border p-2 mt-2 border-gray-300 rounded resize-none overflow-auto"
                                    placeholder="Type your thoughts here..."
                                    rows={4}
                                ></textarea>

                                {/* Flexbox container for Add Image and Submit Post */}
                                <div className="flex justify-between items-center mt-4">
                                    <div className="relative">
                                    {imagePreview && (
                                        <div className="mt-4">
                                            <img
                                                src={imagePreview}
                                                alt="Preview"
                                                className="w-full h-40 object-cover rounded-lg"
                                            />
                                            <button
                                                onClick={() => setImagePreview(null)}
                                                className="my-2  text-red-500 hover:text-red-700"
                                            >
                                                Remove Image
                                            </button>
                                        </div>
                                    )}
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            id="fileInput"
                                            onChange={handleImageChange}
                                        />
                                        <label
                                            htmlFor="fileInput"
                                            className="cursor-pointer px-2 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                        >
                                            Add Image
                                        </label>
                                    </div>

                                    <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                                        Submit Post
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>

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
