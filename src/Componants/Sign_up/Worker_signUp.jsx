// components/Sign_up/Worker_signUp.jsx
import { motion } from "framer-motion";

const Worker_signUp = ({ onClose, goBack }) => {
    return (
        <div className="h-full max-h-[90vh] overflow-y-auto">
            {/* Main Card */}
            <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">

                {/* Header Section */}
                <div className="bg-[#1E6EA7] p-6 text-white relative">
                    <div className="flex justify-between items-center w-full mb-4">
                        <button
                            className="text-white text-xl hover:bg-white/20 px-3 rounded-full transition flex items-center"
                            onClick={goBack}
                        >
                            ←
                        </button>
                        <h2 className="text-lg font-semibold">Worker</h2>
                        <button
                            onClick={onClose}
                            className="text-white text-xl hover:bg-white/20 px-3 rounded-full transition flex items-center"
                        >
                            ✕
                        </button>
                    </div>

                    <h1 className="text-2xl font-bold">Create an Account</h1>
                    <p className="text-sm opacity-90 mt-1">
                        Please fill the details below for create an account
                    </p>
                </div>

                {/* Form Section */}
                <div className="p-6">

                    {/* Avatar - positioned relative to header */}
                    <div className="flex justify-center">
                        <div
                            className="w-20 h-20 bg-white rounded-full shadow flex items-center justify-center border-4 border-white cursor-pointer hover:bg-gray-50 transition-colors"
                            onClick={() => document.getElementById('avatar-input').click()}
                        >
                            <span className="text-gray-400 text-2xl">📷</span>
                        </div>
                        <input
                            type="file"
                            id="avatar-input"
                            accept="image/*"
                            className="hidden"
                        />
                    </div>

                    {/* Form */}
                    <form className="space-y-6 mt-2">
                        <input
                            type="text"
                            placeholder="Forenames*"
                            className="w-full border-b border-gray-300 focus:outline-none focus:border-orange-500 py-3"
                        />

                        <input
                            type="text"
                            placeholder="Surname"
                            className="w-full border-b border-gray-300 focus:outline-none focus:border-[#1E6EA7] py-3"
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full border-b border-gray-300 focus:outline-none focus:border-[#1E6EA7] py-3"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full border-b border-gray-300 focus:outline-none focus:border-[#1E6EA7] py-3"
                        />

                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full border-b border-gray-300 focus:outline-none focus:border-[#1E6EA7] py-3"
                        />

                        <input
                            type="date"
                            className="w-full border-b border-gray-300 focus:outline-none focus:border-[#1E6EA7] py-3"
                        />

                        {/* Gender */}
                        <div className="space-y-2">
                            <p className="text-sm text-gray-600">Gender</p>
                            <div className="flex gap-6">
                                <label className="flex items-center gap-2 text-sm">
                                    <input type="radio" name="gender" className="text-[#1E6EA7]" />
                                    Male
                                </label>
                                <label className="flex items-center gap-2 text-sm">
                                    <input type="radio" name="gender" className="text-[#1E6EA7]" />
                                    Female
                                </label>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="button"
                            className="w-full bg-[#1E6EA7] text-white py-3 rounded-lg font-semibold hover:bg-[#136096] transition mt-8"
                        >
                            Create Account
                        </button>

                        {/* Already have account */}
                        <p className="text-center text-sm text-gray-500 mt-4">
                            Already have an account?{" "}
                            <button type="button" className="text-[#1E6EA7] font-medium">
                                Sign In
                            </button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Worker_signUp;