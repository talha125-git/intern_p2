import React, { useState } from "react";
import {
  FaStar,
  FaBars,
  FaXmark,
} from "react-icons/fa6";
import { GoQuestion, GoInfo, GoPersonAdd } from "react-icons/go";
import { BsPerson } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { BsCash } from "react-icons/bs";
import { LiaTelegram } from "react-icons/lia";
import { IoSearch } from "react-icons/io5";
import { MdHistory, MdOutlineMarkEmailUnread, MdOutlineSettings } from "react-icons/md";
import { LuLogOut, LuWallet } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const HirerDashboard = () => {
  const navigate = useNavigate();
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 pb-24 relative">

      {/* Sidebar Overlay */}
      {openSidebar && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpenSidebar(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-[350px] bg-white z-50 shadow-lg
          transition-transform duration-300 overflow-y-auto
          ${openSidebar ? "translate-x-0" : "-translate-x-full"}`}

      >
        {/* Header */}
        <div className="relative p-5 border-b">
          <FaXmark
            className="absolute right-4 top-4 text-2xl cursor-pointer"
            onClick={() => setOpenSidebar(false)}
          />

          <div className="flex items-center gap-4">
            <img src="" className="w-14 h-14 rounded-full bg-gray-300" />
            <div>
              <h2 className="font-semibold text-lg">Talha Raheem</h2>
              <p className="text-sm text-orange-500">
                malikabutalharaheem@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Menu */}
        <div className="divide-y">
          <button onClick={() => navigate("/find-worker")} className="menu-btn"> <IoSearch /> Find a Worker</button>
          <button onClick={() => navigate("/history")} className="menu-btn"> <MdHistory /> History</button>
          <button onClick={() => navigate("/messages")} className="menu-btn"> <LiaTelegram /> Messages</button>
          <button onClick={() => navigate("/spendings")} className="menu-btn"> <BsCash /> My Spendings</button>
          <button onClick={() => navigate("/invoices")} className="menu-btn"> <GoQuestion /> My Invoices</button>
          <button onClick={() => navigate("/wallet")} className="menu-btn"> <LuWallet /> Wallet</button>
          <button onClick={() => navigate("/resolution")} className="menu-btn"> <MdOutlineMarkEmailUnread /> Resolution Center</button>
          <button onClick={() => navigate("/follow-workers")} className="menu-btn"> <FaRegStar /> Follow Workers</button>
          <button onClick={() => navigate("/settings")} className="menu-btn"> <GoQuestion /> Settings</button>
          <button onClick={() => navigate("/faqs")} className="menu-btn"> <GoQuestion /> FAQs</button>
          <button onClick={() => navigate("/support")} className="menu-btn"> <BsPerson /> Support Chat</button>
          <button onClick={() => navigate("/about")} className="menu-btn"> <GoInfo /> About</button>
          <button onClick={() => navigate("/invite")} className="menu-btn"> <GoPersonAdd /> Invite Friends</button>
          <button className="menu-btn"> <LuLogOut /> Log out</button>
          <button className="menu-btn text-red-500"> Delete Account</button>
        </div>


      </div>


      {/* Header */}
      <div className="relative bg-white shadow-sm pb-20">
        <div className="relative z-10 container mx-auto gap-2 px-4 pt-6">

          {/* Top Bar */}
          <div>
            <FaBars
              className="text-2xl cursor-pointer mb-4"
              onClick={() => setOpenSidebar(true)}
            />
          </div>

          {/* Profile Info */}
          <div className="flex items-center">
            <div className="flex-1">
              <h1 className="text-2xl font-bold">Arif</h1>
              <p className="text-gray-500 mb-1">Cinch</p>
              <div className="flex items-center text-yellow-400">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                <span className="ml-2 text-gray-800 font-medium">5/5</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div onClick={() => navigate("/feedbacks")} className="bg-white rounded-lg shadow text-center p-4">
              <span className="block text-lg font-bold">0</span>
              <span className="text-sm text-gray-500 uppercase">Feedbacks</span>
            </div>
            <div onClick={() => navigate("/followers")} className="bg-white rounded-lg shadow text-center p-4">
              <span className="block text-lg font-bold">0</span>
              <span className="text-sm text-gray-500 uppercase">Followers</span>
            </div>
            <div onClick={() => navigate("/following")} className="bg-white rounded-lg shadow text-center p-4">
              <span className="block text-lg font-bold">0</span>
              <span className="text-sm text-gray-500 uppercase">Following</span>
            </div>
            <div onClick={() => navigate("/work-history")} className="bg-white rounded-lg shadow text-center p-4">
              <span className="block text-lg font-bold">2</span>
              <span className="text-sm text-gray-500 uppercase">New Work</span>
            </div>
            <div onClick={() => navigate("/work-history")} className="bg-white rounded-lg shadow text-center p-4">
              <span className="block text-lg font-bold">0</span>
              <span className="text-sm text-gray-500 uppercase">In-Progress</span>
            </div>
            <div onClick={() => navigate("/work-history")} className="bg-white rounded-lg shadow text-center p-4">
              <span className="block text-lg font-bold">0</span>
              <span className="text-sm text-gray-500 uppercase">Finished</span>
            </div>
          </div>

          <p className="mt-4 text-gray-600">about me text here</p>
        </div>
      </div>

      {/* Skills Card */}
      <div className="container mx-auto px-4 mt-6">
        <div className="bg-orange-500 text-white rounded-xl p-6 shadow">
          <h4 className="font-bold mb-4">My Industry & Skills</h4>
          <div className="bg-white text-gray-800 rounded-lg px-4 py-2 font-medium">
            Accounting & Finance
          </div>
        </div>
      </div>
    </div>
  );
};

export default HirerDashboard;
