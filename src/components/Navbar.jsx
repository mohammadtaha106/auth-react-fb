import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Avatar } from "@nextui-org/react";
import AvatarDrop from "./Avatardrop";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaFire } from "react-icons/fa"; 

const Navbar = () => {
  const { user, setuser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successfully");
        toast.error("Log Out Sucessfully", {
          position: "top-center",
          autoClose: 2000,
        });

        setTimeout(() => {
          navigate("/signin");
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <ToastContainer />
      <nav className="flex text-green-500 justify-between items-center px-10 py-5 bg-black shadow-md">
        <div className="text-3xl font-extrabold text-green-500 flex items-center">
          <FaFire className="mr-2" />
          <span style={{ fontFamily: "'Roboto', sans-serif" }}>Firebase</span>
        </div>
        <div className="flex space-x-8 text-lg font-medium">
          {user?.isLogin ? (
            <AvatarDrop
              onclick={handleLogOut}
              img={user?.userInfo?.photourl}
              name={user?.userInfo?.name}
              email={user?.userInfo?.email}
            />
          ) : (
            <Link
              to="/signin"
              className="text-green-500 hover:text-green-300 transition duration-300"
            >
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
