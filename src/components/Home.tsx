import SingleUser from "./SingleUser";
import data from "../data/userData.json";
import { useEffect, useState } from "react";
import UserItem from "./UserItem";
import { Link } from "react-router-dom";
import { FaBox } from "react-icons/fa6";
import { IoIosCopy } from "react-icons/io";
import { HiPencil } from "react-icons/hi2";

export interface UserDataType {
  id: number,
  name: string,
  email: string,
  score: number,
  behavioural: number,
  communication: number,
  situation_handling: number,
  about: string,
  experience: string,
  hobbies: string,
  introduction: string,
  image: string,
  images:{img:string,question:string}[]
}
export default function Home() {
  const [userData] = useState<UserDataType[]>(data.data);
  const [singleUser, setSingleUser] = useState<UserDataType | null>(null);
  const [isuserSelected, setIsUserSelected] = useState<number | null>(null);

  const handleSetSingleUser = (userId: number) => {
    const user = userData.find(user => user.id === userId);
    if (user) {
      setSingleUser(user)
      setIsUserSelected(user.id)
    }
  }
  useEffect(() => {
    const user = userData.find(user => user.id === 1);
    if (user) {
      setSingleUser(user)
      setIsUserSelected(user.id)
    }
  }, [])
  return (
    <div className="w-full sm:w-80%">
      <nav className="text-[#a5b6c8] ml-4 sm:ml-0">Pages <span className="text-[#4c5565]">/ Assigenment</span></nav>
      <h5 className="my-2 font-medium text-[#2d384a] text-[1rem] ml-4 sm:ml-0">Sales BDE</h5>

      <div className="flex mt-7 gap-4 flex-col md:flex-row">
        <div className="user-list h-[590px] overflow-hidden bg-white py-4 rounded-xl shadow-[rgba(99,99,99,0.1)_0px_2px_8px_0px]">
          <div className="px-4">
            <div className="my-2 mb-4 flex justify-between items-center">
              <h3 className="font-medium text-[#2d384a] text-xl md:text-base lg:text-lg">Sales BDE</h3>
              <div className="flex items-center gap-3">
                <p className="font-medium text-[#00a981] text-xl md:text-base lg:text-lg">Active</p>
                <i className="p-[0.35rem] text-xs rounded-md shadow-[rgba(0,0,0,0.14)_0px_3px_8px]"><HiPencil /></i>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between gap-2 user-assigment">
                <div className="font-medium text-[#79899e] text-[14px] md:text-xs lg:text-sm">Assignment Link</div>
                <Link to={"/"} className="font-medium text-[#288dff] text-[14px] md:text-xs lg:text-sm">https://tiny.url/asknakdna/</Link>
              </div>
              <div className="flex justify-between gap-2 user-assigment">
                <div className="font-medium text-[#79899e] text-[14px] md:text-xs lg:text-sm">Assignment hours</div>
                <div className="font-medium text-[#79899e] text-[14px] md:text-xs lg:text-sm">3 hours</div>
              </div>
              <div className="flex justify-between gap-2 user-assigment">
                <div className="font-medium text-[#79899e] text-[14px] md:text-xs lg:text-sm">Assignment Ends at</div>
                <div className="font-medium text-[#79899e] text-[14px] md:text-xs lg:text-sm">11 March 2024</div>
              </div>
            </div>
            <div className="flex items-center gap-5 mt-7">
              <button className="flex items-center gap-2 md:gap-1 text-xs md:text-[9px] lg:text-xs font-semibold text-[#2d384a] py-2 px-3 lg:px-7 rounded-md shadow-[rgba(0,0,0,0.14)_0px_3px_8px]">
                <i><FaBox /></i>
                TO REVIEW
              </button>
              <button className="flex items-center gap-2 md:gap-1 text-xs md:text-[9px] lg:text-xs font-semibold text-[#2d384a]">
                <i><IoIosCopy /></i>
                SHORTLISTED
              </button>
            </div>
          </div>
          <div>
            <div className="flex justify-between my-4 text-[#a5b6c8] font-medium text-sm md:text-[10px] sm:pr-28 md:pr-4 lg:text-xs px-4 lg:pr-16">
              <p>CANDIDATE</p>
              <p>SCORE</p>
            </div>
            <div className="scroll-bar overflow-auto h-[340px] pb-3">
              {
                userData?.map((user: UserDataType) => (
                  <UserItem key={user.id} {...user} handleSetSingleUser={handleSetSingleUser} isuserSelected={isuserSelected} />
                ))
              }
            </div>
          </div>
        </div>
        {
          singleUser &&
          <SingleUser {...singleUser} />
        }
      </div>
    </div>
  )
}
