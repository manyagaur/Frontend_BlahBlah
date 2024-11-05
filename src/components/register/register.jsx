function Register(){
    return(
        <>
            <div className="flex justify-center align-middle items-center ">
                <div className="relative">
                    <div className=" border-gray-500 mt-28 bg-white h-[500px] w-[400px] border rounded-lg mx-4 ">
                        <h1 className="absolute left-1/2 transform -translate-x-1/2 top-[95px] text-3xl font-rubikRegular mt-6 text-blue-600">Sign Up</h1>
                        <h1 className="absolute left-[85px] text-center font-rubikRegular font-semibold mt-[46px] text-blue-600">
                            We'd love to have you at BlahBlah!
                        </h1>
                            <div className="grid grid-cols-12">
                                <input className="col-span-6 rounded-md text-gray-700 border border-gray-500 h-[35px] p-2 mt-[100px] ml-2 mr-2" placeholder="First Name"></input>
                                <input className="col-span-6 rounded-md text-gray-700 border border-gray-500 h-[35px] p-2 mt-[100px] mr-2" placeholder="Last Name"></input>
                                <input className="col-span-12 rounded-md text-gray-700 border border-gray-500 h-[35px] p-2 mt-[15px] ml-2 mr-2" placeholder="Email address"></input>
                                <input className="col-span-8 rounded-md text-gray-700 border border-gray-500 h-[35px] p-2 mt-[15px] ml-2 mr-2" placeholder="Username"></input>
                                <select className="col-span-4 rounded-md border border-gray-500 text-gray-700 h-[35px] mt-[15px] ml-2 mr-2">
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                                <option value="Others">Others</option>
                                </select>
                                <div className="col-span-12 mt-2">
                                <label className="ml-2 mt-[4px] text-gray-700 text-[12px]">Date of Birth</label>
                                </div>
                                <input type="date" className="col-span-12 rounded-md border border-gray-500 text-gray-700 h-[35px] p-2 ml-2 mr-2" placeholder="Date of Birth"></input>
                                <input type="password" className="col-span-12 rounded-md border border-gray-500 text-gray-700 h-[35px] mt-[15px] p-2 ml-2 mr-2" placeholder="Create password"></input>
                                <input type="password" className="col-span-12 rounded-md border border-gray-500 text-gray-700 h-[35px] mt-[15px] p-2 ml-2 mr-2" placeholder="Confirm password"></input>
                                <p className="col-span-12 ml-2 mr-2 text-[12px] mt-4">
                                By clicking Sign Up, you agree to our Terms, Privacy Policy, and Cookies Policy.
                                </p>
                                <button className="col-span-12 mx-[140px] bg-blue-600 rounded-lg h-9 hover:bg-blue-700 text-white" type="submit">Sign Up</button>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register;