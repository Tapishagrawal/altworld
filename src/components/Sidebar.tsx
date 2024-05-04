import { useState } from "react";
import { CiBoxes } from "react-icons/ci";
import { IoHome } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { RiMenu4Line } from "react-icons/ri";

export default function Sidebar() {
    const [isMobileSidebarVisible, setIsMobileSidebarVisible] = useState(false);
    return (
        <>
            {
                isMobileSidebarVisible &&
                <div>
                    <div onClick={()=>setIsMobileSidebarVisible(false)} className="fixed top-0 right-0 bg-black/30 w-full h-screen z-10 backdrop-blur-sm"></div>
                    <div className={`w-[300px] p-5 bg-[#F8F9F8] fixed top-0 left-0 h-[1000px] hidden max-[1200px]:inline-block shadow-lg z-[99]`}>
                        <div className="relative flex items-center gap-2 border-b pb-5">
                            <i className="text-3xl"><CiBoxes /></i>
                            <h1 className="font-semibold text-sm text-[#2E3849]">Hi, AltWorld</h1>
                            <i className="absolute right-0 hidden max-[1200px]:inline-block bg-white p-1 rounded-md shadow-sm" onClick={() => setIsMobileSidebarVisible(false)}><IoClose /></i>
                        </div>

                        <div className="my-10 flex items-center gap-3">
                            <i className="bg-white rounded-full p-2 text-[#1EC3B3]"><IoHome /></i>
                            <h3 className="font-semibold text-[#2E3849]">Dashboard</h3>
                        </div>

                        <div className="bg-[#4FD1C5] p-4 text-white rounded-2xl">
                            <div className="text-[#728197] bg-white w-[35px] h-[35px] rounded-xl flex justify-center items-center text-3xl">+</div>
                            <h3 className="my-2 mt-5 font-medium">New Assignment?</h3>
                            <p className="text-white/80 text-sm line-clamp-2">Select from pre-defined questions to have a quick turnaround.</p>
                            <button className="mt-3 bg-white text-[#303A4B] text-sm  w-full p-2 rounded-lg font-medium">Create New Assignment</button>
                        </div>
                    </div>
                </div>
            }

            <div className="sidebar">
                <div className={`w-full pr-7 bg-[#F8F9F8] max-[1200px]:hidden`}>
                    <div className="flex items-center gap-2 border-b pb-5">
                        <i className="text-3xl"><CiBoxes /></i>
                        <h1 className="font-semibold text-sm text-[#2E3849]">Hi, AltWorld</h1>
                    </div>

                    <div className="my-10 flex items-center gap-3">
                        <i className="bg-white rounded-full p-2 text-[#1EC3B3]"><IoHome /></i>
                        <h3 className="font-semibold text-[#2E3849]">Dashboard</h3>
                    </div>

                    <div className="bg-[#4FD1C5] p-4 text-white rounded-2xl">
                        <div className="text-[#728197] bg-white w-[35px] h-[35px] rounded-xl flex justify-center items-center text-3xl">+</div>
                        <h3 className="my-2 mt-5 font-medium">New Assignment?</h3>
                        <p className="text-white/80 text-sm line-clamp-2">Select from pre-defined questions to have a quick turnaround.</p>
                        <button className="mt-3 bg-white text-[#303A4B] text-sm  w-full p-2 rounded-lg font-medium">Create New Assignment</button>
                    </div>
                </div>
                <button onClick={() => setIsMobileSidebarVisible(true)} className="hidden max-[1200px]:inline-block mr-2 py-2" ><i><RiMenu4Line /></i></button>
            </div>
        </>
    )
}
