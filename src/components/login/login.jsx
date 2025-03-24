import React, { useState } from "react";
import img from "../../assets/8976.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
});

const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8800/api/auth/login", formData);

      if (response.status === 200) {
        alert("Login successful!");
        navigate("/home");  
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError("No account found!");
      } else if (error.response && error.response.status === 500) {
        setError("Incorrect password!");
      } else {
        setError("Login failed! Please try again.");
      }
      console.error("Error while login:", error);
    }
  };

  return (
    <>
      <div className="">
        <div className="grid justify-center gap-0 sm:grid-cols-2 mx-[40px] mt-[80px]">
          <div className="hidden sm:block col-span-1 relative h-[540px]">
            <div
              className="absolute right-0 w-72 h-[540px]"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(0,100,290,0.6), rgba(130,140,160,0.6)), url(${img})`,
                backgroundSize: "cover",
              }}
            >
              <h1 className="text-[32px] font-bold text-white ml-5 mt-2">
                Welcome to Blah Blah
              </h1>
              <p className="mx-5 mt-6 mb-4 font-semibold font-r text-[16px] text-white">
                BlahBlah is the ultimate social networking hub that turns every
                conversation into a vibrant experience. Whether you're sharing
                your latest triumphs, diving into deep discussions, or simply
                catching up on the buzz, Join us today, and let's turn your
                chatter into a symphony of connections!
              </p>
              <span className="text-[14px] text-white font-semibold ml-5">
                Don't have an account?
              </span>
              <br />
              <button
                type="button"
                className="mt-2 p-2 text-white border rounded-md ml-5 border-white w-[100px] hover:w-[102px] font-semibold"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            </div>
          </div>
          <div className="col-span-1 border border-gray-500 w-72 h-[540px]">
            <h1 className="text-[38px] text-blue-500 ml-4 mt-2 font-bold">
              Login
            </h1>
            <input
              className="rounded-md mx-4 mt-[70px] p-2 w-[250px] border border-gray-400"
              placeholder="Enter your email"
              name="email"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <input
              className="rounded-md mx-4 mt-[20px] p-2 w-[250px] border border-gray-400"
              placeholder="Enter your password"
              type="password"
              name="password"
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            {error && (
              <p className="text-red-500 text-sm mx-4 mt-2">{error}</p>
            )}
            <button
              type="submit"
              className="hover:w-[102px] mt-12 p-2 font-semibold text-white bg-blue-600 border rounded-md ml-5 border-white w-[100px] hover:bg-blue-700"
              onClick={handleLogin}
              style={{
                backgroundImage: `linear-gradient(45deg, rgba(0,100,140,0.6), rgba(130,140,160,0.6)), url(${img})`,
                backgroundSize: "cover",
                transition: "background-image 0.3s ease-in-out",
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
